// Random Farver
const root = document.documentElement
const hover = document.querySelectorAll(".hoverJS")

const hex = "abcdef1234567890"
let randomColor= "#";


hover.forEach(addMouseOver)




function generateRandCol(){
	randomColor = "#"
	for(i=0;i < 6; i++){
		 randomColor +=  hex[Math.floor(Math.random()*16)];
		
	}
    const setProperty = root.style.setProperty("--randomColor", randomColor)
}


function addMouseOver(el) {
    el.addEventListener("mouseover", generateRandCol);
    
}