const U = g => g(g);

const factorial = U(g => i => (i === 0 ? 1 : i * g(g)(i - 1)));

const fibonacci = U(g => i => i <= 1 ? i : g(g)(i - 1) + g(g)(i - 2));
