document.addEventListener("DOMContentLoaded", function () {
  const BUTTON_RIGHT = document.querySelector(".buttonRight i");
  const BUTTON_LEFT = document.querySelector(".buttonLeft i");

  let allImages = document.querySelectorAll("img");
  let currentImage = 0;
  let allCircles = document.querySelectorAll(".circle");

  function check() {
    for (let i = 0; i < allImages.length; i++) {
      if (!allImages[i].classList.contains("invisible")) {
        allCircles[i].classList.add("Active");
      } else {
        allCircles[i].classList.remove("Active");
      }
    }
  }

  function onClickRight() {
    if (currentImage > allImages.length - 2) {
      currentImage = 0;
      allImages[currentImage].classList.remove("invisible");
      allImages[allImages.length - 1].classList.add("invisible");
    } else if (currentImage < allImages.length - 1) {
      allImages[currentImage].classList.add("invisible");
      allImages[currentImage + 1].classList.remove("invisible");
      currentImage++;
    }
  }

  function onClickLeft() {
    if (currentImage <= 0) {
      allImages[currentImage].classList.add("invisible");
      allImages[allImages.length - 1].classList.remove("invisible");
      currentImage = allImages.length - 1;
    } else {
      allImages[currentImage].classList.add("invisible");
      allImages[currentImage - 1].classList.remove("invisible");
      currentImage--;
    }
  }

  BUTTON_RIGHT.addEventListener("click", () => {
    onClickRight();
    check();
  });

  BUTTON_LEFT.addEventListener("click", () => {
    onClickLeft();
    check();
  });
});
