const pin = 1234;
const transactionData = [];
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

// add money
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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);

  if (accNumber.length < 11) {
    alert("Please Provide Correct Account Number");
    return;
  }

  if (pinNumber != pin) {
    alert("Please Provide the valid pin");
    return;
  }
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);

  if (newBalance < 0) {
    alert("You dont have balance");
    setInnertext(0);
    return;
  }
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    console.log("tran btn Clciked");
  });

// Transfer Money
document.getElementById("sendNow-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //amount withdraw

  const accNum = valueOnly("user-number");

  if (accNum.length < 11) {
    alert("Account Number should be over 10 digit");
    return;
  }

  const amountTransfer = getInputvalue("amountTransfer");

  if (amountTransfer < 11) {
    alert("Amount should be over 10");

    return;
  }

  //avai - bal
  // const availableBalance = document.getElementById("available-bal");
  const getavailableBalance = getInnertext("available-bal");
  //   document.getElementById("available-bal").innerText
  // );
  const newBalance = getavailableBalance - amountTransfer;
  setInnertext(newBalance);

  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);

  if (newBalance < 0) {
    alert("You dont have balance");
    setInnertext(0);
    return;
  }
});

//Transaction
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="bg-white rounded-x mt-4 p-3 flex justify-between items-center">
          <div class="flex gap-4 items-center">
            <div class="p-3  rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png " alt="" />
            </div>

            <div>
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>

          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `;
      transactionContainer.appendChild(div);
    }
  });

//toggling start
//add money
document
  .getElementById("add-money-logo")
  .addEventListener("click", function () {
    handleToggle("addMoney");
    handleBtn("add-money-logo");
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
// Transactions
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleBtn("transaction-btn");
  });
// toggling end
