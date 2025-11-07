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


// bài 3
// 1.Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
function mergeArrays(...arrays){
    return [].concat(...arrays);
}
//2.Hàm sumAll tính tổng tất cả tham số truyền vào
function sumAll(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
// 3.Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định 
function createProduct(name= Mao,price = 100,category="General"){
    return {
        name,
        price,
        category,
    };
}
//bài 4
//Tạo hàm shoppingCart với:
// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng

function shoppingCart(customerName, ...products){
    return {
        customerName,
        products,
    };
}
// Ví dụ sử dụng
const order = shoppingCart("Nguyen Van A", "Laptop", "Mouse", "Keyboard");
console.log(order);
// Kết quả:
