const zero = f => x => x;

const successor = n => f => x => f(n(f)(x));
const addition = m => n => f => x => m(successor)(n)(f)(x); // m(f)(n(f)(x));
const multiply = m => n => x => m(n(x));
const exponentiation = m => n => m(n);
const predecessor = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
const subtraction = m => n => n(predecessor)(m);

const True = x => _ => x;
const False = _ => y => y;
const is_zero = n => n(_ => False)(True);

const equal = m => n => is_zero(subtraction(m)(n));
const loop = n => f => is_zero(predecessor(n))(() => f())(() => (f(), loop(predecessor(n)))(f))();

const two = successor(successor(zero));
loop(exponentiation(two)(two))(() => console.log("loop"));
