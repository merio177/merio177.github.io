// Header Background change on scroll
let header = document.querySelector("header")

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0)
})

// Scroll to top button
let scroll = document.querySelector(".scroll-top")

window.addEventListener('scroll', () => {
    scroll.classList.toggle("scroll-active", window.scrollY >= 400)
})