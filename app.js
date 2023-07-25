let live = 5;
const body = document.querySelector("body");
const input = document.getElementById("text");
const guess = document.querySelector(".guess-btn");
const number = document.querySelector(".number");
const randomNumber = Math.floor(Math.random() * 100);
const canDiv = document.querySelector(".can-div");
const p = document.querySelector(".p");
const liveCan = document.querySelector(".live-can");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");
const final = document.getElementById("final");
let value1 = 100;
let value2 = 0;
let num;

console.log(`Rastgele sayi : ${randomNumber}`);

let change = () => {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  let rgb = `rgb(${c1},${c2},${c3},.7)`;
  body.style.backgroundColor = rgb;
  body.style.transition = " background-color 4s";
};
setInterval(change, 1000);

guess.addEventListener("click", () => {
  live--;

  if(+number.value > randomNumber){
    value1 = +number.value 
    number.setAttribute('placeholder', `${value2} - ${value1}`)
  } else {
    value2 = +number.value 
    number.setAttribute('placeholder', `${value2} - ${value1}`)
  }

  liveCan.innerHTML = `${live} `;
  if (+number.value === randomNumber) {
    modalEl.classList.add("kazanc");
    modalEl.classList.add("show");
    final.innerHTML = `Kazandin`;
    document.querySelector(".modal").style.backgroundColor = "#5AB7AC";
    modalBtn.style.color = "#5AB7AC";
    modalBtn.addEventListener("click", () => {
      modalBtn.style.display = "none";
      window.location.reload();
    });
    number.value = "";
  } else if (live == 0) {
    modalEl.classList.add("show");
    modalBtn.addEventListener("click", () => {
      modalBtn.style.display = "none";
      window.location.reload();
    });
  } else {
    number.value = "";
    input.focus();
  }

});

number.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    guess.click();
  }
});
