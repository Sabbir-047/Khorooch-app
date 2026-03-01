document.getElementById("btn-cashout").addEventListener("click", function () {
    // get agent number, amount, pin and main balance

    // ---------- Normal Approach

    /**
    let mainBalanceField = document.getElementById("main-balance");
    let mainBalanceStr = mainBalanceField.innerText;
    let mainBalance = Number(mainBalanceStr);
 */

    // agent
    /*
    let agentNumField = document.getElementById("agent-number");
    let agentNumberStr = agentNumField.value;
    let agentNumber = Number(agentNumberStr);
*/

    // amount
    /**
    let amountNumField = document.getElementById('amount-number');
    let amountNumberStr = amountNumField.value;
    let amountNumber = Number(amountNumberStr);
*/



    // get agent number, amount, pin and main balance
    //  ------- Optimized Common Funch---------
    let mainBalance = getInnerText("main-balance");

    // ---------- agent -----------
    let agentNumber = getValue("agent-number");
    console.log(agentNumber);

    // ------------- amount -------------
    let amountNumField = document.getElementById("amount-number");
    let amountNumber = getValue("amount-number");

    // -------------- pin -------------
    let pinNumField = document.getElementById("pin-number");
    let pinNumber = pinNumField.value;
    // console.log(pinNumber);
    if (String(agentNumber).length == 11 && pinNumber == "1234") {
        // validations
        if (mainBalance < amountNumber) {
            alert("Please CashIn before withdraw");
            return;
        }
        let cashOut = mainBalance - amountNumber;
        setBalance(cashOut);
        // clear fields
        amountNumField.value = "";
        pinNumField.value = "";
        alert("Cashout " + amountNumber + " successful");
    } else {
        alert("Please try again with valid number or pin");
    }
});
