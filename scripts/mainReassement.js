document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (image.width === 200) {
        image.style.width = "100%";
      } else {
        image.style.width = "200px";
      }
    });
  });
});
