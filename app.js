gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

//section one timeline

sectionOneTl = gsap.timeline()

const span1 = document.querySelector(".section1 .content div h1 span:first-child")
const span2 = document.querySelector(".section1 .content div h1 span:last-child")
const p = document.querySelector(".section1 .content div p")
const img = document.querySelector(".section1 .content img")

sectionOneTl.from(span2, {x:"100vw", duration: .5})
            .from(span1, {x:"-100vw", duration: .5})
            .from(p, {opacity: 0, rotate: 90, transformOrigin:"left 50%"})
            .from(img, {y: "100vh"})



//section two timeline 

const sectionTwoTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 25%", 
        end: "bottom center",
        toggleActions: "restart none reverse"
    }
})

sectionTwoTl.from(".section2 div h2 span", {y: "-100vh", stagger: .2})
            .from(".section2 div p", {rotationY: 90, opacity: 0})

//HORIZONTAL SECTIONS

const container = document.querySelector(".horizontal-sections")
let containerWidth = container.offsetWidth
let amountToScroll = containerWidth - window.innerWidth

const sectionHorizontalTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".horizontal-sections",
        markers: true, 
        start: "top", 
        end: "+=" + amountToScroll, 
        pin: true, 
        scrub: true, 
    }
})

sectionHorizontalTl.from(".section3 div h2", {x: "-100vw", scale: 10})
                .to(".section3 div p span", {backgroundColor: "white", color: "black"})
                .from(".section3 div p span", {y: "100vh", stagger: .2})
                .to(container, {x: -amountToScroll})
                .from(".section4 .portfolio-item", {x:"100vw", opacity: 0})


//Section five timeline 

const sectionFiveTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".section5",
        start: "top", 
        end: "bottom", 
        pin: true, 
        scrub: true, 
    }
})
//Separating contact me into each character 
let contactMe = document.querySelector(".section5 h2")
let textContact = contactMe.innerHTML.split("");
let result = " "
textContact.forEach((word,i) => {
    result +=`<span> ${word} </span>`
})
contactMe.innerHTML = result
const emptyString = document.querySelector(".section5 h2 span:nth-child(8)")
emptyString.innerHTML =  `&nbsp;`

sectionFiveTl.from(".section5 h2 span", {y:"-100vh", stagger: .2})
            .from(".section5 div p", {y: 40, opacity: 0})
            .from(".section5 button", {scale: 0})
            .to(".section5 button", {scale: 1})
            .to(".section5", {backgroundColor: "black"})
            .from(".section5", {backgroundPosition: "130% 100%"})