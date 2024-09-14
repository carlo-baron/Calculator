const inputField = document.getElementById("input-field");
const buttons = document.getElementsByClassName("buttons");
const buttonsArray = Array.from(buttons);

let isToClearInput = false;

buttonsArray.forEach(element => {
    element.addEventListener("click", clickEvent)
});

function clickEvent(event){
    const value = event.target.value;
    if(value == "="){
        equalFunction();
    }else if(value == "C"){
        inputField.value = "";
    }else{
        if(isToClearInput){
            inputField.value = "";
            isToClearInput = false;
        }
        inputField.value += value;
        inputField.scrollLeft = inputField.scrollWidth;
    }
}

function equalFunction(){
    try{
        inputField.value = eval(inputField.value);
    }catch(error){
        inputField.value = error;
        isToClearInput = true;
    }
}