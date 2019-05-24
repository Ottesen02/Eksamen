function myFunction(x) {
    x.classList.toggle("change");
}

document.querySelector("#mobil-burger").addEventListener("click", () => {
    document.querySelector("#overlay").classList.toggle("open");
    document.querySelector(".opened").classList.toggle("hide");
    document.querySelector(".closed").classList.toggle("hide");
})

document.querySelector("#desktop-burger").addEventListener("click", () => {
    document.querySelector("#desk-overlay").classList.toggle("open");
})
