const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', validateForm);

function validateForm(event) {
  event.preventDefault();

  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const pnumber = document.getElementById("pnumber");
  const message = document.getElementById("textarea");
  const errorFname = document.getElementById("errorFname");
  const errorLname = document.getElementById("errorLname");
  const errorEmail = document.getElementById("errorEmail");
  const errorPnumber = document.getElementById("errorPnumber");
  const errorMessage = document.getElementById("errorMessage");

  errorFname.innerHTML = "";
  errorLname.innerHTML = "";
  errorEmail.innerHTML = "";
  errorPnumber.innerHTML = "";
  errorMessage.innerHTML = "";

  let hasError = false;

  if(fname.value === "") {
    errorFname.innerHTML = "First name can not be empty";
    hasError = true;
  }else if(fname.value.length < 2) {
    errorFname.innerHTML = "First name must be at least 2 characters";
    hasError = true;
  }

  if(lname.value === "") {
    errorLname.innerHTML = "Last name can not be empty";
    hasError = true;
  }else if(lname.value.length < 2) {
    errorLname.innerHTML = "Last name must be at least 2 characters";
    hasError = true;
  }

  if(email.value === "") {
    errorEmail.innerHTML = "Email can not be empty";
    hasError = true;
  }else{
    let hasAtSymbol = false;
    let endsWithCom = email.value.length >= 4 && email.value.slice(-4) === ".com";

    for(let i = 0; i < email.value.length; i++) {
      if(email.value[i] === "@") {
        hasAtSymbol = true;
        break;
      }
    }

    if(!hasAtSymbol) {
      errorEmail.innerHTML = "Email must contain '@'";
      hasError = true;
    }

    if(!endsWithCom) {
      errorEmail.innerHTML += (errorEmail.innerHTML ? " and " : "") + "Email must end with '.com'";
      hasError = true;
    }
  }

  if(pnumber.value === "") {
    errorPnumber.innerHTML = "Phone number cannot be empty";
    hasError = true;
  }else if(pnumber.value.length < 10 || pnumber.value.length > 12) {
    errorPnumber.innerHTML = "Phone number must be 10-12 digits";
    hasError = true;
  }else {
    for(let i = 0; i < pnumber.value.length; i++) {
      if(isNaN(pnumber.value[i])) {
        errorPnumber.innerHTML = "Phone number must contain only digits";
        hasError = true;
        break;
      }
    }
  }

  if(message.value === "") {
    errorMessage.innerHTML = "Message can not be empty";
    hasError = true;
  }else if(message.value.length < 10) {
    errorMessage.innerHTML = "Message must be at least 10 characters long";
    hasError = true;
  }

  if(!hasError) {
    if (confirm("Do you want to submit this form?") == true) {
      document.forms[0].submit();
    }
  }
}
