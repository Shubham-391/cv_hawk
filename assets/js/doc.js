let view = document.querySelector(".view");
// navbar
function navbar() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.remove("overflow-hidden");
};

$('.slider1').slick({
    arrows: false,
    autoplay: true,
    dots: true,
});
$('.section1-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
$('.section6-slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev1',
    nextArrow: '.next1',
});
$('.section6-slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev2',
    nextArrow: '.next2',
});