//Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast(array) {
  if (array.length === 0) {
    return "Mảng rỗng";
  }
  return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4]));

//Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

function swapElements(arr) {
    if (arr.length < 4) {
        return "Mảng phải có ít nhất 4 phần tử";
    }
    let temp = arr[1];
    arr[1] = arr[3];
    arr[3] = temp;
    return arr;
}

console.log(swapElements([1, 2, 3, 4, 5]));