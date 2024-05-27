document.addEventListener("DOMContentLoaded", function () {
    var mainImage = document.getElementById("mainImage2");
    var images = ["img/Rectangle 99.png", "img/Rectangle 52.png"];
    var currentImageIndex = 0;

    document.querySelector('.pred3').addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = images.length - 1;
        }
        mainImage.src = images[currentImageIndex];
    });

    document.querySelector('.next3').addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        mainImage.src = images[currentImageIndex];
    });
});