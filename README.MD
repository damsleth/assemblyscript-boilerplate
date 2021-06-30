# Assemblyscript-boilerplate

AssemblyScript scaffolding project, based on github.com/AssemblyScript/assemblyscript

assembly/index.ts: entrypoint for modules.  
assembly/tsconfig.json: specifies build options for ts file. 
index.html: dummy page that references wasmloader.js  
wasmloader.js: loads the WebAssembly module

## Setup
clone  
npm install  
npx asinit .  
npm run asbuild - compiles the files  

## Debugging
To debug, the easiest way is just to run a http server locally:  
npm install http-server -g  
http-server ./  
open localhost in chromium  
