const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = photo.src;
    });
});

closeBtn.onclick = () => lightbox.classList.remove("active");

lightbox.onclick = e => {
    if(e.target !== lightboxImg){
        lightbox.classList.remove("active");
    }
};

document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
        lightbox.classList.remove("active");
    }
});
