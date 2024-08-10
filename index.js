


function roll(){

const numOfDices = document.getElementById("numOfDices").value
const diceValues = document.getElementById("diceValues");
const diceImages = document.getElementById("diceImages");
const values = []
const images = []

for(let i = 0; i < numOfDices; i++){
    let value = Math.floor(6 * Math.random()) + 1
    values.push(value)
    images.push(`<img src="img\\${value}.jpg">`)
}

diceValues.textContent = `Dice: ${values.join(", ")}`
diceImages.innerHTML = images.join("")



}