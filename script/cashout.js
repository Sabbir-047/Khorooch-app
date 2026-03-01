document.getElementById('btn-cashout').addEventListener('click', function(){
    console.log('dsfsd');
    // get agent number, amount, pin and main balance
    let mainBalanceField = document.getElementById('main-balance');
    let mainBalanceStr = mainBalanceField.innerText;
    let mainBalance = parseInt(mainBalanceStr);
    // console.log(mainBalance);
    // agent
    let agentNumField = document.getElementById('agent-number');
    let agentNumberStr = agentNumField.value;
    let agentNumber = parseInt(agentNumberStr);
    // console.log(agentNumber);
    // amount
    let amountNumField = document.getElementById('amount-number');
    let amountNumberStr = amountNumField.value;
    let amountNumber = parseInt(amountNumberStr);
    // console.log(amountNumber);
    // pin
    let pinNumField = document.getElementById('pin-number');
    let pinNumber = pinNumField.value;
    // console.log(pinNumber);
    if (agentNumber == '123456789' && pinNumber == '1234') {
        // validations
        if (mainBalance < amountNumber) {
            alert('Please CashIn before withdraw');
            return;
        }
        let cashOut = mainBalance - amountNumber;
        mainBalanceField.innerText = cashOut;
        amountNumField.value = '';
        pinNumField.value = '';
        alert('Cashout '+ amountNumber + ' successful');
    }else{
        alert('Please try again');
    }
})