function calculateBMI(weight, height) {

  const bmi = weight / (height * height);

  // Xác định phân loại
  let category = "";
  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }


  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}

// Ví dụ sử dụng
console.log(calculateBMI(70, 1.75)); 

function createBook(title, author, year, price) {

  const infoKey = "getBookInfo";

  return {

    title,
    author,
    year,
    price,

    [infoKey]() {
      return `Sách: "${this.title}" - Tác giả: ${this.author} (${this.year}) - Giá: ${this.price}₫`;
    },
    calculateDiscount(discount) {
      const discountedPrice = this.price - (this.price * discount) / 100;
      return `Giá sau khi giảm ${discount}%: ${discountedPrice}₫`;
    },
  };
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());


console.log(book.calculateDiscount(10));
