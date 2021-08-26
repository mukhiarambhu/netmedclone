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
