document.getElementById("heeform").onsubmit = validate;

function validate()
{
    //Create a flag variable
    let valid = true;

    //Clear all errors
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }

    //Check Input
    let userInput = document.getElementById("numbers").value;
    if (userInput == "")
    {
        let errNum = document.getElementById("errNum");
        errNum.style.visibility = "visible";
        valid = false;
    }

    if (userInput < 0)
    {
        let errNum = document.getElementById("errNumNeg");
        errNum.style.visibility = "visible";
        valid = false;
    }

    if (Number.isInteger(parseInt(userInput)) == false)
    {
        let errNum = document.getElementById("errNum");
        errNum.style.visibility = "visible";
        valid = false;
    }

return valid;
}