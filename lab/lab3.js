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
function createUser(name = "Anonymous", age="18", isAdmin = false) {
  return {
   name,
    age,
    isAdmin,
  };
}

// bài 3
