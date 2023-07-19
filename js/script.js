/*=================---------PRELOADER----------===================*/

const loader = document.getElementById("preloader")

const closeloader = () => {
    loader.style.display = 'none';
};

window.addEventListener("load", () => {
    setTimeout(closeloader, 2000);
});
function preventInteraction(event) {
    event.preventDefault();
}

/*=================---------Disable touch events----------===================*/

document.addEventListener('touchstart', preventInteraction, { passive: false });
document.addEventListener('touchmove', preventInteraction, { passive: false });
document.addEventListener('touchend', preventInteraction, { passive: false });
/*=================Disable mouse events===================*/
document.addEventListener('mousedown', preventInteraction);
document.addEventListener('mousemove', preventInteraction);
document.addEventListener('mouseup', preventInteraction);
document.addEventListener('click', preventInteraction);

/*=================Enable touch and mouse events after a delay===================*/
setTimeout(function () {
    /*=================Enable touch events===================*/
    document.removeEventListener('touchstart', preventInteraction);
    document.removeEventListener('touchmove', preventInteraction);
    document.removeEventListener('touchend', preventInteraction);

    /*=================Enable mouse events===================*/
    document.removeEventListener('mousedown', preventInteraction);
    document.removeEventListener('mousemove', preventInteraction);
    document.removeEventListener('mouseup', preventInteraction);
    document.removeEventListener('click', preventInteraction);
}, 3000);


/*----==================ABOUT SECTION=======================----- */

const aboutmenu = document.getElementById("about-menu")
const closebtn = document.getElementById("close-icon")
const aboutblock = document.querySelectorAll("#about-block")


aboutmenu.addEventListener("click", () => {
    aboutblock.forEach((elem) => {
        elem.classList.add('activate');
    });
});
closebtn.addEventListener("click", () => {
    aboutblock.forEach((elem) => {
        elem.classList.remove('activate');
    });
});


/*----==================HAMBURGER MENU=======================----- */

const hamMenubar = document.getElementById("ham-menu-bar")
const hamClose = document.getElementById("ham-close-btn")
const hamburgerMenu = document.querySelectorAll("#hamburger-menu")
const menu = document.getElementById("click-hammenu")
const article = document.getElementById("article")
const home = document.getElementById("home")
const engross = document.getElementById("engross")
const herSec = document.getElementById("hero-sec")

menu.addEventListener("click", () => {
    aboutblock.forEach((elem) => {
        elem.classList.add('activate');
    });
});

hamMenubar.addEventListener("click", () => {
    hamburgerMenu.forEach((elem) => {
        elem.classList.add('hamactivated');
    });
});
hamClose.addEventListener("click", () => {
    hamburgerMenu.forEach((elem) => {
        elem.classList.remove('hamactivated');
    });
});

/*----==================removing hambarger on click=======================----- */

menu.addEventListener('click', () => {
    console.log("ok")
    hamburgerMenu.forEach((elem) => {
        elem.classList.remove('hamactivated');
    });
});
home.addEventListener('click', () => {
    hamburgerMenu.forEach((elem) => {
        elem.classList.remove('hamactivated');
    });
});
article.addEventListener('click', () => {
    hamburgerMenu.forEach((elem) => {
        elem.classList.remove('hamactivated');
    });
});
engross.addEventListener('click', () => {
    hamburgerMenu.forEach((elem) => {
        elem.classList.remove('hamactivated');
    });
});


/*----==================Apply scroll on click=======================----- */

menu.addEventListener("click", () => {
    document.body.style.overflow = 'scroll';
})
home.addEventListener("click", () => {
    document.body.style.overflow = 'scroll';
})
article.addEventListener("click", () => {
    document.body.style.overflow = 'scroll';
})
engross.addEventListener("click", () => {
    document.body.style.overflow = 'scroll';
})


/*----==================body scroll fixed=======================----- */

menu.addEventListener("click", () => {
    herSec.style.opacity = '0.9';
})

hamMenubar.addEventListener("click", () => {
    document.body.style.overflow = 'hidden';
})
hamClose.addEventListener("click", () => {
    document.body.style.overflow = 'scroll';
})


/*----==================scroll top btn======================----- */

const top_arw = document.querySelector(".up-arrow");
window.onscroll = function () {
    arw()
};
function arw() {
    const len = window.scrollY;
    if (len > 25) {
        top_arw.style.display = "block";
    }
    else {
        top_arw.style.display = "none";
    }
}
arw();
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
topfunction();

/*----==================SCROLL EVENT=======================----- */

const scrollContainer = document.querySelector("#rankcontainer");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

/*----==================Type writer=======================----- */

var typed = new Typed('#typed-data', {
    strings: ["SEO Writer", "Public Speaker.", "Social Media Executive."],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
});