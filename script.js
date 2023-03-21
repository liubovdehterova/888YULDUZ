let scrollpos = window.scrollY
const header = document.querySelector(".header");
const topScroll = document.querySelector('.scrollToTop');
const scrollChange = 10;
const addClassOnScroll = () => {
    header.classList.add("header-fixed");
    topScroll.classList.add("active");
}
const removeClassOnScroll = () => {
    header.classList.remove("header-fixed");
    topScroll.classList.remove("active");
}
window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
    if (scrollpos >= scrollChange) {
        addClassOnScroll()
    } else {
        removeClassOnScroll()
    }
});

let t;
function up() {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}
topScroll.addEventListener('click', up);


const elemClassList = document.querySelectorAll('.nav-link-click');
for (let elem of elemClassList) {
    elem.addEventListener('click', function (e) {
        const elemClassImg = document.querySelectorAll('.tab-pane');
        let elementTargetAttr = elem.getAttribute("data-bs-target");
        let elemSearchTarget = document.querySelector(`${elementTargetAttr}`);
        let activeLink = document.querySelector('.active');
        for(let el of elemClassImg) {
            if (activeLink) {
                activeLink.classList.remove('active');
                el.classList.remove('active');
            }
        }
        elem.classList.add('active');
        elemSearchTarget.classList.add('active');
    })
}
//collapsed
function hide(e) {
    let target = e.currentTarget;
    let elem = target.querySelector('.accordion-collapse');
    let elemPlusAndMinus = target.querySelector('.accordion-button');
    if (elem.style.display !== "block") {
        elem.style.display = "block";
        elemPlusAndMinus.classList.remove('collapsed');
    } else {
        elem.style.display = "none";
        elemPlusAndMinus.classList.add('collapsed');
    }
}

let ps = document.querySelectorAll('.accordion-item');
for (let i = 0; i < ps.length; i++) {
    ps[i].addEventListener('click', hide, false);
}

//navbar-toggler
const mobMenuBtn = document.querySelector('.navbar-toggler')

function hideMenu() {
    const menu = document.querySelector('.flex')
    if (menu.style.display !== "block") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

mobMenuBtn.addEventListener('click', hideMenu, false);