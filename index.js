const btnEl = document.getElementById("btn");
const bmiResultEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

btnEl.addEventListener("click", calculateBMI);

function calculateBMI(){
    const heightEl = document.getElementById("height").value;
    const weightEl = document.getElementById("weight").value;
    const heightCalc = (heightEl / 100) * (heightEl / 100);
    const bmiValue = weightEl / heightCalc;
    bmiResultEl.value = bmiValue;

    if (bmiValue < 18.5){
        weightConditionEl.innerText = " Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = " Healthy Weight";
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9){
        weightConditionEl.innerText = " Overweight";
    } else if (bmiValue >= 30.0){
        weightConditionEl.innerText = " Obesity";
    }

}