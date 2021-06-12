// Random Farver
let root = document.documentElement





const hex = "abcdef1234567890"
let randomColor= "#";




generateRandCol()
function generateRandCol(){
	
	for(i=0;i < 6; i++){
		 randomColor +=  hex[Math.floor(Math.random()*16)];
		console.log(randomColor)
	}
}

let setProperty = root.style.setProperty("--randomColor", randomColor)
console.log(root)