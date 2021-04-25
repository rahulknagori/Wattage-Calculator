let all = document.querySelectorAll(".all");

// Setting an initial value
let calculatedValue = "";

// Calculating battery of how many watts would be needed depending on the number of appliances used at home.
function calculateWatts(){
    if (totalValue() > 0 & totalValue() <= 1000){
calculatedValue = "5000 Watts"
    } else if(totalValue() > 1000 & totalValue()< 10000){
        calculatedValue = "10000 Watts"
    } else if(totalValue() > 10000){
        calculatedValue = "We don't have any battery with that capacity"
    } else{
        calculatedValue = "Please enter the number of appliances"
    }
    return calculatedValue
} 

// This code calculates the total of all the input that has been changed
function totalValue(){
        let oven = document.getElementById("oven").value;
        let ovenWatts = document.getElementById("ovenWatts").value;
        let televisonWatts = document.getElementById("televisionWatts").value;
        let lightsWatts = document.getElementById("lightWatts").value;
        let lights = document.getElementById("lights").value;
        let television = document.getElementById("television").value;
        let payment = document.getElementById("payment")
        let ovenTotal = Number(oven) * ovenWatts.slice(0, 4);
        let lightsTotal = Number(lights) * lightsWatts.slice(0, 4);
        let televisionTotal = Number(television) * televisonWatts.slice(0, 4);
        total = ovenTotal + lightsTotal + televisionTotal;
        return total
    } 

function onButtonClick(){
    payment.innerHTML = calculateWatts();
}