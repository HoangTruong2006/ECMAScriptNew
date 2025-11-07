//Rest và Spread Operators
// Thu thập tất cả tham số
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Kết hợp với tham số thông thường
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

// Destructuring với rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { name, age, ...otherInfo } = {
  name: "John",
  age: 25,
  city: "Hanoi",
  country: "Vietnam",
};

console.log(sumAll(1, 2, 3, 4, 5)); // 15
introduce("Bob", 30, "Reading", "Gaming", "Traveling");
// Name: Bob
// Age: 30
// Hobbies: Reading, Gaming, Traveling


//Spread Operator (...)
// Với mảng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Sao chép mảng
const original = [1, 2, 3];
const copy = [...original];

// Với object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Ghi đè thuộc tính
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { theme: "light", fontSize: 14 };
const finalConfig = { ...baseConfig, ...userConfig }; // {theme: "light", language: "en", fontSize: 14}

// Truyền tham số cho hàm
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Tạo mảng mới với phần tử thêm vào
const newArray = [0, ...numbers, 6]; // [0, 1, 2, 3, 4, 5, 6]