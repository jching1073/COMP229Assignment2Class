"use strict";
/*
File Name app.ts
By: Jerome Ching
Student# 300817930
Date: June 4, 2021
*/
(function()
{

    let submitButton = document.getElementById("submitForm");
    let resetButton = document.getElementById("clear");
        //Checks if the button is there and activates
    if(submitButton){
        submitButton.addEventListener("click", SubmitFrom);
        resetButton.addEventListener("click", ResetForm);
    }
    
    //saves input as a array passes info as a query string and redirects to About Page
    function SubmitFrom(evt:Event)
    {
        evt.preventDefault();
        let formInput = document.getElementsByClassName("contactInput");
        let information = `?fName=${formInput[0].value}`;
        information += `&lName=${formInput[1].value}`;
        information += `&phoneNumber=${formInput[2].value}`;
        information += `&eMail=${formInput[3].value}`;
        information += `&Message=${formInput[4].value}`;
        //present input info in confirm if ok redirects to About Page if not Stays on the page
        let info = `FirstName : ${formInput[0].value} Last Name : ${formInput[1].value} Phone Number:  : ${formInput[2].value} Email : ${formInput[3].value} Message : ${formInput[4].value}` ;
        let cont = confirm(info);
         if(cont === true)
         {
             location.href = "/about" + information;
            //window.location.replace ("/about");
         }
        
    }
    //resets the form
    function ResetForm(evt:Event)
    {
        evt.preventDefault();
        let formInput = document.getElementsByTagName("input");
        for(let i = 0; i < formInput.length; i++)
        {
            formInput[i].value = '';
        }
    }
    //log just to confirm we are connected and working initially
    function Start(): void
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})();