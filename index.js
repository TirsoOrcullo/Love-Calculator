const calculateLove = document.querySelector(".calculate");
const loveResult = document.querySelector(".love-result");
const yourName = document.querySelector(".yourName");
const partnersName = document.querySelector(".partnersName");


calculateLove.addEventListener('click', () => {

    const result = Math.floor(Math.random() * 100) + 1;
    if (yourName.value.length === 0 || partnersName.value.length === 0) {
         alert("You need to fill-up the textbox.");
    } else if(result == 100) {
        loveResult.innerHTML = result + "% You guys are perfect to each other.";
    } else if (result >= 90 && result <= 99) {
        loveResult.innerHTML = result + "% You guys are probably a lovers.";
    } else if (result >=50 && result <= 89) {
        loveResult.innerHTML = result + "% Spend more time to each other.";
    } else {
        loveResult.innerHTML = result + "% You guys need to exert more time and effort.";
    }

    setTimeout(() => {
        yourName.value = '';
        partnersName.value = '';
        loveResult.innerHTML = "Let's calculate your love chances";
    }, 1500);
});