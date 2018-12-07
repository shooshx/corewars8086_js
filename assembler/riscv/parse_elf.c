#include <stdio.h>

typedef unsigned int uint32_t;
typedef unsigned char uint8_t;
typedef unsigned short uint16_t;
typedef unsigned int arch_t;

// https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
struct ElfHeader {
    uint32_t e_ident_magic;
    uint8_t  e_ident_bitness;
    uint8_t  e_ident_endianess;
    uint8_t  e_ident_ver;
    uint8_t  e_ident_abi;
    uint8_t  e_ident_abiver;
    uint8_t  e_ident_pad[7];
    uint16_t e_type;
    uint16_t e_machine;
    uint32_t e_version;
    arch_t   e_entry;
    arch_t   e_phoff;
    arch_t   e_shoff;
    uint32_t e_flags;
    uint16_t e_ehsize;
    uint16_t e_phentsize;
    uint16_t e_phnum;
    uint16_t e_shentsize;
    uint16_t e_shnum;
    uint16_t e_shstrndx;
};

struct ElfSection {
    uint32_t sh_name;
    uint32_t sh_type;
    arch_t   sh_flags;
    arch_t   sh_addr;
    arch_t   sh_offset; // in this file`
    arch_t   sh_size;
    uint32_t sh_link;
    uint32_t sh_info;
    arch_t   sh_addralign;
    arch_t   sh_entsize;
};


int parse_elf(char* buf, int len, int* bin_offset, int* bin_len) {
    struct ElfHeader* elf_header;
    int offset;
    
    if (len < sizeof(struct ElfHeader)) {
        printf("unexpected elf size\n");
        return -1;
    }
    elf_header = (struct ElfHeader*)buf;
    if (elf_header->e_ehsize != sizeof(struct ElfHeader) || elf_header->e_shentsize != sizeof(struct ElfSection)) {
        printf("unexpected elf header size %d %d\n", elf_header->e_ehsize, elf_header->e_shentsize);
        return -2;
    }
    offset = elf_header->e_shoff;
    for(int i = 0; i < elf_header->e_shnum; ++i) {
        struct ElfSection* sect = (struct ElfSection*)(buf + offset);
        //printf("section %d  %d (%d)\n", sect->sh_type, sect->sh_offset, sect->sh_size);
        // take first section that has type 1
        if (sect->sh_type == 1) {
            *bin_offset = sect->sh_offset;
            *bin_len = sect->sh_size;
            break;
        }
        offset += elf_header->e_shentsize;
    }
    return 0;
}