document.addEventListener("DOMContentLoaded", function () {
    var mainImage = document.getElementById("mainImage");
    var images = ["img/Rectangle 52.png", "img/Rectangle 99.png"];
    var currentImageIndex = 0;

    document.querySelector('.pred2').addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = images.length - 1;
        }
        mainImage.src = images[currentImageIndex];
    });

    document.querySelector('.next2').addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        mainImage.src = images[currentImageIndex];
    });
});