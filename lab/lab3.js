// bài 1
const multiply=(a, b) => {
  return a * b;
};

// Function 2
const isPositive =(number)=> number >= 0;

// Function 3
const getRandomNumber=()=> {
  return Math.random();
};

// Function 4
document.addEventListener("click", () => {
    console.log("Clicked!");
});

// bài 2
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin,
});


// Bài 3

/// 1. Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
const mergeArrays = (...arrays) => [].concat(...arrays);

// 2. Hàm sumAll tính tổng tất cả tham số truyền vào
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

// 3. Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
const createProduct = (name = "Mao", price = 100, category = "General") => ({
  name,
  price,
  category,
});

const shoppingCart = (customerName, ...products) => ({
  customerName,
  products,
});

const order = shoppingCart("Nguyen Van A", "Laptop", "Mouse", "Keyboard");
console.log(order);


