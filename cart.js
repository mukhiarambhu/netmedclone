//providing sticky part

window.addEventListener("load", function () {
  var navbar = document.getElementById("divPanel1");

  if (window.pageYOffset == 0) {
    navbar.classList.add("sticky");
  }
});

//slider1 code

let slider1_image = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1628860170_Home_bannerdfsd.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1627647943_Web_home_title-banner.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1628860170_Home_bannerdfsd.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1627970899_Home_bannergdfg.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1627971089_Home.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1629463755_smplhome.jpg",
];
if (localStorage.getItem("slider1_images") == null) {
  localStorage.setItem("slider1_images", JSON.stringify(slider1_image));
}

function slider() {
  let parseslider1_images = JSON.parse(localStorage.getItem("slider1_images"));
  //   console.log(parseslider1_images[0]);
  let div = document.getElementById("slideShow_auto1");
  let img = document.createElement("img");
  img.src = parseslider1_images[0];
  div.append(img);
  var i = 0;

  setInterval(function () {
    if (i == parseslider1_images.length) {
      i = 0;
    } else {
      img.src = parseslider1_images[i];
      i++;
    }
  }, 2000);
}
slider();

// slider 1 end

//append product on div

//div where product will be displayed
var display_diV_cart = document.getElementById("displayCartProduct");

//function to append product
function showProduct(el) {
  let productcarddiv = document.createElement("div"); //main div

  let productInfoDiv = document.createElement("div"); //product information

  let name = document.createElement("h5");
  name.innerText = el.name;

  let manufacturer = document.createElement("p");
  manufacturer.innerText = el.brand;

  let price = document.createElement("p");
  price.innerText = `Rs. ${el.price}`;

  let deliverydate = document.createElement("p");
  deliverydate.innerText = "Delivery between SEPTEMBER 2-SEPTEMBER 5";

  productInfoDiv.append(name, manufacturer, price, deliverydate); //appending product info to infodiv

  //div to append image

  let image_div = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;

  image_div.append(image);

  //horizontalline
  let horizontalline = document.createElement("hr");

  //append to main div
  productcarddiv.append(image_div, productInfoDiv);

  //append to dom

  display_diV_cart.append(productcarddiv, horizontalline);
}

var cartValue = 0;
var product_incart = 0;

function addproduct(el) {
  //get data fromcart
  let cart_data = JSON.parse(localStorage.getItem("cart"));

  //loop through cartdata to get access to individual product

  cart_data.forEach(function (el) {
    showProduct(el);
    product_incart++;
    cartValue += Number(el.price);
  });
}
addproduct();

//display total product in cart on nav bar

var no_of_product_display = document.getElementById("carttoal");

var total_product_p = document.createElement("p");
total_product_p.innerText = product_incart;
no_of_product_display.append(total_product_p);

var Total_price_display = document.getElementById("mrptotal");
Total_price_display.append(`Rs.${cartValue}`);

localStorage.setItem("mrptotal", JSON.stringify(cartValue));

// discount

function applyDiscount() {
  var promo_value = document.getElementById("promocode").value;

  let price = cartValue;
  totalitem = product_incart;
  var discount = 0;
  if (promo_value == "med30") {
    discount += Math.round((30 / 100) * price);
  }

  var discount_display = document.getElementById("meddiscountdisplay");
  document.getElementById("meddiscountdisplay").innerHTML = null;
  discount_display.append(`Rs.${discount}`);

  localStorage.setItem("discount", JSON.stringify(discount));

  let totalamount = price - discount;
  let total_display = document.getElementById("totalamountdisplay");
  document.getElementById("totalamountdisplay").innerHTML = null;
  total_display.append(`Rs.${totalamount}`);
  localStorage.setItem("totalamount", JSON.stringify(totalamount));

  let total_display1 = document.getElementById("totalamountdisplay1");
  document.getElementById("totalamountdisplay1").innerHTML = null;
  total_display1.append(`Rs.${totalamount}`);

  var totalsaving_display = document.getElementById("totalsaving_display");
  totalsaving_display.append(` Rs.${discount}`);

  document.getElementById("promocode").value = null;
}
