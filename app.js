// Input values
const first = document.querySelector("#a");
const second = document.querySelector("#b");
const btnplus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");
const answer = document.querySelector("#answer");
const answer2 = document.querySelector("#answer2");
const balance = document.querySelector("balance")
const desc = document.querySelector("#desc")
let balance_val = 0;

// Calc functions
function plus() {
    balance_val += parseInt(b.value);
    answer.innerText = balance_val;
    let newRow = document.createElement("div");
    newRow.classList.add("print-in");
    newRow.innerHTML = " " + a.value + " " + b.value;
    document.querySelector(".print-boxs").appendChild(newRow);
}

function minus() {
    balance_val -= parseInt(b.value);
    answer.innerText = balance_val;
    let newRow = document.createElement("div");
    newRow.classList.add("print-in2");
    newRow.innerHTML = " " + a.value + " " + "-" + b.value;
    document.querySelector(".print-boxs").appendChild(newRow);
}

function answerFunc() {
    document.write("a")
}
//Output things
btnplus.addEventListener("click", plus);
btnminus.addEventListener("click", minus);

