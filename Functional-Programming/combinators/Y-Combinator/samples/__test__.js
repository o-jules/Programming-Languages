// const almost_factorial = f => n => (n === 0 ? 1 : n * f(n - 1));
// const factorial = Y(almost_factorial);

const fibonacci = Y(f => n => (n <= 1 ? 1 : f(n - 1) + f(n - 2)));

const factorial = Y(f => n => (n == 0 ? 1 : n * f(n - 1)));
