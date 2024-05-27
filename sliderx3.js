document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.img-slide-div');
    const slides = Array.from(document.querySelectorAll('.img-slide'));
    let currentIndex = 0;

    function updateSlidePosition() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function cycleRight() {
        const firstSlide = slides.shift();
        slides.push(firstSlide);
        slidesContainer.appendChild(firstSlide);
        updateSlidePosition();
    }

    document.getElementById('prev').addEventListener('click', function() {
        slides.unshift(slides.pop());
        slidesContainer.insertBefore(slides[0], slidesContainer.firstChild);
        updateSlidePosition();
    });

    document.getElementById('next').addEventListener('click', function() {
        cycleRight();
    });

    updateSlidePosition();
});
