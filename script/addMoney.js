document.getElementById("addmoney-btn").addEventListener("click", function () {
    // get bank account num, add amount, pin and main balance

    // main balance
    let mainBalance = getInnerText("main-balance");

    // choose bank
    let chooseBank = document.getElementById("add-money-bank");
    let choosenBank = chooseBank.value;
    if (String(choosenBank) == "Choose a Bank") {
        alert("Please choose a bank");
        return;
    }

    // get bank account number
    let bankAccountNum = getValue("bank-account-number");
    let bankAccountField = document.getElementById("bank-account-number");

    // get add money amount
    let addMoneyAmount = getValue("add-amount");
    let addMoneyField = document.getElementById("add-amount");

    // get pin number
    let pinNumber = getValue("add-pin-number");
    let pinNumField = document.getElementById("add-pin-number");

    // conditions
    if (String(bankAccountNum).length == 11 && pinNumber == "1234") {
        if (addMoneyAmount < 0 || addMoneyAmount == 0) {
            alert("Enter a valid amount");
            return;
        }
        let addMoney = mainBalance + addMoneyAmount;
        setBalance(addMoney);
        // clear every field
        addMoneyField.value = "";
        pinNumField.value = "";
        alert(addMoneyAmount + ` added from ${choosenBank} at ${new Date()}`);

        // 1 - take the history container\
        const history = document.getElementById("history-container");
        // 2 - Create a new div
        const newHistory = document.createElement("div");
        // 3 - add innerHtml to the new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            added from ${choosenBank},
            acc-no ${bankAccountNum}
            at ${new Date()}
        </div>
        `;
        // 4 - append new div to the history container
        history.append(newHistory);
    } else {
        alert("please provide valid pin or number");
        return;
    }
});
