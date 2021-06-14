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
const defaultImg = "assets/img/mig/mig.webp";



const title = document.querySelector(".title")
const eyeSvg = document.querySelectorAll(".eye")
const downloadSvg = document.querySelectorAll(".download")
const githubSvg = document.querySelectorAll(".github")




window.addEventListener("load", sidenVises);

function sidenVises() {

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

	eyeSvg.forEach(addHoverEye)
	downloadSvg.forEach(addHoverDownload)
	githubSvg.forEach(addHoverGithub)
}



function changeImg1() {
	const newImg = "assets/img/canvas_img_tema1.png";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaOneH3;
}
function changeImg2() {
	const newImg = "assets/img/02/png/canvas_img_tema2.png";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaTwoH3;
}
function changeImg3() {
	const newImg = "assets/img/03/png/canvas_img_tema3.png";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaThreeH3;
}
function changeImg4() {
	const newImg = "assets/img/04/png/canvas_img_tema4.png";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaFourH3;
}
function changeImg5() {
	const newImg = "assets/img/05/png/canvas_img_tema5.png";
	canvas.setAttribute("src", newImg);
	reflect.setAttribute("src", newImg);
	heading.innerHTML = temaFiveH3;
}

function changeDefault() {
	canvas.setAttribute("src", defaultImg);
	reflect.setAttribute("src", defaultImg);
	heading.innerHTML = defaultHeading;
}

function defaultTitle() {
	title.innerHTML="Muligheder"
}

function addHoverEye(el) {
	el.addEventListener("mouseover", changeTxt)
	el.addEventListener("mouseout", defaultTitle)

	function changeTxt(){
		title.innerHTML="Website"
	}
}
function addHoverDownload(el) {
	el.addEventListener("mouseover", changeTxt)
	el.addEventListener("mouseout", defaultTitle)

	function changeTxt(){
		title.innerHTML="Dokumentation"
	}
}
function addHoverGithub(el) {
	el.addEventListener("mouseover", changeTxt)
	el.addEventListener("mouseout", defaultTitle)

	function changeTxt(){
		title.innerHTML="Github"
	}
}