function calculateloan() {
    loanamoutValue = document.querySelector("#loan-amout").value; // Ensure this is a number
    intesetratevalue = document.querySelector("#intreset-rate").value; // Added .value to extract the input
    monthlypay = document.querySelector("#months-to-pay").value; // Added .value to extract the input

    // Convert values to numbers
    loanamoutValue = parseFloat(loanamoutValue);
    intesetratevalue = parseFloat(intesetratevalue);
    monthlypay = parseFloat(monthlypay);

    // Calculate interest and monthly payment
    intreset = (loanamoutValue * (intesetratevalue * 0.01)) / monthlypay;
    monthlypayment = (loanamoutValue / monthlypay + intreset).toFixed(2);

    // Use setTimeout to delay the display of the result
    setTimeout(() => {
        document.querySelector(".payment").innerHTML = `Monthly payment: ${monthlypayment}`;
    }, 100); // Delay of 1000 milliseconds (1 second)
}

calculateloan();