function signUpData(e) {
  e.preventDefault();

  validateform();
}

var flag = 1;
function validateform() {
  var name = document.getElementById("name").value;

  var email = document.getElementById("email").value;

  var password = document.getElementById("password").value;

  if (name == "") {
    var alertname = document.getElementById("registrationform_name");
    alertname.innerHTML = "Name is Empty";
    flag = 0;
    // document.getElementById("registrationform_name").innerHTML = null;
  } else if (name.length < 3) {
    document.getElementById("registrationform_name").innerHTML =
      "Name require min three character";
    flag = 0;
  } else {
    document.getElementById("registrationform_name").innerHTML = null;
    flag = 1;
  }
  if (email == "") {
    var alertemail = document.getElementById("registrationform_email");
    alertemail.innerHTML = "Email is Empty";
    flag - 0;
  } else {
    document.getElementById("registrationform_email").innerHTML = null;
    flag = 1;
  }

  if (password == "") {
    var alertpassword = document.getElementById("registrationform_password");
    alertpassword.innerHTML = "Password is Empty";
    flag = 0;
  } else {
    document.getElementById("registrationform_password").innerHTML = null;
    flag = 1;
  }
  if (flag) {
    userAllData = {
      name,
      email,
      password,
    };
    let arr;
    arr = localStorage.getItem("signUpData");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("signUpData"));
    }
    arr.push(userAllData);
    localStorage.setItem("signUpData", JSON.stringify(arr));
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
  } else {
    return false;
  }
}
