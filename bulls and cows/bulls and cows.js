//取得各功能區DOM節點
const _start = document.getElementById('start');
const _reset = document.getElementById('reset');
const _showAnswer = document.getElementById('checkAnswer');
const _display = document.querySelector('.display');
const _input = document.getElementById('inputArea');
const _guess = document.getElementById('guess');

//正則表達式(判定輸入的每個字元是否為0~9數字)
const regex = /\d/;

//變數宣告區
const min = 0;
const max = 9;

let numArr = [];
let answerArr = [];
let answerStr;
let guessArr = [];
let guess;
let getGuessStr0;
let getGuessStr1;
let getGuessStr2;
let getGuessStr3;
let a;
let b;
let _history;
let _button;
let _p;
let intersect;
let distinct;
let isNotNumber;
let isNoRepeat;


//遊戲開始前按鈕關起來
_reset.disabled = true;
_showAnswer.disabled = true;
_guess.disabled = true;
_input.disabled = true;




//產生答案(亂數)
//產生答案(亂數)-1: 取得0~9隨機數字
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//產生答案(亂數)-2: 產生4位不重複0~9數字
function Random() {
    do {
        let number = getRandomInt(min, max).toString();
        if (!answerArr.includes(number)) {  //如果上述的方法有重複數字的話部會再列入到陣列裡
            answerArr.push(number);
        }
    }
    while (answerArr.length != 4);//當answerArr長度到4時，就會停止迴圈

    return answerArr;
}
//將輸入數字放進guessArr
function createGuessArr() {

    guess = _input.value;
    getGuessStr0 = guess.charAt(0);
    getGuessStr1 = guess.charAt(1);
    getGuessStr2 = guess.charAt(2);
    getGuessStr3 = guess.charAt(3);
    guessArr.push(getGuessStr0, getGuessStr1, getGuessStr2, getGuessStr3)
}
//判斷answerArr 和 guessArr 的交集
function getIntersect() {
    intersect = answerArr.filter(x => guessArr.includes(x));
    a = intersect.filter(y => answerArr.indexOf(y) == guessArr.indexOf(y));
    b = intersect.length - a.length;  //因為b的數字a也會重覆到，所以b=交集-a
}

//清空輸入的數字 
function clearInput() {
    _input.value = "";
}


//顯示猜對樣式(綠按鈕標示4A0B)
function setWinMsg() {
    _history = document.createElement('div');
    _button = document.createElement('button');
    _p = document.createElement('p');
    _history.setAttribute('class', 'history');
    _button.setAttribute('class', 'btn btn-success');

}
//顯示猜錯樣式(紅按鈕標示幾A&B)
function setHistoryMsg() {
    _history = document.createElement('div');
    _button = document.createElement('button');
    _p = document.createElement('p');
    _history.setAttribute('class', 'history');
    _button.setAttribute('class', 'btn btn-danger');

}

//判斷遊戲勝利方法
function checkIsWin() {
    if (a.length == 4) {
        setWinMsg();
        _button.innerHTML = `${a.length}A${b}B`;
        _p.innerText = _input.value;
        _history.append(_button, _p);
        _display.append(_history);
        WinAlert(answerStr);
        clearInput();
        _guess.disabled = true;
        _start.disabled = false;
    }
    else {
        setHistoryMsg();
        _button.innerHTML = `${a.length}A${b}B`;
        _p.innerText = _input.value;
        _history.append(_button, _p);
        _display.append(_history);
        clearInput();
    }
}

//初始guessArray
function initializeGuessArr() {
    guessArr = [];
}
//初始化answerArray
function initializeAnswerArr() {
    answerArr = [];
}

//遊戲開始
_start.addEventListener('click', () => {
    initializeAnswerArr();
    initializeGuessArr();
    Random();
    _start.disabled = true;
    _reset.disabled= false;
    _showAnswer.disabled = false;
    _guess.disabled = false;
    _input.disabled = false;
    clearInput();
})


//重新開始
_reset.addEventListener('click', () => {
    initializeAnswerArr();
    initializeGuessArr();
    _display.innerHTML = "";
    _start.disabled = false;

    clearInput();
})

//看答案
_showAnswer.addEventListener('click', () => {
    answerStr = "";
    answerArr.forEach(num => {
        answerStr += num;
    })
    alert(answerStr);
    clearInput();

})

//猜
_guess.addEventListener('click', () => {
    createGuessArr();
    distinct = [...new Set(guessArr)].length;
    isNotNumber = regex.test(guess);
    isNoRepeat = distinct === 4 && guessArr.length === 4;
    if (!isNotNumber) {
            alert('請輸入數字');
            initializeGuessArr();
            clearInput();
            return;
        }

    else {
        if (_input.value.length != 4) {
            alert('請輸入4位數字');
            initializeGuessArr();
            clearInput();
            return;
        }

        if (!isNoRepeat) {
            alert('請勿輸入重複數字');
            initializeGuessArr();
            clearInput();
            return;
        }                               

        else {
            getIntersect();
            initializeGuessArr();
            checkIsWin();
        }
    }

})
