// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
let numoutput = document.getElementById("display");
let minus50btn = document.getElementById("minus50");
let minus10btn = document.getElementById("minus10");
let minus1btn = document.getElementById("minus1");
let plus1btn = document.getElementById("plus1");
let plus10btn = document.getElementById("plus10");
let plus50btn = document.getElementById("plus50");
let rand1btn = document.getElementById("rand1");
let rand1out = document.getElementById("rand1-out");
let rand2btn = document.getElementById("rand2");
let rand2out = document.getElementById("rand2-out");
let rand3btn = document.getElementById("rand3");
let rand3out = document.getElementById("rand3-out");
let rand4btn = document.getElementById("rand4");
let rand1in = document.getElementById("rand-in1");
let rand2in = document.getElementById("rand-in2");
let rand4out = document.getElementById("rand4-out");
//global variable (variable scope)
let num = 0;

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus50btn.addEventListener("click", plus50);
plus1btn.addEventListener("click", plus1);
plus10btn.addEventListener("click", plus10);
minus10btn.addEventListener("click", minus10);
minus50btn.addEventListener("click", minus50);
minus1btn.addEventListener("click", minus1);

function plus1() {
  num++;
  numoutput.innerHTML = num;
}

function minus10() {
  num = num - 10;
  numoutput.innerHTML = num;
}
function minus50() {
  num = num - 50;
  numoutput.innerHTML = num;
}
function minus1() {
  num = num - 1;
  numoutput.innerHTML = num;
}
function plus10() {
  num = num + 10;
  numoutput.innerHTML = num;
}
function plus50() {
  num = num + 50;
  numoutput.innerHTML = num;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

let stringout = document.getElementById("strOut");
let stringin = document.getElementById("strIn");

let story = "once upona time, ";

stringin.addEventListener("change", updatestory);

function updatestory() {
  var word = stringin.value;
  story += word + " ";
  stringin.value = " ";
  stringout.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
rand1btn.addEventListener("click", random1);
rand2btn.addEventListener("click", random2);
rand3btn.addEventListener("click", random3);
rand4btn.addEventListener("click", random4);
function random1() {
  let rand = Math.random();
  rand = rand.toFixed(3);
  rand1out.innerHTML = rand;
}
function random2() {
  let rand = Math.random();
  rand = rand * 100;
  rand = Math.floor(rand);

  rand2out.innerHTML = rand;
}

function random3() {
  let rand = Math.random();
  rand = rand * 10 - 5;
  rand = Math.floor(rand);
  rand3out.innerHTML = rand;
}

function random4() {
  let rand1 = +rand1in.value;
  let rand2 = +rand2in.value;
  let rand = Math.random() * (rand1 - rand2) + rand2;
  rand = rand.toFixed(1);
  console.log(rand1);

  rand4out.innerHTML = rand;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

//DO NOW

let x = 8;
let v = 18;
let y = 8;

y = v / 9 + x;
y = 2 * x + y;
v = v * x;
x = 4 * 2 + x;

console.log(x);
console.log(y);
console.log(v);
