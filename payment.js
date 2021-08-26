var paydetaildiv = document.getElementById("paydetail");
var show = document.getElementById("carddetaillink");
var paybutton = document.getElementById("paybtn");

show.addEventListener("click", () => {
  paydetaildiv.classList.add("show");
  console.log("yes");
});
paybutton.addEventListener("click", () => {
  setInterval(function () {
    window.location.href = "success.html";
  }, 3000);

  paydetaildiv.classList.remove("show");
});

//get value of cartvalue from local storge

let mrptotal = JSON.parse(localStorage.getItem("mrptotal"));

var display_mrp_total = document.getElementById("mrptotal");
display_mrp_total.innerHTML = ` Rs.${mrptotal}`;

//get value of discount from local storage

let discount = JSON.parse(localStorage.getItem("discount"));
var discount_display = document.getElementById("meddiscountdisplay");

discount_display.innerHTML = `Rs.${discount}`;
document.getElementById(
  "totalsaving_display"
).innerHTML = `TOTAL SAVING Rs.${discount}`;

//get total amount from local storage

var totalamount = JSON.parse(localStorage.getItem("totalamount"));
document.getElementById("totalamountdisplay").innerHTML = `Rs.${totalamount}`;
