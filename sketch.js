let menu = document.querySelector('.menu-icon');
let sideMenu = document.querySelector(".side-menu")
var currentAudio;
var currentBtn;

menu.onclick = () => {
    menu.classList.toggle('move');
    sideMenu.classList.toggle("open-menu");
}
window.onscroll = () => {
    menu.classList.remove('move');
    sideMenu.classList.remove("open-menu");
}

// Header Background change on scroll
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0)
})

// Audio 
function playTrack(trackID, btnID) {

    var audio = document.getElementById(trackID);
    var playBtn = document.getElementById(btnID);

    if (currentAudio != null && currentAudio != audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentBtn.classList.replace("bx-pause-circle", "bx-play-circle");
    }

    currentAudio = audio;
    currentBtn = playBtn;

    if (audio.paused) {
        audio.play();
        playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
    }

    else {
        audio.pause();
        playBtn.classList.replace("bx-pause-circle", "bx-play-circle");
    }
}

function resetBtn(btnID) {
    var button = document.getElementById(btnID);
    button.classList.replace("bx-pause-circle", "bx-play-circle");
}


// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");
    
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        }
        else {
            sendmail (name.value, email.value, msg.value);
            success(); 
        }
    })
}
validate();

function sendmail (name, email, msg) {
    emailjs.send("service_vj89oed","template_p300205",{
        from_name: name,
        from_email: email,
        message: msg,
        });
}

function emptyerror() {
    let errorMsg = document.getElementById("empty-error");
    errorMsg.style.visibility = "visible";
}
function success() {
    let successMsg = document.getElementById("contact-success");
    let contactForm = document.getElementById("contact-form");
    successMsg.style.visibility = "visible";
    contactForm.reset();
}