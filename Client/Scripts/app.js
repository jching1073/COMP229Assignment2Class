"use strict";
(function () {
    let submitButton = document.getElementById("submitForm");
    let resetButton = document.getElementById("clear");
    if (submitButton) {
        submitButton.addEventListener("click", SubmitFrom);
        resetButton.addEventListener("click", ResetForm);
    }
    function SubmitFrom(evt) {
        evt.preventDefault();
        let formInput = document.getElementsByClassName("contactInput");
        let information = `?fName=${formInput[0].value}`;
        information += `&lName=${formInput[1].value}`;
        information += `&phoneNumber=${formInput[2].value}`;
        information += `&eMail=${formInput[3].value}`;
        information += `&Message=${formInput[4].value}`;
        let info = `FirstName : ${formInput[0].value} Last Name : ${formInput[1].value} Phone Number:  : ${formInput[2].value} Email : ${formInput[3].value} Message : ${formInput[4].value}`;
        let cont = confirm(info);
        if (cont === true) {
            location.href = "/about" + information;
        }
    }
    function ResetForm(evt) {
        evt.preventDefault();
        let formInput = document.getElementsByTagName("input");
        for (let i = 0; i < formInput.length; i++) {
            formInput[i].value = '';
        }
    }
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map