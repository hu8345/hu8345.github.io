//產生一個1到100的間的隨機數字
//封裝:隱藏細節，提取重點(語意)
// let guessNumber
let min = 0;
let max = 100;
let answer = getAnsNumber();
function getAnsNumber() {
    
    return Math.floor(Math.random() * (100 - 0) + 0);
}

/*label輸入數字*/
const inputNum = document.querySelector('.input-num');
// TODO:
// 選到所有的數字按鈕
const numBtnList = document.querySelectorAll('button[value]');
// 把 value 塞到 label
numBtnList.forEach(function (numBtn) {
    numBtn.addEventListener('click', function (event) {
        // 當數字按紐貝點即時, 執行94行的function內容
        // 抓到 btn 的 value
        console.log(event);
        console.log(event.target.value);
        inputNum.value += event.target.value;
    })
})

let p = document.querySelector('span')
//判斷數字為正確
let checkbtn = document.querySelector('.check')
checkbtn.addEventListener('click', function () {
    let guess = inputNum.value;
    let parse = parseInt(guess, 10);
    console.log(parse);
    //輸入不是數字
    if (isNaN(parse)) {
        alert('Please input number?!');
        inputNum.value = '';
    }
    if (parse < min || parse > max) {
        alert('Out of range!!!')
        inputNum.value = '';
    }
    //輸入是答案
    else {
        if (parse === answer) {
            console.log(answer);
            alert('You are correct!!');
            inputNum.value = '';
            min = 0;
            max = 100;
            p.innerText = `${min}~${max}`
            answer = getAnsNumber();
        }
        else if (parse < answer) {
            min = parse;
            inputNum.value = '';
            p.innerText = `${min}~${max}`
        }
        else if (parse > answer) {
            max = parse;
            inputNum.value = '';
            p.innerText = `${min}~${max}`
        }

    }
})
let newbtn = document.querySelector('.new')
newbtn.addEventListener('click', function () {
    resetGame();
})
function resetGame() {
    inputNum.value = '';
    min = 0;
    max = 100;
    p.innerText = `${min}~${max}`
    answer = getAnsNumber();
}

// reset
let resetbtn = document.querySelector('.reset')
resetbtn.addEventListener('click', function () {
    inputNum.value = '';
})





