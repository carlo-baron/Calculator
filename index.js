const inputField = document.getElementById("input-field");
const buttons = document.getElementsByClassName("buttons");
const buttonsArray = Array.from(buttons);


buttonsArray.forEach(element => {
    element.addEventListener("click", clickEvent)
});

function clickEvent(event){
    const value = event.target.value;
    if(value == "="){
        console.log("Equal");
        console.log(inputField.value);
        equalFunction();
    }else if(value == "C"){
        // inputField.value = inputField.value.slice(0, -1);
        inputField.value = "";
    }else{
        inputField.value += value;
        inputField.scrollLeft = inputField.scrollWidth;
    }
}

function equalFunction(){
    const pattern = /[+\-*\/]/g
    console.log(pattern.test(inputField.value));
    console.log(eval(inputField.value)); // evalue is cheating what the heal
}