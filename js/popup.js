var link = document.querySelector(".popup-button");

var popup = document.querySelector(".search-popup");

var form = popup.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
        evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
    }
});