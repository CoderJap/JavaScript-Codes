


    const textBox = document.getElementById("textbox");
    const toFahrenheit = document.getElementById("toF");
    const toCelsius = document.getElementById("toC");
    const result = document.getElementById("RESULT");
    let temp;

    document.getElementById("SUBMIT").onclick = function convert(){
        if(toFahrenheit.checked){
            temp = Number(textBox.value);
            temp = temp * 9/5 + 32;
            result.textContent = temp.toFixed(1) + "°F";
        }
        else if(toCelsius.checked){
            temp = Number(textBox.value);
            temp = (temp - 32) * (5/9);
            result.textContent = temp.toFixed(1) + "°C";
        }
        else {
            result.textContent = "Select a unit";
        }
    }


