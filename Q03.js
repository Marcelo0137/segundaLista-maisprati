
const inputArray = "nunca diga nunca pois o nunca é absoluto"
let secondArray = []

const inputSplit = inputArray.split(" ")

for(let i = 0; i < inputSplit.length; i++) {
    let cont = 0
    for(let j = 0; j < inputSplit.length; j++) {
        if(inputSplit[i] === inputSplit[j]) {
            cont++
        }
    }
    if (cont === 1) {
        secondArray.push(inputSplit[i])
    }
}

console.log(secondArray)