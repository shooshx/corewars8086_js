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

struct AllocChunk {
    struct AllocChunk *next, *prev;
};

#ifdef LEAK_DETECT
#define LIST_OVERHEAD (3*sizeof(void*))

struct AllocChunk g_firstDummy = { 0, 0 }, g_lastDummy = { 0, 0 };
struct AllocChunk* g_allocStart = NULL;
int g_allocated = 0, g_freed = 0;
FILE* g_alloclog = NULL;

void initAllocList() {
    if (g_allocStart == NULL)
        return;
    g_firstDummy.next  = &g_lastDummy;
    g_lastDummy.prev = &g_firstDummy;
    g_allocStart = &g_firstDummy;
    //g_alloclog = fopen("C:\\projects\\codewars_js\\eclipse\\codewars_js\\assembler\\_alloc_log.txt", "w");
}
void printLeak() {
    printf("alloc %d freed %d = %d\n", g_allocated, g_freed, g_allocated - g_freed);
}

void listAdd(struct AllocChunk* p, int sz) {
    p->next = g_allocStart->next;
    p->prev = g_allocStart;
    g_allocStart->next->prev = p;
    g_allocStart->next = p;
    g_allocStart = p;
    ++g_allocated;
    //fprintf(g_alloclog, "alloc =%X (%d) %d %d\n", p, sz, g_allocated, g_freed);
    fflush(g_alloclog);
}
void listRemove(struct AllocChunk* p) {
    //fprintf(g_alloclog, "free  =%X  %d %d\n", p, g_allocated, g_freed);
    fflush(g_alloclog);
    p->next->prev = p->prev;
    p->prev->next = p->next;
    if (g_allocStart == p)
        g_allocStart = p->prev;
    ++g_freed;
}

#else

#define LIST_OVERHEAD (0)
void listRemove(struct AllocChunk* p) {}
void listAdd(struct AllocChunk* p, int sz) {}
void initAllocList() {}
void printLeak() {}

#endif


void *nasm_malloc(size_t size)
{
    void *p = malloc(size + LIST_OVERHEAD);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");

    listAdd((struct AllocChunk*)p, size);

    return ((char*)p) + LIST_OVERHEAD;
}

void *nasm_calloc(size_t size, size_t nelem)
{
    size_t sz = size*nelem;
    void *p = calloc(sz + LIST_OVERHEAD, 1);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");
    listAdd((struct AllocChunk*)p, sz);

    return ((char*)p) + LIST_OVERHEAD;
}

void *nasm_zalloc(size_t size)
{
    return nasm_calloc(size, 1);
}

void *nasm_realloc(void *q, size_t size)
{
    if (q) {
        listRemove((struct AllocChunk*)q);
    }
    void *p = q ? realloc(q, size + LIST_OVERHEAD) : malloc(size + LIST_OVERHEAD);
    if (!p)
        nasm_fatal(ERR_NOFILE, "out of memory");
    listAdd(p, size);
    return ((char*)p) + LIST_OVERHEAD;
}

void nasm_free(void *q)
{
    if (q) {
        q = ((char*)q) - LIST_OVERHEAD;
        listRemove(q);
        free(q);
    }
}

char *nasm_strdup(const char *s)
{
    char *p;
    size_t size = strlen(s) + 1;

    p = nasm_malloc(size);
    return memcpy(p, s, size);
}

char *nasm_strndup(const char *s, size_t len)
{
    char *p;

    len = strnlen(s, len);
    p = nasm_malloc(len+1);
    p[len] = '\0';
    return memcpy(p, s, len);
}

char *nasm_strcat(const char *one, const char *two)
{
    char *rslt;
    size_t l1 = strlen(one);
    size_t l2 = strlen(two);
    rslt = nasm_malloc(l1 + l2 + 1);
    memcpy(rslt, one, l1);
    memcpy(rslt + l1, two, l2+1);
    return rslt;
}
