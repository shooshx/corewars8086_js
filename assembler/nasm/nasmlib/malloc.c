/* ----------------------------------------------------------------------- *
 *   
 *   Copyright 1996-2016 The NASM Authors - All Rights Reserved
 *   See the file AUTHORS included with the NASM distribution for
 *   the specific copyright holders.
 *
 *   Redistribution and use in source and binary forms, with or without
 *   modification, are permitted provided that the following
 *   conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following
 *     disclaimer in the documentation and/or other materials provided
 *     with the distribution.
 *     
 *     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
 *     CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 *     INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 *     MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *     DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 *     CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *     SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *     NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *     LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 *     HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 *     CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 *     OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 *     EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ----------------------------------------------------------------------- */

/*
 * nasmlib.c	library routines for the Netwide Assembler
 */

#include "compiler.h"

#include <stdlib.h>

#include "nasmlib.h"
#include "error.h"

//#define LEAK_DETECT


#ifdef LEAK_DETECT

struct AllocChunk {
    struct AllocChunk *next, *prev;
	int index;
	int size;
	const char* filename;
	int line;
	int align_dummy;
};

#define LIST_OVERHEAD (sizeof(struct AllocChunk) + sizeof(void*))

struct AllocChunk g_firstDummy = { 0, 0 }, g_lastDummy = { 0, 0 };
struct AllocChunk* g_allocStart = NULL;
struct AllocChunk* g_leakCursor = NULL;
int g_allocated = 0, g_freed = 0;
//FILE* g_alloclog = NULL;


void initAllocList() {
	//printf("~~ initAlloc %p\n", g_allocStart);
    if (g_allocStart != NULL)
        return;
    g_firstDummy.next  = &g_lastDummy;
    g_lastDummy.prev = &g_firstDummy;
    g_allocStart = &g_firstDummy;
	g_leakCursor = &g_firstDummy;
	
	printf("~~ initAlloc2 %p\n", g_allocStart);
    //g_alloclog = fopen("C:\\projects\\codewars_js\\eclipse\\codewars_js\\assembler\\_alloc_log.txt", "w");
}

extern int g_runInstances;
int g_lastDiff = 0;

void printLeak() {
	int diff = g_allocated - g_freed;
    printf("%d : alloc %d freed %d = %d .. %d\n", g_runInstances, g_allocated, g_freed, diff, diff-g_lastDiff);
	g_lastDiff = diff;
	
	struct AllocChunk* p = g_allocStart;
	while (p->next != NULL) {
		printf("  >%d %p(%d): %s:%d\n", p->index, (char*)p + LIST_OVERHEAD, p->size, p->filename, p->line);
		p = p->next;
	}
}


void listAdd(struct AllocChunk* p, int sz, const char* filename, int line) {
	//printf("~~ add    %d  %p p=%p\n", g_allocated, g_allocStart, p);
    p->next = g_allocStart->next;
    p->prev = g_allocStart;
    g_allocStart->next->prev = p;
    g_allocStart->next = p;
	p->index = g_allocated;
	p->size = sz;
	p->filename = filename;
	p->line = line;

    ++g_allocated;
    //fprintf(g_alloclog, "alloc =%X (%d) %d %d\n", p, sz, g_allocated, g_freed);
    //fflush(g_alloclog);
}
void listRemove(struct AllocChunk* p) {
	//printf("~~ remove %d\n", p->index);
    //fprintf(g_alloclog, "free  =%X  %d %d\n", p, g_allocated, g_freed);
    //fflush(g_alloclog);
    p->next->prev = p->prev;
    p->prev->next = p->next;

    ++g_freed;
}

#else

#define LIST_OVERHEAD (0)
void initAllocList() {}
void printLeak() {}

#endif


#ifdef LEAK_DETECT
void *r_nasm_malloc(size_t size, const char* filename, int line)
#else
void *nasm_malloc(size_t size)
#endif
{
    void *p = malloc(size + LIST_OVERHEAD);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");

#ifdef LEAK_DETECT
    listAdd((struct AllocChunk*)p, size, filename, line);
#endif	

    return ((char*)p) + LIST_OVERHEAD;
}

#ifdef LEAK_DETECT
void *r_nasm_calloc(size_t size, size_t nelem, const char* filename, int line)
#else
void *nasm_calloc(size_t size, size_t nelem)
#endif
{
    size_t sz = size*nelem;
    void *p = calloc(sz + LIST_OVERHEAD, 1);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");
#ifdef LEAK_DETECT
    listAdd((struct AllocChunk*)p, sz, filename, line);
#endif	

    return ((char*)p) + LIST_OVERHEAD;
}

#ifdef LEAK_DETECT
void *r_nasm_zalloc(size_t size, const char* filename, int line)
{
    return r_nasm_calloc(size, 1, filename, line);
}
#else
void *nasm_zalloc(size_t size)
{
    return nasm_calloc(size, 1);
}
#endif

#ifdef LEAK_DETECT
void *r_nasm_realloc(void *q, size_t size, const char* filename, int line)
#else
void *nasm_realloc(void *q, size_t size)
#endif
{
    if (q) {
        q = ((char*)q) - LIST_OVERHEAD;
#ifdef LEAK_DETECT	        
        listRemove((struct AllocChunk*)q);
#endif        
    }
    void *p = q ? realloc(q, size + LIST_OVERHEAD) : malloc(size + LIST_OVERHEAD);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");
#ifdef LEAK_DETECT	
    listAdd(p, size, filename, line);
#endif
    return ((char*)p) + LIST_OVERHEAD;
}

void nasm_free(void *q)
{
    if (q) {
        q = ((char*)q) - LIST_OVERHEAD;
#ifdef LEAK_DETECT	        
        listRemove(q);
#endif        
        free(q);
    }
}

#ifdef LEAK_DETECT
char *r_nasm_strdup(const char *s, const char* filename, int line)
#else
char *nasm_strdup(const char *s)
#endif
{
    char *p;
    size_t size = strlen(s) + 1;

#ifdef LEAK_DETECT
    p = r_nasm_malloc(size, filename, line);
#else	
    p = nasm_malloc(size);
#endif	
    return memcpy(p, s, size);
}

#ifdef LEAK_DETECT
char *r_nasm_strndup(const char *s, size_t len, const char* filename, int line)
#else
char *nasm_strndup(const char *s, size_t len)
#endif
{
    char *p;

    len = strnlen(s, len);
#ifdef LEAK_DETECT	
    p = r_nasm_malloc(len+1, filename, line);
#else
	p = nasm_malloc(len+1);	
#endif
    p[len] = '\0';
    return memcpy(p, s, len);
}

#ifdef LEAK_DETECT
char *r_nasm_strcat(const char *one, const char *two, const char* filename, int line)
#else
char *nasm_strcat(const char *one, const char *two)
#endif	
{
    char *rslt;
    size_t l1 = strlen(one);
    size_t l2 = strlen(two);
#ifdef LEAK_DETECT	
    rslt = r_nasm_malloc(l1 + l2 + 1, filename, line);
#else
	rslt = nasm_malloc(l1 + l2 + 1);	
#endif
    memcpy(rslt, one, l1);
    memcpy(rslt + l1, two, l2+1);
    return rslt;
}
