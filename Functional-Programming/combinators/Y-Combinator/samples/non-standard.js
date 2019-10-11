
const B = (x, y, z) => x(y(z))
const M = x => x(x)

const N = B(M(B(B(M))(B)))
