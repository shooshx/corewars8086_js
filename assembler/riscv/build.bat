rem -O3
rem -g3 -O0 
rem run C:\lib\emscripten\emsdk\emsdk_env.bat before first time

%EMSCRIPTEN%\emcc -O3   ^
-o ../../war/gas_riscv_js.html --pre-js prejs.js -s ENVIRONMENT=web -s ALLOW_MEMORY_GROWTH=0 -s TOTAL_MEMORY=33554432 -s EXPORTED_FUNCTIONS="['_run_gas']" -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap']" -s WASM=0   -s ASSERTIONS=1 -s SAFE_HEAP=1 -s DEMANGLE_SUPPORT=1  -D_DEBUG -D_LIBCPP_DEBUG=1 --memory-init-file 0 -I.\em_build\gas_added -I.\em_build -I.\gas -I.\em_build\include -I.\bfd -I.\opcodes  -I.\gas\config -I. -I.\em_build\zlib ./gas/app.c ./gas/as.c ./gas/atof-generic.c ./gas/cond.c ./gas/depend.c ./gas/dwarf2dbg.c ./gas/dw2gencfi.c ./gas/ecoff.c ./gas/ehopt.c ./gas/expr.c ./gas/flonum-copy.c ./gas/flonum-konst.c ./gas/flonum-mult.c ./gas/frags.c ./gas/hash.c ./gas/input-file.c ./gas/input-scrub.c ./gas/listing.c ./gas/literal.c ./gas/macro.c ./gas/messages.c ./gas/output-file.c ./gas/read.c ./gas/remap.c ./gas/sb.c ./gas/stabs.c ./gas/subsegs.c ./gas/symbols.c ./gas/write.c  ./gas/config/tc-riscv.c ./gas/config/atof-ieee.c ./gas/config/obj-elf.c  ^
	"-DSELECT_VECS=&riscv_elf32_vec" "-DSELECT_ARCHITECTURES=&bfd_riscv_arch" "-DDEBUGDIR=\"/lib/debug\"" ./bfd/archive.c ./bfd/archures.c ./bfd/bfd.c ./bfd/bfdio.c ./bfd/bfdwin.c ./bfd/cache.c ./bfd/coff-bfd.c  ./bfd/corefile.c ./bfd/format.c ./bfd/hash.c ./bfd/init.c ./bfd/libbfd.c ./bfd/linker.c ./bfd/merge.c ./bfd/opncls.c ./bfd/reloc.c ./bfd/section.c ./bfd/simple.c ./bfd/stab-syms.c ./bfd/stabs.c ./bfd/syms.c ./bfd/targets.c ./bfd/compress.c  ./bfd/cpu-riscv.c ./bfd/elf32-riscv.c ./bfd/elf.c ./bfd/elf32.c ./bfd/elflink.c ./bfd/elf-eh-frame.c ./bfd/elf-strtab.c ./bfd/dwarf1.c ./bfd/dwarf2.c ./bfd/elf-attrs.c ./bfd/elfxx-riscv.c ./bfd/elf-properties.c ./bfd/binary.c ^
-DHAVE_CONFIG_H ./libiberty/objalloc.c ./libiberty/obstack.c ./libiberty/concat.c ./libiberty/argv.c ./libiberty/filename_cmp.c ./libiberty/getruntime.c ./libiberty/getpwd.c ./libiberty/hex.c ./libiberty/hashtab.c ./libiberty/lbasename.c ./libiberty/unlink-if-ordinary.c ./libiberty/xatexit.c ./libiberty/xexit.c ./libiberty/xmalloc.c ./libiberty/xmemdup.c ./libiberty/xstrdup.c ./libiberty/xstrerror.c ./libiberty/safe-ctype.c ./libiberty/lrealpath.c ./libiberty/xstrndup.c ^
./opcodes/riscv-opc.c ^
./parse_elf.c
    
    
rem ./bfd/verilog.c ./bfd/tekhex.c  ./gas/config/obj-aout.c
rem "-DSELECT_VECS=&riscv_elf32_vec"  ./bfd/elf.c ./bfd/elflink.c

rem ./bfd/elf.c ./bfd/elflink.c ./bfd/elf-eh-frame.c ./bfd/elf-strtab.c

rem  ./bfd/ihex.c ./bfd/srec.c