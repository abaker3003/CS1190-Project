/**********************************************************/


/**********************************************************/


var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var icon = this.querySelector("i");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      panel.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
}


/* Loans Calculator */
function Calculate() {
  // Extracting value in the amount section in the variable
  const amount = parseFloat(document.querySelector("#amount").value);

  // Extracting value in the interest rate section in the variable
  const rate = parseFloat(document.querySelector("#rate").value);

  const rt = rate / 100.0;

  // Extracting value in the months section in the variable
  const months = parseInt(document.querySelector("#months").value);

  // Calculating interest
  const interest = amount * rt * months;

  // Calculating monthly payment
  const payment = (amount + interest) / months;


  document.querySelector("#interest").innerHTML = "Total Interest: $" + interest.toFixed(2);
  document.querySelector("#payment").innerHTML = "Monthly Payments: $" + payment.toFixed(2);
}


/* Compound Interest Calculator */
function Compound_Interest() {
  // Extracting value in the amount section in the variable
  const amount = parseFloat(document.querySelector("#amount").value);

  // Extracting value in the interest rate section in the variable
  const rate = parseFloat(document.querySelector("#rate").value);

  const rt = rate / 100.0;

  // Extracting value in the months section in the variable
  const months = parseInt(document.querySelector("#months").value);


  const balance = amount * Math.pow(1 + rt, months);

  document.querySelector("#balance").innerHTML = "Ending balance: $" + balance.toFixed(2);
}
/**********************************************************/

