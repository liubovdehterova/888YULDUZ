let scrollpos = window.scrollY
const header = document.querySelector(".header")
const scrollChange = 10;
const addClassOnScroll = () => header.classList.add("header-fixed");
const removeClassOnScroll = () => header.classList.remove("header-fixed");
window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
    if (scrollpos >= scrollChange) {
        addClassOnScroll()
    } else {
        removeClassOnScroll()
    }
})