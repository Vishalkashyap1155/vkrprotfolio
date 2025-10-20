const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");


const activePage = ()=>{
    navLinks.forEach(link =>{
        link.classList.remove("active")
    })
}

navLinks.forEach((link,idx)=>{
    link.addEventListener("click", ()=>{
        if(!link.classList.contains("active")){
            activePage();

            link.classList.add("active");
        }
    });
});

logoLink.addEventListener("click", ()=>{
    if(!navLinks[0].classList.contains("active")){
        activePage();
        navLinks[0].classList.add("active");
    }
})

let resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) =>{
    btn.addEventListener("click" , () => {

        const resumeDetail = document.querySelectorAll(".resume-detail")
        
        
        resumeBtns.forEach(btn =>{
            btn.classList.remove("active")
        })
        btn.classList.add("active")

              resumeDetail.forEach(detail =>{
            detail.classList.remove("active")
        })
        resumeDetail[idx].classList.add("active")

    })
})


let arrowRight = document.querySelector(".protfolio-box .navigation .arrow-right");
let arrowLeft = document.querySelector(".protfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () =>{
    const imgSlide = document.querySelector(".portfolio-carousel .image-slide");

    const portfolioDetails = document.querySelectorAll(".protfolio-detail");
   
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;


    portfolioDetails.forEach(detail =>{
        detail.classList.remove("active");
    });

    portfolioDetails[index].classList.add("active");
} 



arrowRight.addEventListener("click", ()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove("disabled")
    }

    else{
        index = 5;
        arrowRight.classList.add("disabled")
    }
    activePortfolio();
});



arrowLeft.addEventListener("click", ()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove("disabled")
    }

    else{
        index = 0;
        arrowLeft.classList.add("disabled")
    }
    activePortfolio();
});