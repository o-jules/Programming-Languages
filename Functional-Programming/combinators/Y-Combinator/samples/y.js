/**
 * From the definition:
 * ```
 * Y := λf.(λx.f (x x)) (λx.f (x x))
 * ```
 *
 * Lazy version
 * ```js
 * const Y  = f => (x => f(x(x)))(x => f(x(x)));
 * ```
 *
 * Modified version for strict language
 * const Y  = f => (x => f(a => x(x)(a)))(x => f(a => x(x)(a)));
 */

const Y = f => (x => f(a => x(x)(a)))(x => f(a => x(x)(a)));

/**
 * We can get Y(f) = f(Y(f)) from Beta reduction on the Y combinator defintion
 * ```
 * Y := λf.(λx.f (x x)) (λx.f (x x))
 * ```
 *
 * ```
 * Y g := (λf.(λx.f (x x)) (λx.f (x x))) g
 *      = (λx.g (x x)) (λx.g (x x))
 *      = g ((λx.g (x x)) (λx.g (x x)))
 *      = g (Y g)
 * ```
 *
 * So this is a fixed point combinator.
 *
 * For fixed point of f, we have:
 * fixed-point-of-f = f(fixed-point-of-f)
 *
 * let Y(f) as fixed-point-of-f, then
 * ```
 * Y(f) = fixed-point-of-f = f(fixed-point-of-f)
 * ```
 *
 * With substitution we get the lazy version:
 * ```js
 * Y(f) = f(Y(f))
 * ```
 *
 * For strict language we have:
 * ```js
 * const Y = f => f(x => Y(f)(x));
 * ```
 *
 * Or:
 * ```js
 * const Y = f => f(() => Y(f));
 *
 * const factorial = Y(f => x => x === 0 ? 1 : x * g()(x-1))
 * ```
 */

const Y = f => f(x => Y(f)(x));

/**
 * Other definitions
 * somtimets cited as "The Y combinator itself"
 */
const uY = f => (g => g(g))(g => f(x => g(g)(x)));
