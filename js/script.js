// flat cards

const flat44 = {
  cardClass: "ordered",
  star: "star-colored",
  image: "img/44.png",
  name: "Студия №44",
  repair: "без отделки",
  area: "28",
  stage: "12/14",
  price: "1900000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat666 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/666.png",
  name: "Однокомнатная №666",
  repair: "базовая отделка",
  area: "65",
  stage: "6/6",
  price: "1666666",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat567 = {
  cardClass: "sold",
  star: "star-colored",
  image: "img/567.png",
  name: "Двухкомнатная №567",
  repair: "черновая отделка",
  area: "65.6",
  stage: "7/14",
  price: "5900000",
  state: "продано",
  stateTitle: "state-sold"
}

const flat45 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/45.png",
  name: "Трехкомнатная №45",
  repair: "без отделки",
  area: "56",
  stage: "1/14",
  price: "12900000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat25 = {
  cardClass: "ordered",
  star: "star-colored",
  image: "img/25.png",
  name: "Студия №25",
  repair: "черновая отделка",
  area: "18",
  stage: "12/14",
  price: "1900000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat259 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/259.png",
  name: "Четырехкомнатная  №259",
  repair: "черновая отделка",
  area: "93",
  stage: "14/14",
  price: "23900000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat56 = {
  cardClass: "free",
  star: "star-bordered",
  image: "img/56.png",
  name: "Однокомнатная №56",
  repair: "без отделки",
  area: "36",
  stage: "3/6",
  price: "5666666",
  state: "свободно",
  stateTitle: "state-free"
}

const flat46 = {
  cardClass: "free",
  star: "star-bordered",
  image: "img/46.png",
  name: "Трехкомнтаная №46",
  repair: "черновая отделка",
  area: "86",
  stage: "1/6",
  price: "5696664",
  state: "свободно",
  stateTitle: "state-free"
}

const flat2 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/2.png",
  name: "Однокомнатная №2",
  repair: "черновая отделка",
  area: "18",
  stage: "3/14",
  price: "1200000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat12 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/12.png",
  name: "Студия  №12",
  repair: "черновая отделка",
  area: "38",
  stage: "6/14",
  price: "1500500",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat8 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/8.png",
  name: "Однокомнатная №8",
  repair: "черновая отделка",
  area: "48",
  stage: "3/14",
  price: "6200000",
  state: "забронировано",
  stateTitle: "state-ordered"
}

const flat23 = {
  cardClass: "ordered",
  star: "star-bordered",
  image: "img/23.png",
  name: "Двухкомнатная №23",
  repair: "базовая отделка",
  area: "48",
  stage: "3/14",
  price: "5255006",
  state: "забронировано",
  stateTitle: "state-ordered"
}

var flatsCards = [flat44, flat666, flat567, flat45, flat25, flat259, flat56, flat46, flat2, flat12, flat8, flat23];

let cardsContainer = document.querySelector(".cards-container");

window.onload = drawCards(flatsCards);

function drawCards(array) {
  let cardsContainer = document.querySelector(".cards-container");
  for (let i = 0; i < array.length; i++) {
    cardsContainer.innerHTML += `<div class="flats__card ${array[i].cardClass}">
      <div class="card__content">
        <span class="card__star ${array[i].star}"></span>
        <p class="image-container">
          <img
            class="card__image"
            src="${array[i].image}"
            alt=""
          />
        </p>
        <h3 class="card__name">${array[i].name}</h3>
        <div class="card__parameters">
          <span class="parameters__line"></span>
          <span class="parameters__item parameters__repair">
          ${array[i].repair}</span
          >
          <span class="parameters__item parameters__area">
          ${array[i].area} м<sup>2</sup> площадь</span
          >
          <span class="parameters__item parameters__stage">
          ${array[i].stage} этаж</span
          >
        </div>
        <h4 class="card__price">${array[i].price} руб.</h4>
      </div>
      <a class="card__state ${array[i].stateTitle}" href="">${array[i].state}</a>
      </div>`;
  }
}


//Сортировка

let priceSorter = document.querySelector(".sort__price");
let roomSorter = document.querySelector(".sort__rooms");
let priceArrow = document.querySelector(".price__arrow");
let roomsArrow = document.querySelector(".rooms__arrow");

function sortByPriceUp() {
  flatsCards.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
  cardsContainer.innerHTML = '';
  drawCards(flatsCards);
  priceArrow.style.transform = 'rotate(180deg)';
  roomsArrow.style.transform = 'none';
}

function sortByAreaUp() {
  flatsCards.sort((a, b) => a.area > b.area ? 1 : -1);
  cardsContainer.innerHTML = '';
  drawCards(flatsCards);
  roomsArrow.style.transform = 'rotate(180deg)';
  priceArrow.style.transform = 'none';
}

roomSorter.onclick = sortByAreaUp;
priceSorter.onclick = sortByPriceUp;

let burger = document.querySelector(".burger");
let navigation = document.querySelector(".main__nav");
let lineTop = document.querySelector(".line-top");
let lineMiddle = document.querySelector(".line-middle");
let lineBottom = document.querySelector(".line-bottom");
burger.addEventListener("click", function () {
  navigation.classList.toggle("show-nav");
  lineTop.classList.toggle("cross-top");
  lineMiddle.classList.toggle("cross-middle");
  lineBottom.classList.toggle("cross-bottom");
})

// Показать ещё

let showButton = document.querySelector(".show-button");
showButton.onclick = function () {
  showButton.style.display = 'none';
  drawCards(flatsCards);
}