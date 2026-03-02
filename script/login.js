document.getElementById("btn-login").addEventListener("click", function () {
    // get the phone number and pin
    let phnField = document.getElementById("phn-number");
    let phnString = phnField.value;
    let phnNum = parseInt(phnString);
    console.log(phnNum);
    let pinField = document.getElementById("pin-number");
    let pinString = pinField.value;
    let pinNum = parseInt(pinString);
    console.log(pinNum);
    // match number and pin
    if (phnNum == "123456789" && pinNum == "1234") {
        alert("Successful Login");
        phnField.value = "";
        pinField.value = "";
        // redirect to the home page
        // window.location.replace("/home.html");
        window.location.assign("../home.html");
    } else {
        alert("please give valid credentials");
    }
});


// window.location.replace()  will not take us to its previous history