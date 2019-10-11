
test = cond => msg => console.assert(!!cond, msg);
every = each => n => f =>
  n > 1 ? each(x => every(each)(n - 1)(f(x))) : each(f);

is_close = D => x => D.indexOf(x) >= 0;

// 是否为布尔代数
is_boolean_algebra = (Domain, Sum, Product, Complement) => {
  any = every(f => Domain.forEach(x => f(x)));

  // 闭合
  close = is_close(Domain);
  any(2)(x => y => test(close(Sum(x)(y)))("Sum is close."));
  any(2)(x => y => test(close(Product(x)(y)))("Product is close."));
  any(1)(x => test(close(Complement(x)))("Complement is close."));

  // 交换律
  is_commutative = f => x => y => f(x)(y) === f(y)(x);
  commutative_law = f =>
    any(2)(x => y => test(is_commutative(f)(x)(y))("Commutative"));
  commutative_law(Sum);
  commutative_law(Product);

  // 分配律
  is_distributive = f => g => x => y => z =>
    f(x)(g(y)(z)) === g(f(x)(y))(f(x)(z));
  
  distributive_law = f => g =>
    any(3)(x => y => z => test(is_distributive(f)(g)(x)(y)(z))("Distributive"));
  distributive_law(Sum)(Product);
  distributive_law(Product)(Sum);

  // 单位元律
  is_identity = f => e => x => f(x)(e) === x && f(e)(x) === x;
  find_identity = f => {
    const id = Domain.find(x => is_identity(f)(Domain[0])(x));
    test(id !== null, "Identity exists");
    test(Domain.every(x => is_identity(f)(x)(id)), "Identity is unique");
    return id;
  };
  Zero = find_identity(Sum);
  Unit = find_identity(Product);

  // 互补律
  is_complement = neg => f => e => x => f(x)(neg(x)) === e;
  complement_law = f => e =>
    any(x => test(is_complement(Complement)(f)(e)(x))("Complement"));
  complement_law(Sum)(Unit);
  complement_law(Product)(Zero);
};

// test
T = x => _ => x;
F = _ => y => y;
AND = x => y => x(y)(x);
OR  = x => y => x(x)(y);
NOT = p => p(F)(T);

is_boolean_algebra([F, T], OR, AND, NOT);