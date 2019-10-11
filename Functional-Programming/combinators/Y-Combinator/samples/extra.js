const Y = (x => y => x(y)(x))(y => x => y(x(y)(x)));

const Theta = (x => y => y(x(x)(y)))(x => y => y(x(x)(y)));
// The lazy version:
// const Theta = (x => y => y(i => x(x)(y)(i)))(x => y => y(i => x(x)(y)(i)));

const ThetaV = (x => y => y(z => x(x)(y)(z)))(x => y => y(z => x(x)(y)(z)));
