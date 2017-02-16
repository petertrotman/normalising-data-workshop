console.time('assign-100');
for (let i of Array(100).keys()) {
  Array
    .from({ length: 100 })
    .reduce((acc, _, i) => Object.assign(acc, { [i]: i }), {});
}
console.timeEnd('assign-100');

console.time('assign-new-100');
for (let i of Array(100).keys()) {
  Array
    .from({ length: 100 })
    .reduce((acc, _, i) => Object.assign({}, acc, { [i]: i }), {});
}
console.timeEnd('assign-new-100');

console.time('assign-new-null-100');
for (let i of Array(100).keys()) {
  Array
    .from({ length: 100 })
    .reduce((acc, _, i) => Object.assign(Object.create(null), acc, { [i]: i }), {});
}
console.timeEnd('assign-new-null-100');

console.time('assign-precomputed-100');
for (let i of Array(100).keys()) {
  Array
    .from({ length: 100 }, (_, i) => i)
    .reduce((acc, i) => Object.assign(acc, { [i]: i }), {});
}
console.timeEnd('assign-precomputed-100');

console.time('mutate-precomputed-100');
for (let i of Array(100).keys()) {
  Array
    .from({ length: 100 }, (_, i) => i)
    .reduce((acc, i) => { acc[i] = i; return acc; }, {});
}
console.timeEnd('mutate-precomputed-100');

console.time('mutate-100');
for (let i of Array(100).keys()) {
  let obj = {};
  Array
    .from({ length: 100 })
    .forEach((_, i) => obj[i] = i);
}
console.timeEnd('mutate-100');
