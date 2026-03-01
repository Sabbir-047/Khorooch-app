// element id -> input value
function getValue(id){
    const input = document.getElementById(id);
    const value = Number(input.value);
    // console.log(id, value);
    return value;
}

// element id -> innerText value
function getInnerText(id){
    const input = document.getElementById(id);
    const inner = Number(input.innerText);
    // console.log(id, inner);
    return inner;
}
 

// element id -> set balance
function setBalance(value){
    const balanceElement = document.getElementById('main-balance');
    balanceElement.innerText = value;
}