let rates = document.querySelector(".rates");
let itemRadius = document.querySelectorAll(".item-radius");
let submitBtn = document.querySelector("#submit");
let ratingDiv = document.querySelector("#rating");
let postRatingDiv = document.querySelector("#post-rating");
let ratedValue = document.querySelector("#rated");

rates.addEventListener("click", event => {
    rateSelected = event.target.innerHTML;
    itemSelected = event.target;
    for (let i = 0; i < itemRadius.length; i++) {
        if (itemRadius[i] != itemSelected) {
            itemRadius[i].classList.remove("active");
            itemRadius[i].classList.add("background-radius");
        }
    }
    itemSelected.classList.add("active");
    itemSelected.classList.remove("background-radius");
});

submitBtn.addEventListener("click", () => {
    ratingDiv.style.display = "none";
    postRatingDiv.style.display = "flex";
    ratedValue.textContent = `You selected ${rateSelected} out of 5`;
});
