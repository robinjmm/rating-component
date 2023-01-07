const button = document.querySelector(".js-button");
const rating = document.querySelector(".js-card__rating");
const cardDefault = document.querySelector(".js-card--default");
const cardSubmit = document.querySelector(".js-card-submit");
const cardInfo = document.querySelector(".js-card__info");

let userRating = 0;

rating.addEventListener("click", function (event) {
    event.stopPropagation()

    if (event.target.nodeName === "BUTTON") {
        userRating = event.target.textContent
    }
})

button.addEventListener("click", function (event) {
    if (userRating === 0) {
        event.preventDefault()
    } else {
        cardDefault.classList.toggle("hidden");
        cardSubmit.classList.toggle("hidden");
        cardInfo.textContent = `You selected ${userRating} out of 5`;
    }
})