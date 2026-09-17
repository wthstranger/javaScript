// JavaScript operators: examples

// 1. Arithmetic operators
console.log(10 + 3);   // addition: 13
console.log(10 - 3);   // subtraction: 7
console.log(10 * 3);   // multiplication: 30
console.log(10 / 3);   // division: 3.333...
console.log(10 % 3);   // remainder: 1
console.log(2 ** 3);   // exponentiation: 8

let count = 5;
console.log(+count);   // unary plus: 5
console.log(-count);   // unary minus: -5
console.log(++count);  // pre-increment: 6
console.log(count++);  // post-increment: 6, then count is 7
console.log(--count);  // pre-decrement: 6
console.log(count--);  // post-decrement: 6, then count is 5

// 2. Assignment operators
let score = 10;
score += 5;  // score = score + 5
score -= 2;  // score = score - 2cd
score *= 2;  // score = score * 2
score /= 4;  // score = score / 4
score %= 3;  // score = score % 3
score **= 2; // score = score ** 2
console.log(score);

// Bitwise assignment operators: &=, |=, ^=, <<=, >>=, >>>=
let bits = 5; // binary 0101
bits &= 3;     // 0101 & 0011 = 0001
bits |= 4;     // 0001 | 0100 = 0101
bits ^= 1;     // 0101 ^ 0001 = 0100
bits <<= 1;    // shift left
bits >>= 1;    // signed shift right
bits >>>= 1;   // unsigned shift right

// 3. Comparison operators
console.log(5 == "5");   // loose equality: true
console.log(5 === "5");  // strict equality: false
console.log(5 != "5");   // loose inequality: false
console.log(5 !== "5");  // strict inequality: true
console.log(7 > 3);       // greater than: true
console.log(7 >= 7);      // greater than or equal: true
console.log(3 < 7);       // less than: true
console.log(3 <= 3);      // less than or equal: true

// 4. Logical operators (short-circuit evaluation)
console.log(true && "both are truthy"); // AND
console.log(false || "fallback value"); // OR
console.log(!true);                      // NOT: false
console.log(!!"text");                  // convert to boolean: true
console.log(null ?? "default");         // nullish coalescing
console.log(0 || 42);                    // 42 (falsy fallback)
console.log(0 ?? 42);                    // 0 (not null or undefined)

// 5. String and concatenation operators
console.log("Hello, " + "JavaScript"); // concatenation
console.log("Value: " + 10);           // number converted to string
let message = "Hi";
message += " there";
console.log(message);

// 6. Bitwise operators (operate on 32-bit integers)
console.log(5 & 1);   // AND: 1
console.log(5 | 2);   // OR: 7
console.log(5 ^ 1);   // XOR: 4
console.log(~5);      // NOT: -6
console.log(5 << 1);  // left shift: 10
console.log(5 >> 1);  // signed right shift: 2
console.log(-5 >>> 1); // unsigned right shift

// 7. Conditional (ternary) operator
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

// 8. Type and object operators
console.log(typeof 42);              // "number"
console.log(typeof undefined);       // "undefined"
console.log("name" in { name: "Sam" }); // true
console.log([] instanceof Array);    // true
console.log(new.target);             // meaningful inside a constructor

// 9. Optional chaining and delete
const user = { profile: { name: "Alex" } };
console.log(user.profile?.name);     // Alex
console.log(user.address?.city);     // undefined, without an error
delete user.profile.name;
console.log(user.profile);            // {}

// 10. Spread and rest operators (...)
const first = [1, 2];
const combined = [...first, 3, 4];   // spread: expand an iterable
console.log(combined);

function addAll(...numbers) {        // rest: collect arguments
	return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(addAll(1, 2, 3));

// 11. Comma operator: evaluates expressions left to right and returns the last
let commaResult = (console.log("first"), console.log("second"), 100);
console.log(commaResult); // 100

// 12. Relational operator with strings
console.log("cat" < "dog"); // true (lexicographic comparison)
