let daysInput, monthsInput, yearsInput;


let yearsOutput = document.querySelector(".years-out");
let monthsOutput = document.querySelector(".months-out");
let daysOutput = document.querySelector(".days-out");

let today = new Date();

let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;
let tDay = today.getDate();

let isValid = true;

let downBtn = document.querySelector(".down-arrow");
downBtn.addEventListener("click", function(){
    daysInput = parseInt(document.getElementById("inputDay").value);
    monthsInput = parseInt(document.getElementById("inputMonth").value);
    yearsInput = parseInt(document.getElementById("inputYear").value);

    validate(yearsInput, monthsInput, daysInput);
});

function checkEmpty(date) //date = year = NaN
{
    return isNaN(date); // return true
}

function validate(year, month, day) //year = NaN, month = NaN, day = NaN
{
    if(checkEmpty(year))
    {
        document.querySelector(".year").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error")[2].textContent = "This field is required";
        document.querySelectorAll(".label")[2].style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputYear").style.border = "1px solid hsl(0, 100%, 67%)"
    }
    else
    {
        document.querySelector(".year").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error")[2].innerHTML = "";
        document.querySelectorAll(".label")[2].style.color = "";
        document.getElementById("inputYear").style.border = "";

        checkYear(year);
    }

    if(checkEmpty(month))
    {
        document.querySelector(".month").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error")[1].textContent = "This field is required";
        document.querySelectorAll(".label")[1].style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputMonth").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else
    {
        document.querySelector(".month").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error")[1].innerHTML = "";
        document.querySelectorAll(".label")[1].style.color = "";
        document.getElementById("inputMonth").style.border = "";

        checkMonth(month);
    }

    if(checkEmpty(day))
    {
        document.querySelector(".day").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error")[0].textContent = "This field is required";
        document.querySelectorAll(".label")[0].style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputDay").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else
    {
        document.querySelector(".day").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error")[0].textContent = "";
        document.querySelectorAll(".label")[0].style.color = "";
        document.getElementById("inputDay").style.border = "";

        checkDay(day);
    }
}

function checkYear(year){
    
    if(year < 1700 || year > tYear)
    {
        document.querySelector(".year").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error").textContent = "Must be in the past";
        document.querySelector(".label").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputYear").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else
    {
        document.querySelector(".year").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error").textContent = "";
        document.querySelector(".label").style.color = "";
        document.getElementById("inputYear").style.border = "";

        yearsOutput.textContent = (tYear - year).toString();

    }
}

function checkMonth(month){

    if(month < 0 || month > 12)
    {
        document.querySelector(".month").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error")[1].textContent = "Must be a valid month";
        document.querySelector(".label").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputMonth").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else
    {
        document.querySelector(".month").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error")[1].textContent = "=";
        document.querySelector(".label").style.color = "";
        document.getElementById("inputMonth").style.border = "";
        if(tMonth > month)
        {
            tMonth = tMonth - month; 
        }
        else
        {
            tYear--;
            tMonth = (12 + tMonth) - month;
        }
        
    }

}

function checkDay(day){
    
    const maxDay = checkDayInMonths(monthsInput, yearsInput);
    if(day < 0 || day > maxDay)
    {
        document.querySelector(".day").lastElementChild.classList.add("display-error");
        document.querySelectorAll(".display-error")[0].textContent = "Must be a valid date";
        document.querySelector(".label").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("inputDay").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else
    {
        document.querySelector(".day").lastElementChild.classList.remove("display-error");
        document.querySelectorAll(".display-error")[0].textContent = "";
        document.querySelector(".label").style.color = "";
        document.getElementById("inputDay").style.border = "";

        if(tDay > day)
        {
            tDay = tDay - day;
        }
        else
        {
            tMonth--;
            tDay = (maxDay + tDay) - day;
        }
    }

}

function checkDayInMonths(month, year)
{
    if(month == 2)
    {
        return checkLeapYear(month, year);
    }
    else if([4, 6, 9, 11].includes(tMonth))
    {
        return 30;
    }
    else
    {
        return 31;
    }
}

function checkLeapYear(month, year)
{
    if(month == 2)
    {
        if(year % 4 == 0)
        {
            if(year % 100 == 0)
            {
                if(year % 400)
                {
                    return 29;
                }
                else
                {
                    return 28;
                }
            }
            else if(year % 100 != 0)
            {
                return 29;
            }
        }
    }
    else
    {
        return 28;
    }
}