function computeInt()
{
    //p = document.getElementById("principal").value;
    var principal = parseFloat(document.getElementById("principal").value);

    var rate = parseFloat(document.getElementById("rate").value);

    var years = parseFloat(document.getElementById("years").value);

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark><b>"+principal+
    "</b></mark>,\<br\>at an interest rate of <mark><b>"+rate+
    "%</b></mark>\<br\>You will receive an amount of <mark><b>"+interest+
    "</b></mark>,\<br\>in the year <mark><b>"+year+"</b></mark>\<br\>"

    
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function checkdata()
{
    var princi = document.getElementById("principal").value;
    if(princi==0 || princi<0){
        alert("Enter a positive number");
        princi.focus();
        return false;
    }
}
        