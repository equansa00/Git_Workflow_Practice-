window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

function setupIntialValues() {
  // Set default values for the input fields
  document.getElementById("loan-amount").value = 100000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5;

  // Calculate and display the initial monthly payment
  update();
}

function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const { amount, years, rate } = values;

  // Convert the interest rate to a decimal and monthly rate
  const monthlyRate = rate / 100 / 12;

  // Calculate the total number of payments
  const totalPayments = years * 12;

  // Calculate the monthly payment
  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments));

  // Return the monthly payment rounded to 2 decimal places
  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  // Update the UI to display the monthly payment
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}
