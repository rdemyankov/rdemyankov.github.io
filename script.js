let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "2cab37";

let item = "";

let buyBtn1 = document.getElementById("buy-btn1");
let buyBtn2 = document.getElementById("buy-btn2");
let buyBtn3 = document.getElementById("buy-btn3");
let buyBtn4 = document.getElementById("buy-btn4");

let infoBtn1 = document.getElementById("info-btn1");
let infoBtn2 = document.getElementById("info-btn2");
let infoBtn3 = document.getElementById("info-btn3");
let infoBtn4 = document.getElementById("info-btn4");

buyBtn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show()
    }
})
buyBtn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show()
    }
})
buyBtn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show()
    }
})
buyBtn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show()
    }
})

Telegram.WebApp.onEvent("mainButtonClicked",function(){
    tg.setData(item)
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
