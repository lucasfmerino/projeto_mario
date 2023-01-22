
console.log(document);

const buttonTraier = document.querySelector('.button-trailer');
console.log(buttonTraier);

const modal = document.querySelector(".modal");
console.log(modal);

const buttonCloseModal = document.querySelector(".close-modal")
console.log(buttonCloseModal);

const video = document.getElementById("video");
console.log(video);

const videoLink = video.src;
console.log(videoLink);

function modalToggle(){
    console.log("click event");
    modal.classList.toggle("open");
}

buttonTraier.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", videoLink)
});

buttonCloseModal.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", "");
})