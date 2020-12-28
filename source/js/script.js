const searchButton = document.querySelector(".featured__button");
const popup = document.querySelector(".modal-cart");

searchButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});
