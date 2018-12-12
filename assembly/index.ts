// The entry file of your WebAssembly module.
// Everything here has to be strongly typed


// Some dummy functions
export function add(a: i32, b: i32): i32 { return a + b; }

export function multiply(a: f64, b: f64): i32 { let res = a * b; return res as i32 }