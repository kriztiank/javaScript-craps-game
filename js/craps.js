// variabel til point runden
let point = 0;
// hvor meget man better
let bet = 0;
// hvor mange gange man kaster
let throw_value = 0;
// spiller skal vælge hvor meget man vil bette
function bet_face() {
  bet = 10 + bet; // knap = 10 og multiplicerer med sig selv
  document.getElementById('bet-counter').innerHTML = `Your bet: ${bet}$`;
  // hvis man better mere end 150$ fjernes knappen "Place Bet"
  if (bet > 149) {
    document.getElementById('place_bet').style.display = 'none';
  }
}
// hvis man skal minimum bette 10$ for at komme videre
function lock_bet() {
  if (bet > 9) {
    document.getElementById('place_bet').style.display = 'none';
    document.getElementById('lock_bet').style.display = 'none';
    document.getElementById('rollDice1').style.display = 'inline';
  }
}
// første kast
function first_cast() {
  // får fat i terninger
  const die1 = document.getElementById('die1');
  const die2 = document.getElementById('die2');
  // text field hvor resultatet bliver vist
  const result = document.getElementById('result');
  // random tal
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  // de to terninger bliver lagt sammen
  const diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  result.innerHTML = `You rolled ${diceTotal}.`;
  // hvis man rammer på 7 eller 11 går man videre til andet kast 'second_cast'
  if (diceTotal === 7 || diceTotal === 11) {
    document.getElementById('text-output').innerHTML = 'You win your bet back!';
    document.getElementById('rollDice1').style.display = 'none';
    document.getElementById('rollDice2').style.display = 'block';
  }
  // hvis man rammer 2, 3 eller 12 taber man sit bet
  if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12) {
    document.getElementById('text-output').innerHTML = 'Your bet is lost!';
    document.getElementById('bet-counter').innerHTML = `Your bet: ${bet * 0}`;
    document.getElementById('rollDice1').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
  }
  // hvis man rammer 4, 5, 6, 8, 9 eller 10 bliver det til point tallet
  if (
    diceTotal === 4 ||
    diceTotal === 5 ||
    diceTotal === 6 ||
    diceTotal === 8 ||
    diceTotal === 9 ||
    diceTotal === 10
  ) {
    document.getElementById('text-output').innerHTML =
      'Hit this number again to win';
    document.getElementById('rollDice1').style.display = 'none';
    document.getElementById('point').style.display = 'block';
    point = diceTotal;
  }
  // starter en tæller til hvor mange gange man kaster terningen
  throw_value = 1 + throw_value;
  document.getElementById('throw-counter').innerHTML = `Throw: ${throw_value}`;
}
// andet kast gør stort set det sammet som det første kast
function second_cast() {
  const die1 = document.getElementById('die1');
  const die2 = document.getElementById('die2');
  const result = document.getElementById('result');
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  result.innerHTML = `You rolled ${diceTotal}.`;
  // hvis man rammer 2, 3 eller 12 taber man sit bet
  if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12) {
    document.getElementById('text-output').innerHTML = 'YOUR BET IS LOST!';
    document.getElementById('bet-counter').innerHTML = `your bet: ${bet * 0}$`;
    document.getElementById('rollDice2').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
  }
  // hvis man rammer 4, 5, 6, 8, 9 eller 10 bliver det til point tallet
  if (
    diceTotal === 4 ||
    diceTotal === 5 ||
    diceTotal === 6 ||
    diceTotal === 8 ||
    diceTotal === 9 ||
    diceTotal === 10
  ) {
    document.getElementById('text-output').innerHTML =
      'Hit this number again to win';
    document.getElementById('rollDice1').style.display = 'none';
    document.getElementById('rollDice2').style.display = 'none';
    document.getElementById('point').style.display = 'block';
    point = diceTotal;
  }
  // starter en tæller til hvor mange gange man kaster terningen
  throw_value = 1 + throw_value;
  document.getElementById('throw-counter').innerHTML = `Throw: ${throw_value}`;
}
// point kast
function point_cast() {
  document.getElementById('text-output').innerHTML = '';
  const die1 = document.getElementById('die1');
  const die2 = document.getElementById('die2');
  const result = document.getElementById('result');
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  result.innerHTML = `You rolled ${diceTotal}.`;
  // hvis man rammer den værdi der er gemt i point variablen vinder man
  if (diceTotal === point) {
    document.getElementById('text-output').innerHTML = `You win: ${bet * 2}$`;
    document.getElementById('bet-counter').innerHTML = `Your bet:  ${bet * 2}$`;
    document.getElementById('point').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
  }
  // hvis man rammer 7 taber man
  if (diceTotal === 7) {
    document.getElementById('text-output').innerHTML = 'You lose';
    document.getElementById('bet-counter').innerHTML = `Your bet: ${bet * 0}$`;
    document.getElementById('point').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
  }
  // starter en tæller til hvor mange gange man kaster terningen
  throw_value = 1 + throw_value;
  document.getElementById('throw-counter').innerHTML = `Throw: ${throw_value}`;
}

function reset() {
  location.reload();
}
