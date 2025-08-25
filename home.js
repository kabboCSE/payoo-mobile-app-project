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

// function handle toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  const addMoney = (document.getElementById(id).style.display = "block");
}

//function btn toggle
function handleBtn(id) {
  const forms = document.getElementsByClassName("form-btn");
  for (const btn of forms) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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
//add money
document
  .getElementById("add-money-logo")
  .addEventListener("click", function () {
    handleToggle("addMoney");
    handleBtn("add-money-logo");

    // btn-background
    // const forms = document.getElementsByClassName("form-btn");
    // for (const btn of forms) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("add-money-logo")
    //   .classList.remove("border-gray-300");

    // document
    //   .getElementById("add-money-logo")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });
//cashout
document.getElementById("cash-out-logo").addEventListener("click", function () {
  handleToggle("cashout-form");
  handleBtn("cash-out-logo");
});
//transfer
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-form");
    handleBtn("transfer-button");
  });
// Get Bonus
document.getElementById("getBonus-btn").addEventListener("click", function () {
  handleToggle("getBonus-form");
  handleBtn("getBonus-btn");
});
// Pay Bill
document.getElementById("payBill-btn").addEventListener("click", function () {
  handleToggle("payBill");
  handleBtn("payBill-btn");
});

//cashout
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //amount withdraw

  const agentNumber = valueOnly("agent-number");

  if (agentNumber.length < 11) {
    alert("Agent Number should be over 10 digit");
    return;
  }

  const amountWithdraw = getInputvalue("amountWithdraw");

  if (amountWithdraw < 11) {
    alert("Amont should be over 10");

    return;
  }

  if (amountWithdraw < 10) {
    alert("Maximum about should be over 10 digit");
    return;
  }
  //avai - bal
  // const availableBalance = document.getElementById("available-bal");
  const getavailableBalance = getInnertext("available-bal");
  //   document.getElementById("available-bal").innerText
  // );
  const newBalance = getavailableBalance - amountWithdraw;
  setInnertext(newBalance);

  if (newBalance < 0) {
    alert("You dont have balance");
    setInnertext(0);
    return;
  }
});
//transfer money
document.getElementById("agent-number").addEventListener("click", function (e) {
  e.preventDefault();
});
