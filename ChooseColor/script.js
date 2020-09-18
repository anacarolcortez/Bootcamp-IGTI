let input = document.querySelectorAll("input");
document.getElementById("outputRed").innerHTML = 0;
document.getElementById("outputGreen").innerHTML = 0;
document.getElementById("outputBlue").innerHTML = 0;

window.addEventListener('load', () => {
    for (let i = 0; i<input.length; i++){
        input[i].addEventListener("input", setColor);
    }
})


function setColor(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    
    
    let showRed = document.getElementById("outputRed");
    showRed.value = red;
    let showGreen = document.getElementById("outputGreen");
    showGreen.value = green;
    let showBlue = document.getElementById("outputBlue");
    showBlue.value = blue;


    let button = document.getElementById("button");
    button.style.background = `rgb(${red}, ${green}, ${blue})`;
}