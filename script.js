const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const bodyChange = document.querySelector("body");

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
})

const activePage = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");
     bodyChange.style.background = "white"
    setTimeout(()=>{
        bodyChange.style.background = "#1f242d"
    },2105)

    header.classList.remove("active");
    setTimeout(() => {
        header.classList.add("active")
    }, 1100)


    navLinks.forEach(link => {
        link.classList.remove("active")
    })

    barsBox.classList.remove("active");
    setTimeout(() => {
        barsBox.classList.add("active")
    }, 1100)


    sections.forEach(section => {
        section.classList.remove("active")
    })

        menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");

}

navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active")
            }, 1100)
        }
    });
});

logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
        activePage();
        navLinks[0].classList.add("active");

           setTimeout(() => {
                sections[0].classList.add("active")
            }, 1100)
    }
})

let resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {

        const resumeDetail = document.querySelectorAll(".resume-detail")


        resumeBtns.forEach(btn => {
            btn.classList.remove("active")
        })
        btn.classList.add("active")

        resumeDetail.forEach(detail => {
            detail.classList.remove("active")
        })
        resumeDetail[idx].classList.add("active")

    })
})


let arrowRight = document.querySelector(".protfolio-box .navigation .arrow-right");
let arrowLeft = document.querySelector(".protfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .image-slide");

    const portfolioDetails = document.querySelectorAll(".protfolio-detail");

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;


    portfolioDetails.forEach(detail => {
        detail.classList.remove("active");
    });

    portfolioDetails[index].classList.add("active");
}



arrowRight.addEventListener("click", () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove("disabled")
    }

    else {
        index = 5;
        arrowRight.classList.add("disabled")
    }
    activePortfolio();
});



arrowLeft.addEventListener("click", () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove("disabled")
    }

    else {
        index = 0;
        arrowLeft.classList.add("disabled")
    }
    activePortfolio();
});