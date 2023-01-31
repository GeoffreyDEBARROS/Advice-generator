let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");
let button = document.querySelector("button");

const randomAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.innerHTML = "<h3>ADVICE #</h3>" + data.slip.id;
      advice.innerHTML = "\""+ data.slip.advice+"\"";
    });
};

button.addEventListener("click", randomAdvice);
