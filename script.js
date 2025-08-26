// login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = "01500600900";
  const pinNumber = "1234"; // make it string

  const mobileNumberValue = document
    .getElementById("mobile-number")
    .value.trim();
  const pinNumberValue = document.getElementById("pin-number").value.trim();

  if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credentials");
  }
});
