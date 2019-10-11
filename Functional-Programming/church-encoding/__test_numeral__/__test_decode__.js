
const dechurch = n => n(x => x + 1)(0);
const print = i => console.log(dechurch(i));

const one = successor(zero);
const two = successor(one);
const three = successor(two);

const two2 = predecessor(three);
const one2 = predecessor(two2);
const zero2 = predecessor(one2);

print(zero);
print(one);
print(two);

print(two2);
print(one2);
print(zero2);
console.log();

print(addition(one)(zero));
print(addition(one)(three));
print(addition(one)(three));
console.log("end of add");

print(subtraction(one)(zero));
print(subtraction(three)(one));
print(subtraction(three)(two));
console.log("end of subtraction");

print(multiply(two)(two));
console.log();

print(exponentiation(three)(two)); // 8
console.log();

console.log(is_zero(zero));
console.log(is_zero(one));
console.log(is_zero(two));
console.log();

console.log(equal(zero)(zero));
console.log(equal(two)(addition(one)(one)));
console.log(equal(three)(addition(one)(one)));

console.log();
// console.log(equal(two2)(two));