//set consts
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const intervalTimeToMoveSlides = 10000;

//arrange slides next to one another
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = ((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})
slides.forEach(setSlidePosition);

//function to move to a target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

//move slide to the right
// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     let nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     let nextDot = currentDot.nextElementSibling;

//     if(!nextSlide){
//         nextSlide = slides[0];
//         nextDot = dots[0];
//     }

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);

//     clearInterval(slidesInterval);
//     slidesInterval = setInterval(moveSlides, intervalTimeToMoveSlides);
// });

//move slide to the left
// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     let prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     let prevDot = currentDot.previousElementSibling;

//     if(!prevSlide){
//         prevSlide = slides[slides.length-1];
//         prevDot = dots[dots.length-1];
//     }

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);

//     clearInterval(slidesInterval);
//     slidesInterval = setInterval(moveSlides, intervalTimeToMoveSlides);
// });

//move to the slide when you click the nav indicator
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    clearInterval(slidesInterval);
    slidesInterval = setInterval(moveSlides, intervalTimeToMoveSlides);
});


//auto move slides
const moveSlides = () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    let nextDot = currentDot.nextElementSibling;

    if(!nextSlide){
        nextSlide = slides[0];
        nextDot = dots[0];
    }

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
}

//star auto play
let slidesInterval = setInterval(moveSlides, intervalTimeToMoveSlides);
