/** @format */

const temaOne = document.querySelector(".tema_1");
const temaOneH3 = document.querySelector(".tema_1").firstChild.innerHTML;
const temaTwo = document.querySelector(".tema_2");
const temaTwoH3 = document.querySelector(".tema_2").firstChild.innerHTML;
const temaThree = document.querySelector(".tema_3");
const temaThreeH3 = document.querySelector(".tema_3").firstChild.innerHTML;
const temaFour = document.querySelector(".tema_4");
const temaFourH3 = document.querySelector(".tema_4").firstChild.innerHTML;
const temaFive = document.querySelector(".tema_5");
const temaFiveH3 = document.querySelector(".tema_5").firstChild.innerHTML;

const heading = document.querySelector(".heading");
const canvas = document.querySelector(".canvas");
const reflect = document.querySelector(".reflect");

const defaultHeading = "Mit navn er Malte Skjoldager";
const defaultImg = "assets/img/mig.jpg";

window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log(temaThreeH3);
	temaOne.addEventListener("mouseover", changeImg1);
	temaOne.addEventListener("mouseout", changeDefault);

	temaTwo.addEventListener("mouseover", changeImg2);
	temaTwo.addEventListener("mouseout", changeDefault);

	temaThree.addEventListener("mouseover", changeImg3);
	temaThree.addEventListener("mouseout", changeDefault);

	temaFour.addEventListener("mouseover", changeImg4);
	temaFour.addEventListener("mouseout", changeDefault);

	temaFive.addEventListener("mouseover", changeImg5);
	temaFive.addEventListener("mouseout", changeDefault);
}

function changeImg1() {
	const newImg = "assets/img/test.jpg";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaOneH3;
}
function changeImg2() {
	const newImg = "assets/img/test.jpg";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaTwoH3;
}
function changeImg3() {
	const newImg = "assets/img/test.jpg";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaThreeH3;
}
function changeImg4() {
	const newImg = "assets/img/test.jpg";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaFourH3;
}
function changeImg5() {
	const newImg = "assets/img/test.jpg";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaFiveH3;
}

function changeDefault() {
	canvas.setAttribute("src", defaultImg);
	reflect.setAttribute("src", defaultImg);
	heading.innerHTML = defaultHeading;
}
