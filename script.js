const starbucksImg = document.querySelector(".starbucks");
const circle = document.querySelector(".circle");
const thumbImages = document.querySelectorAll(".thumb img");

// Add a click event listener to each thumbnail image
thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener("click", function () {
    const imageSrc = thumbImage.getAttribute("data-image");
    const circleColor = thumbImage.getAttribute("data-color");

    imgSlider(imageSrc);
    changeCircleColor(circleColor);
  });
});

function imgSlider(image) {
  starbucksImg.src = image;
}

function changeCircleColor(color) {
  circle.style.background = color;
}
