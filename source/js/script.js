const searchButton = document.querySelector(".catalog__product-svg");
const popup = document.querySelector(".modal-cart");

searchButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});
