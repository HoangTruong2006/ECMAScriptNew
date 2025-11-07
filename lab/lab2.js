// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2



// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien9",
  age: 20,
};
student.grade ="A";
student.age = 21;
console.log(student);

// bài 3
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng của bạn:
🛒 Sản phẩm: ${user.product}
💰 Giá: ${user.price.toLocaleString("vi-VN")}₫
📅 Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ sớm liên hệ để xác nhận và giao hàng trong thời gian sớm nhất.

Trân trọng,
Đội ngũ Hỗ trợ Khách hàng
`;

console.log(emailTemplate);



