test = cond => msg => console.assert(cond, msg);

truth_table = (T, F, And, Or, Not) => {
  test(And(T)(T) === T)("T & T = T");
  test(And(T)(F) === F)("T & F = F");
  test(And(F)(T) === F)("F & T = F");
  test(And(F)(F) === F)("F & F = F");

  test(Or(T)(T) === T)("T & T = T");
  test(Or(T)(F) === T)("T & F = T");
  test(Or(F)(T) === T)("F & T = T");
  test(Or(F)(F) === F)("F & F = F");

  test(Not(T) === F)("!T = F");
  test(Not(F) === T)("!F = T");
};

// test
T = x => _ => x;
F = _ => y => y;
AND = x => y => x(y)(x);
OR = x => y => x(x)(y);
NOT = p => p(F)(T);

truth_table(T, F, AND, OR, NOT);

(() => {
  t = 1;
  f = 0;
  and = x => y => (x === 1 && y === 1 ? 1 : 0);
  or = x => y => (x === 1 || y === 1 ? 1 : 0);
  not = x => Math.abs(x - 1);

  truth_table(t, f, and, or, not);
})();

(() => {
  t = true;
  f = false;
  and = x => y => x && y;
  or = x => y => x || y;
  not = x => !x;

  truth_table(t, f, and, or, not);
})();
