T = x => _ => x;
F = _ => y => y;
AND = x => y => x(y)(x);
OR = x => y => x(x)(y);
NOT = p => p(_ => x => x)(x => _ => x);

IF_ELSE = cond => t => f => cond(t)(f);
IF = cond => t => cond(t)(x => x)();

console.assert(IF_ELSE(T)(1)(2) === 1);
console.assert(IF_ELSE(F)(1)(2) === 2);

IF(T)(() => console.log("if(true)"));
IF_ELSE(T)(() => console.log("true"))(() => console.log("false"))();
IF_ELSE(F)(() => console.log("true"))(() => console.log("false"))();
