function dummyListener() {
  document.getElementById("inputBox").value = "Hello world";
}

document.getElementById("button1").addEventListener("click", dummyListener);

const myObject = {
  name: "bestObject",
  price: 50,
  getPrice: function() {
    console.log("Hello");
  }
};
