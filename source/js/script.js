const searchButton = document.querySelector(".featured__button");
const cart = document.querySelectorAll(".cart");
const popup = document.querySelector(".modal-cart");

searchButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});

for(var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal__show");
    });
    }
