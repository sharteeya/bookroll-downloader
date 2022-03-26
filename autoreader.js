let str = "";
let numArr = [];
let rArrow = document.getElementsByClassName("arrow")[1];
let randomTime;
const waitAtLeast = 30; // seconds

async function autoRead(){
	str = document.getElementById("pageNumberText").innerHTML;
	numArr = str.split(": ")[1].split(" / ");
	randomTime = Math.round(Math.random() * 100000 % 30000 + waitAtLeast * 1000);
	console.log(`Waiting for ${randomTime} ms`);
	await new Promise(resolve => setTimeout(resolve, randomTime));
	if (numArr[0] != numArr[1]) {
        autoRead();
    } else {
        console.log("Auto read finish");
    }
	rArrow.click();
}

autoRead();