/*1.宣告所有需要的DOM*/
const redBtn = document.getElementById('red');
const blackBtn = document.getElementById('black');

/*2.宣告變數*/

let carSrc;
let colorName = document.querySelector('.colorname')
let carArray = [];

/*3.將圖片push至carArray裡*/
for (let i = 1; i < 61; i++) {
    carSrc = "/toyota-360旋轉/img/black/360EXT_1_19_" + i + ".png";//要改路徑  /toyota-360旋轉/img/black/360EXT_1_19_1.png
    carArray.push(carSrc);
}
let container;
let controlleft;
let controlright;
let index = [0];
let img = document.querySelector("#model img");


window.onload = function () {
    container = document.getElementById("model");
    controlleft = document.getElementById("leftbtn");
    controlright = document.getElementById("rightbtn");
    img.src = carArray[index];


    /*4.建立圖片往左更換*/
    controlleft.addEventListener('click', function () {
        if (index == 59) {  //當圖片轉到第60張時(索引值為59)
            index = 0;      //跳到第一張(索引值為0)
        }
        else {
            index++;        //重複做if的迴圈
        }
        img.src = carArray[index];
    })



    /*5.建立圖片往右更換*/
    controlright.addEventListener('click', function () {
        if (index == 0) {
            index = 59;
        }
        else {
            index--;
        }
        img.src = carArray[index];
    })

}

//改變顏色
//黑色19
blackBtn.addEventListener('click', function () {
    carArray = [];
    for (let i = 1; i < 61; i++) {
        carSrc = "/toyota-360旋轉/img/black/360EXT_1_19_" + i + ".png";
        carArray.push(carSrc);
    }
})
//紅色22
redBtn.addEventListener('click', function () {
    carArray = [];
    for (let i = 1; i < 61; i++) {
        carSrc = "/toyota-360旋轉/img/red/360EXT_1_22_" + i + ".png";
        carArray.push(carSrc);
    }
})
