"use strict";

//select score element
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let diceclick = document.querySelector(".dice");
let btnroll = document.querySelector(".btn--roll");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let newgame = document.querySelector(".btn--new");
let play1 = document.querySelector("#name--0");
let play2= document.querySelector("#name--1");
let winner = document.querySelector(".btn--hold");
let namep1 = document.querySelector("#btnplayer0");
let namesession =document.querySelector('.username-model');
let namep2 = document.querySelector("#btnplayer1");
let okbtn=document.querySelector('.okbtn');
let btnsubmit = document.querySelector('.submit-btn');


let activeplayer = 0;
let score = [0, 0];
let playing = true;



btnsubmit.addEventListener('click',function addname(){
  if(!namep1.value ||  !namep2.value ){
    winner.textContent='Please Enter the name of the players'
    namesession.classList.remove('hidden');
  
  }else{
  play1.textContent = namep1.value;
  play2.textContent=namep2.value;  
  namesession.classList.add('hidden');
  
winner.textContent=' '
}
});


btnroll.addEventListener("click", function dicework() {
  //ramdom number

  let number = Math.trunc(Math.random() * 6 + 1);

  console.log(number);

  console.log("button click");
  diceclick.classList.remove("hidden");

  diceclick.src = `img/dice-${number}.png`;

  if (score[activeplayer] >= 40) {
    playing = false;

    diceclick.classList.add("hidden");
    btnroll.disabled = true;
    console.log((winner.textContent = `The winner is player ${activeplayer}`));
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove("player--active");
  } else if (playing) {
    if (activeplayer == 0) {
      console.log("p1");

      if (number != 6) {
        score[activeplayer] += number;
        activeplayer = 1;
        player1.classList.add("player--active");
        player0.classList.remove("player--active");
      } else if (number == 6) {
        activeplayer = 0;
        player0.classList.add("player--active");
        score[activeplayer] += number;
      }
    } else if (activeplayer == 1) {
      console.log("p2");
      if (number != 6) {
        score[activeplayer] += number;
        activeplayer = 0;
        player0.classList.add("player--active");
        player1.classList.remove("player--active");
      } else if (number == 6) {
        activeplayer = 1;
        player1.classList.add("player--active");
        score[activeplayer] += number;
      }
    }
  }

  score0.textContent = +score[0];
  score1.textContent = +score[1];
});

newgame.addEventListener("click", function () {
  activeplayer = 0;
  score = [0, 0];
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;


  btnroll.disabled=false;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  winner.textContent='';

  
});


okbtn.addEventListener('click',function codeAddress() {
  document.querySelector('.Rules').classList.add('hidden');
})


