Z = f => x => x;

/*
ONE = f => x => f(x);
TWO = f => x => f(f(x));
*/
SUCCESSOR = n => f => x => f(n(f(x)));
PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);

ADD = a => b => f => x => a(f(b(f(x))));
MULTIPLY = a => b => f => x => a(b(f)(x));
EXPONENT = a => b => b(a);
SUBTRACTION = a => b => b(PREDECESSOR)(a);
