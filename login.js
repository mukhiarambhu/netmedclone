let userAllData = JSON.parse(localStorage.getItem("signUpData"));

function signin(e) {
  e.preventDefault();
  verifyDetails();
}
var flag = 1;
function verifyDetails() {
  let useremail = document.getElementById("emaillogin").value;
  let userpasssword = document.getElementById("passwordlogin").value;

  for (let i = 0; i < userAllData.length; i++) {
    let user = userAllData[i].email;
    let pass = userAllData[i].password;
    console.log(user, pass);

    if (useremail == "") {
      document.getElementById("errorEmail").innerHTML = "emailId is Empty";
      flag = 0;
    } else if (user != useremail) {
      document.getElementById("errorEmail").innerHTML = "Enter Valid emailId";
      flag = 0;
    } else {
      document.getElementById("errorEmail").innerHTML = null;
      flag = 1;
    }
    if (userpasssword == "") {
      document.getElementById("errorPassword").innerHTML = "Password is Empty";
      flag = 0;
    } else if (userpasssword != pass) {
      document.getElementById("errorPassword").innerHTML =
        "Enter Valid Password";
      flag = 0;
    } else {
      document.getElementById("errorPassword").innerHTML = null;
      flag = 1;
    }
  }
  if (flag) {
    window.location.href = "home.html";
  } else {
    return false;
  }
}
