# Assemblyscript-boilerplate

AssemblyScript scaffolding project, based on github.com/AssemblyScript/assemblyscript

assembly/index.ts: entrypoint for modules.  
tsconfig: specifies build options for ts file. 
index.html: dummy page that references wasmloader.js  
wasmloader.js: loads the WebAssembly module

## Setup
clone  
npm i  
npx asinit .  
npm run asbuild - compiles the files  