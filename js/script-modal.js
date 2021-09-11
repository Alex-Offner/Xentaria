const modal = document.querySelector(".modal");
const modalbtn = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function removeModal() {
    modal.classList.remove("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        removeModal();
    }
})

modalbtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);