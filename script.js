let pic = document.querySelector(".images");
let button = document.getElementById("btn");
let index = 0;
//
let totalImages = pic.querySelectorAll("img").length:
button.addEventListener("click", function() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  const height = pic.clientHeight;
  pic.scrollTo({
    top: index * height,
    behavior: "smooth"
  });
});
