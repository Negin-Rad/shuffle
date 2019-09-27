var cards = [];
var rand;
var temp;
var player1 = [];
var player2 = [];


function make() {
    cards.push("🂡");
    cards.push("🂱");
    cards.push("🃁");
    cards.push("🃑");
    cards.push("🂢");
    cards.push("🂲");
    cards.push("🃂");
    cards.push("🃒");
    cards.push("🂣");
    cards.push("🂳");
    cards.push("🃃");
    cards.push("🃓");
    cards.push("🂤");
    cards.push("🂴");
    cards.push("🃄");
    cards.push("🃔");
    cards.push("🂥");
    cards.push("🂵");
    cards.push("🃅");
    cards.push("🃕");
    cards.push("🂦");
    cards.push("🂶");
    cards.push("🃆");
    cards.push("🃖");
    cards.push("🂧");
    cards.push("🂷");
    cards.push("🃇");
    cards.push("🃗");
    cards.push("🂨");
    cards.push("🂸");
    cards.push("🃈");
    cards.push("🃘");
    cards.push("🂩");
    cards.push("🂹");
    cards.push("🃉");
    cards.push("🃙");
    cards.push("🂪");
    cards.push("🂺");
    cards.push("🃊");
    cards.push("🃚");
    cards.push("🂬");
    cards.push("🂼");
    cards.push("🃌");
    cards.push("🃜");
    cards.push("🂭");
    cards.push("🂽");
    cards.push("🃍");
    cards.push("🃝");
    cards.push("🂮");
    cards.push("🂾");
    cards.push("🃎");
    cards.push("🃞");

    console.log(cards);
    document.getElementById("output").innerHTML = cards;

}


function shuffle() {


    for (var i = 0; i < cards.length; i++) {
        rand = Math.floor(Math.random() * 52);
        temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;

    }
    console.log(cards);
    document.getElementById("output").innerHTML = cards;

}

function deal() {
    player1.push(cards[0]);
    cards.splice(0, 1);
    player1.push(cards[0]);
    cards.splice(0, 1);
    player2.push(cards[0]);
    cards.splice(0, 1);
    player2.push(cards[0]);
    cards.splice(0, 1);


    console.log(player1);
    console.log(player2);
    console.log(cards.length);
    document.getElementById("output").innerHTML = "☻: " + player1 + "<br><br>";
    document.getElementById("output").innerHTML += "☺: " + player2;


}