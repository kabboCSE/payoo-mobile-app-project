const pin = 1234;
//function to get input values
function getInputvalue(id) {
  const inputfieldNumber = parseFloat(document.getElementById(id).value);
  return inputfieldNumber;
}
function valueOnly(id) {
  const inputfieldNumber = document.getElementById(id).value;
  return inputfieldNumber;
}
//function to get innertext

function getInnertext(id) {
  const element = parseFloat(document.getElementById(id).innerText);
  return element;
}

//function to set innertext

function setInnertext(value) {
  document.getElementById("available-bal").innerText = value;
}

document.getElementById("addMoney-btn").addEventListener("click", function (e) {
  e.preventDefault(); // stops form from refreshing page

  const selectBank = document.getElementById("select-bank").value;
  const accNumber = valueOnly("acc-number");

  const getAmount = getInputvalue("amountAdd");
  console.log(getAmount);
  const pinNumber = getInputvalue("add-pin");

  const getavailableBalance = getInnertext("available-bal");

  const newBalance = getAmount + getavailableBalance;
  // document.getElementById("available-bal").innerText = newBalance;

  //  call setinnerText function
  setInnertext(newBalance);

  if (accNumber.length < 11) {
    alert("Please Provide Correct Account Number");
    return;
  }

  if (pinNumber != pin) {
    alert("Please Provide the valid pin");
    return;
  }
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

//cashout
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //amount withdraw

  const agentNumber = document.getElementById("agent-number").value;

  if (agentNumber.length < 11) {
    alert("Agent Number should be over 10 digit");
    return;
  }

  const amountWithdraw = parseInt(
    document.getElementById("amountWithdraw").value
  );

  if (amountWithdraw < 11) {
    alert("Amont should be over 10");

    return;
  }

  if (amountWithdraw < 10) {
    alert("Maximum about should be over 10 digit");
    return;
  }
  //avai - bal
  const availableBalance = document.getElementById("available-bal");
  const getavailableBalance = parseFloat(
    document.getElementById("available-bal").innerText
  );
  const newBalance = getavailableBalance - amountWithdraw;
  availableBalance.innerText = newBalance;

  if (newBalance < 0) {
    alert("You dont have balance");
    availableBalance.innerText = "0";
    return;
  }
});

document.getElementById("agent-number").addEventListener("click", function (e) {
  e.preventDefault();
  //amount withdraw
});
