const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const sliderWrapper =  document.querySelector('.slider__wrapper')



let sliderWrapperCase = ''
for (let i = 0; i < sliderLine.children.length; i++) {
    sliderWrapperCase += '<div class="slider__dot"></div>'
}
sliderWrapper.innerHTML = sliderWrapperCase

const sliderDots = document.querySelectorAll('.slider__dot');


let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlider();
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    rollSlider();
}

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(-${sliderCount * sliderWidth}px)`;
    thisSlide(sliderCount);
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
    });
});

showSlide();