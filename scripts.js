document.addEventListener("DOMContentLoaded", function () {
  const BUTTON_RIGHT = document.querySelector(".buttonRight i");
  const BUTTON_LEFT = document.querySelector(".buttonLeft i");

  let allImages = document.querySelectorAll("img");
  let currentImage = 0;

  BUTTON_RIGHT.addEventListener("click", () => {
    if (currentImage > allImages.length - 2) {
      currentImage = 0;
      allImages[currentImage].classList.remove("invisible");
      allImages[allImages.length - 1].classList.add("invisible");
    } else if (currentImage < allImages.length - 1) {
      allImages[currentImage].classList.add("invisible");
      allImages[currentImage + 1].classList.remove("invisible");
      currentImage++;
    }
  });

  BUTTON_LEFT.addEventListener("click", () => {
    if (currentImage <= 0) {
      allImages[currentImage].classList.add("invisible");
      allImages[allImages.length - 1].classList.remove("invisible");
      currentImage = allImages.length - 1;
    } else {
      allImages[currentImage].classList.add("invisible");
      allImages[currentImage - 1].classList.remove("invisible");
      currentImage--;
    }
  });
});
