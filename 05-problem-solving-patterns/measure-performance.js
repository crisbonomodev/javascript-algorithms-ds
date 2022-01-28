
const {performance} = require('perf_hooks');

const measurePerformance = (funcion,array1,array2) => {

const init = performance.now();
funcion(array1,array2);
const finish = performance.now();
return finish - init;
}

module.exports = {measurePerformance};