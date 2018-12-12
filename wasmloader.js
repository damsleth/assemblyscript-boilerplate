/**
 * async function that loads the .wasm-file using fetch, puts it in an arraybuffer, compiles it, instantiates it and gives it a namespace
 * @param {*} fileName - the .wasm-file to load, either from disk or externally
 * @param {*} namespace - the global namespace you want for your exported wasm-functions
 */
async function loadWasm(fileName, namespace) {
        const response = await fetch(fileName);
        const bits = await response.arrayBuffer();
        const module = await WebAssembly.compile(bits);
        const wasmInstance = await new WebAssembly.Instance(module);
        window[namespace] = wasmInstance.exports;
        console.log(`Compiled .wasm-file '${fileName}'\nAll exported functions are now avaliable under the global '${namespace}'-namespace`)
    };

// self executing calling of loadWasm
loadWasm('./build/untouched.wasm', "wasm")