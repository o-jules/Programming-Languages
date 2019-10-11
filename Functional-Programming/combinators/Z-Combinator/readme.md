# The Z Combinator

The Z Combinator in Lambda Calculus:

```
Z := λg.(λx.g (λv.((x x) v))) (λx.g (λv.((x x) v)))
```

After β-reduction:

```
Z g v = g (Z g) v
```

## In JavaScript

```js
Z = g => (x => g(v => x(x)(v)))(x => g(v => x(x)(v)))

// Z = g => v => g(Z(g))(v)

sum = Z(g => 
  from => to => (from === to) ? to : from + g(from + 1)(to))

factorial = Z(f => i => i <= 1 ? 1 : i * f(i - 1))
```