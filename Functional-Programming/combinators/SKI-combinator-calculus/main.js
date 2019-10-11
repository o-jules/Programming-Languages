
I = x => x
K = x => y => x
S = x => y => z => x(z)(y(z))

TRUE  = K
FALSE = S(K)

a = () => {}
b = () => {}
console.log(TRUE(a)(b)  === a)
console.log(FALSE(a)(b) === b)

