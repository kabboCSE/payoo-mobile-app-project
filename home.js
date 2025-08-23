const pin = 1234;

document.getElementById("addMoney-btn").addEventListener("click", function (e) {
  e.preventDefault(); // stops form from refreshing page

  const selectBank = document.getElementById("select-bank").value;
  const accNumber = document.getElementById("acc-number").value;

  if (accNumber.length < 11) {
    alert("Please Provide Correct Account Number");
    return;
  }
  const pinNumber = document.getElementById("add-pin").value;
  //   console.log(selectBank, accNumber, pinNumber);
  if (pinNumber != pin) {
    alert("Please Provide the valid pin");
    return;
  }
  const getAmount = parseFloat(document.getElementById("amountAdd").value);

  const availableBalance = document.getElementById("available-bal");
  const getavailableBalance = parseFloat(
    document.getElementById("available-bal").innerText
  );

  const newBalance = getAmount + getavailableBalance;
  availableBalance.innerText = newBalance;
});

//toggling
document
  .getElementById("add-money-logo")
  .addEventListener("click", function () {
    const cashOut = document.getElementById("cashout-form");
    cashOut.style.display = "none";
    const addMoney = document.getElementById("addMoney");
    addMoney.style.display = "block";
  });

document.getElementById("cash-out-logo").addEventListener("click", function () {
  const addMoney = document.getElementById("addMoney");
  addMoney.style.display = "none";
  const cashOut = document.getElementById("cashout-form");
  cashOut.style.display = "block";
});
