const button = document.querySelector(".button");
const rating = document.querySelector(".card__rating");
const cardDefault = document.querySelector(".card--default");
const cardSubmit = document.querySelector(".card--submit");
const cardInfo = document.querySelector(".card__info");

let userRating = 0;

rating.addEventListener("click", function (event) {
    event.stopPropagation()

    if (event.target.nodeName === "BUTTON") {
        userRating = event.target.textContent
        console.log(userRating);
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