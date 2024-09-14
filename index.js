const inputField = document.getElementById("input-field");
const buttons = document.getElementsByClassName("buttons");
const buttonsArray = Array.from(buttons);

buttonsArray.forEach(element => {
    element.addEventListener("click", clickEvent)
});

function clickEvent(event){
    const value = event.target.value;
    if(value == "="){
        console.log("Equal")
    }else if(value == "C"){
        inputField.value = "";
    }else{
        inputField.value += value;
        inputField.scrollLeft = inputField.scrollWidth;
    }

}

