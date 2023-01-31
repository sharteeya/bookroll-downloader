const waitAtLeast = 30; // Wait n seconds before next page.
// Friendly remind: Wait longer can prevent record missing bug in Bookroll

const rArrow = document.getElementsByClassName("arrow")[1];
let numArr = [];

async function autoRead(){
    const str = document.getElementById("pageNumberText").innerText;
    let randomTime = Math.round(Math.random() * 100000 % 30000 + waitAtLeast * 1000);
    numArr = str.split(": ")[1].split(" / ");

    console.log(`%cRead this page for ${randomTime} ms`, 'background: #3d3d3d; color: white; font-size: 24px');
    await new Promise(resolve => setTimeout(resolve, randomTime));
    if (numArr[0] != numArr[1]) {
        autoRead();
    } else {
        console.log("%cAuto reading finished. Goodbye!", 'background: #3d3d3d; color: cyan; font-size: 24px');
    }
    rArrow.click();
}

autoRead();