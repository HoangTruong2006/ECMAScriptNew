// Function thông thường
function sum(a, b) {
  return a + b;
}

// Arrow function tương đương
const sumArrow = (a, b) => {
  return a + b;
};

// Arrow function rút gọn (khi chỉ có 1 biểu thức)
const sumShort = (a, b) => a + b;// 1 biểu thức => tự động return

// Với 1 tham số - có thể bỏ dấu ngoặc
const square = (x) => x * x;
const squareShort = x => x * x; // 1 tham số => bỏ ngoặc

// Không có tham số - dùng dấu ngoặc trống
const greet = () => console.log("Hello, World!");
greet(); // Gọi hàm greet

// trả về object literal
const createPerson = (name, age) => ({
  name: name,
  age: age,
});
const person = createPerson("Alice", 30);
console.log(person); // { name: 'Alice', age: 30 }
// Sử dụng với array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);