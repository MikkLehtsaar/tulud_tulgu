// Input values
const first = document.querySelector("#a");
const second = document.querySelector("#b");
const btnplus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");
const answer = document.querySelector("#answer");
// Calc functions
function plus() {
    answer.innerText = parseInt(first.value) + parseInt(second.value);
}

function minus() {
    answer.innerText = parseInt(first.value) - parseInt(second.value);
}

//Output things
btnplus.addEventListener("click", plus);
btnminus.addEventListener("click", minus);
