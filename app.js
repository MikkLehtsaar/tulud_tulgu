// Input values
const first = document.querySelector("#a");
const second = document.querySelector("#b");
const btnplus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");
const answer = document.querySelector("#answer");
const balance = document.querySelector("balance")

let balance_val = 0;

// Calc functions
function plus() {
    balance_val += parseInt(b.value);
    answer.innerText = balance_val;
}

function minus() {
    balance_val -= parseInt(b.value);
    answer.innerText = balance_val;
}

//Output things
btnplus.addEventListener("click", plus);
btnminus.addEventListener("click", minus);
