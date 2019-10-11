PAIR = f => s => p => p(f)(s);
FIRST = p => p(f => s => f);
SECOND = p => p(f => s => s);

// test
A = () => {};
B = () => {};

console.assert(FIRST(PAIR(A)(B)) === A);
console.assert(SECOND(PAIR(A)(B)) === B);

APPEND = l => e => PAIR(l)(e)
