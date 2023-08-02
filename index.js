let inputs = document.querySelectorAll(".dates");
let dayInput = document.getElementById("inputDay");
let monthInput = document.getElementById("inputMonth");
let yearInput = document.getElementById("inputYear");

let yearsOutput = document.querySelector(".years-out");
let monthsOutput = document.querySelector(".months-out");
let daysOutput = document.querySelector(".days-out");
let button = document.querySelector(".down-arrow");

let day;
let months; //I'm adding 1 because getMonth starts from 0 and goes upto 11.
let years;


let validater = true;

button.addEventListener("click", () => {
    const date = new Date();
    day = date.getDate();
    months = date.getMonth() + 1;
    years = date.getFullYear();
    validater = true;
    if(validateEmptyCheck())
    {
        calculateDay();
        calculateMonth();
        calculateYear();
    }
});


function validateEmptyCheck(){
    inputs.forEach((i) => {
        if(!i.value)
        {
            i.style.borderColor = "red";
            i.parentElement.querySelector("label").style.color = "red";
            i.parentElement.querySelector(".display-error").innerHTML = "This field is required";
            validater = false;
        }
        else
        {
            i.style.borderColor = "";
            i.parentElement.querySelector("label").style.color = "";
            i.parentElement.querySelector(".display-error").innerHTML = "";
            validater = true;
        }
    });

    if(validater)
        {
            if(dayInput.value > 31 || dayInput.value < 1 || (dayInput.value > 30 && [4, 6, 9, 11].includes(parseInt(monthInput.value)) || monthInput.value == 2 && (dayInput.value > 29 || dayInput.value > 28 && !checkLeapYear(yearInput)))){
                console.log("Working");
                dayInput.style.borderColor = "red";
                dayInput.parentElement.querySelector("label").style.color = "red";
                dayInput.parentElement.querySelector(".display-error").innerHTML = "Must be a valid date";
                validater = false;
            }
            else
            {
                dayInput.style.borderColor = "";
                dayInput.parentElement.querySelector("label").style.color = "";
                dayInput.parentElement.querySelector(".display-error").innerHTML = "";
            }
        
        
            if(monthInput.value > 12 || monthInput.value < 1)
            {
                monthInput.style.borderColor = "red";
                monthInput.parentElement.querySelector("label").style.color = "red";
                monthInput.parentElement.querySelector(".display-error").innerHTML = "Must be a valid month";
                validater = false;
            }
            else
            {
                monthInput.style.borderColor = "";
                monthInput.parentElement.querySelector("label").style.color = "";
                monthInput.parentElement.querySelector(".display-error").innerHTML = "";
            }
        
        
            if(yearInput.value > years)
            {
                yearInput.style.borderColor = "red";
                yearInput.parentElement.querySelector("label").style.color = "red";
                yearInput.parentElement.querySelector(".display-error").innerHTML = "Must be in the past";
                validater = false;
            }
            else
            {
                yearInput.style.borderColor = "";
                yearInput.parentElement.querySelector("label").style.color = "";
                yearInput.parentElement.querySelector(".display-error").innerHTML = "";
            }
        }

    return validater;
}

function calculateDay(){
    let d;
    if(dayInput.value > day)
    {
        if([4, 6, 9, 11].includes[monthInput.value]){
            d = (day + 30) - dayInput.value;
            months--;
        }
        else if(monthInput.value == 2 && checkLeapYear(yearInput))
        {
            d = (day + 29) - dayInput.value;
            months--;
        }
        else
        {
            d = (day + 31) - dayInput.value;
            months--;
        }
    }
    else
    {
        d = day - dayInput.value;
    }

    daysOutput.innerHTML = d;
}

function calculateMonth()
{
    let m;
    if(monthInput.value > months)
    {
        m = (months + 12) - monthInput.value; 
        years--;
    }
    else
    {
        m = months - monthInput.value;
    }
    monthsOutput.innerHTML = m;
}

function calculateYear()
{
    let y = years - yearInput.value;
    yearsOutput.innerHTML = y;
}

function checkLeapYear(year){
    if(yearInput.value % 4 == 0)
    {
        if(yearInput.value % 100 == 0)
        {
            if(yearInput.value % 400 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else if(yearInput.value % 100 != 0)
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}