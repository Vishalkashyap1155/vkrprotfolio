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
