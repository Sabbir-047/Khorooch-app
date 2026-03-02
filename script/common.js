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



// element id -> choose service
function chooseService(service){
    const addMoneyService = document.getElementById('add-money');
    const cashOutService = document.getElementById('cash-out');
    const history = document.getElementById('transaction-history');

    // hide all
    addMoneyService.classList.add('hidden');
    cashOutService.classList.add('hidden');
    history.classList.add('hidden');

    // remove only choosen one
    const selected = document.getElementById(service);
    selected.classList.remove('hidden');
}