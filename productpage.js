let slider1_imageproduct = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1594275598_Category_web_1000X200.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1606753561_Category_web.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1606753561_Category_web.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1629398958_Veet-Cream_category_web.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1629212928_Dettol_category_web.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1629463755_smplhome.jpg",
];
if (localStorage.getItem("slider1_imagesproduct") == null) {
  localStorage.setItem(
    "slider1_imagesproduct",
    JSON.stringify(slider1_imageproduct)
  );
}

function slider() {
  let parseslider1_imagesproduct = JSON.parse(
    localStorage.getItem("slider1_imagesproduct")
  );
  //   console.log(parseslider1_images[0]);
  let div = document.getElementById("productcontainer_slide");
  let img = document.createElement("img");
  img.src = parseslider1_imagesproduct[0];
  div.append(img);
  var i = 0;

  setInterval(function () {
    if (i == parseslider1_imagesproduct.length) {
      i = 0;
    } else {
      img.src = parseslider1_imagesproduct[i];
      i++;
    }
  }, 2000);
}
slider();

//adding sticky menu
window.addEventListener("load", function () {
  var navbar = document.getElementById("header");

  if (window.pageYOffset == 0) {
    navbar.classList.add("sticky");
  }
});
//product appending on page

var product_data = [
  {
    name: "New FreeFlex Forte Soflets 15's",
    price: "594",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918991/freeflex_forte_glucosamine_chondroitin_soflets_15s_0_0.jpg",
  },
  {
    name: "Maxirich Gold Capsules 7's",
    price: "42",
    Category: "medicine",
    brand: "Cipla Ltd(Otc",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/948303/maxirich_gold_capsules_7s_0_0.jpg",
  },
  {
    name: "DePURA Kids 400 IU ",
    price: "58",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918984/depura_kids_400_vitamin_d3_nano_drops_15_ml_0_0.jpg",
  },
  {
    name: "E-Cod Omega Softgels",
    price: "331",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918985/ecod_omega_softgels_30s_0_0.jpg",
  },
  {
    name: "DePURA 60000 Iu ",
    price: "77",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918982/depura_vitamin_d3_oral_solution_60k_sugar_free_5_ml_4s_0_0.jpg",
  },
  {
    name: "Pure Nutrition Apple Cider Vinegar",
    price: "1019",
    Category: "medicine",
    brand: "Zydus",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/812807/pure_nutrition_apple_cider_vinegar_plus_veg_capsule_90_s_0.jpg",
  },
  {
    name: "Berrycran Softgels 10's",
    price: "277",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918978/berrycran_urinary_tract_health_capsules_10s_0_0.jpg",
  },
  {
    name: "CollaFlex Pro Sachets 12.1gm",
    price: "327",
    Category: "medicine",
    brand: "Mkt: Sanofti India Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/918979/collaflex_pro_joint_sachet_12_1g_10s_0_0.jpg",
  },
  {
    name: "INLIFE Vitamin B12 Tablets 60",
    price: "420",
    Category: "multivitamin",
    brand: "Mkt: Inlife Pharma",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/858136/inlife_vitamin_b12_tablets_60_s_0.jpg",
  },
  {
    name: "HeakthAid Vitamin C (orange) 100mg",
    price: "1045",
    Category: "multivitamin",
    brand: "Mkt: Radicura Pharmaceuticals",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/408877/healthaid_vitamin_c_orange_1000_mg_effervescent_tablets_20_s_0.jpg",
  },
  {
    name: "PureFoods Vitamin-E",
    price: "899",
    Category: "multivitamin",
    brand: "Mkt: Rollins International",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/959840/purefoods_vitamin_e_softgel_capsule_60s_0_0.jpg",
  },
  {
    name: "PureFoods Multivitamin 100mg",
    price: "1350",
    Category: "multivitamin",
    brand: "Mkt: Rollins International",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/959839/purefoods_multivitamin_for_women_tablet_60s_0_0.jpg",
  },
  {
    name: "PureFoods Multivitamin",
    price: "250",
    Category: "multivitamin",
    brand: "Mkt: Rollins International",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/959838/purefoods_multivitamin_for_men_tablet_60s_0_0.jpg",
  },
  {
    name: "Neurapid Astaxanthin Capsule ",
    price: "650",
    Category: "multivitamin",
    brand: "Mkt: Amritha Naturmed's Herbal Products",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/960517/neurapid_astaxanthin_veg_capsule_60s_0_0.jpg",
  },
  {
    name: "Neurapid Coenzyme Q10 ",
    price: "1150",
    Category: "multivitamin",
    brand: "Mkt: Amritha Naturmed's Herbal Products",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/960516/neurapid_coenzyme_q10_veg_capsule_60s_0_0.jpg",
  },
  {
    name: "Neurapid Pre and Probiotics 30",
    price: "650",
    Category: "Probitic",
    brand: "zydus",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/947122/neurapid_pre_and_probiotics_30_billion_cfu_veg_capsule_60s_0_1.jpg",
  },
  {
    name: "Neurapid Pre Probiotics 50 Billion",
    price: "1550",
    Category: "Probitic",
    brand: "zydus",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/947111/neurapid_pre_probiotics_50_billion_cfu_with_digestive_enzymes_tablet_60s_0_1.jpg",
  },
  {
    name: "Probiotics 50 Billion",
    price: "585",
    Category: "Probitic",
    brand: "BonAyu Probiotics",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/915371/bonayu_probiotics_for_kids_mouth_dissolving_strip_with_real_chocolate_30s_0_1.jpg",
  },
  {
    name: "BonAyu Probiotics ",
    price: "880",
    Category: "Probitic",
    brand: "BonAyu Probiotics",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/915368/bonayu_probiotics_for_adults_mouth_dissolving_strip_30s_0_1.jpg",
  },
  {
    name: "Boldfit Probiotics Capsule 60's ",
    price: "386",
    Category: "Probitic",
    brand: "zydus",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/931425/boldfit_probiotics_capsule_60s_0_0.jpg",
  },
  {
    name: "CF Probiotics 30 Billion+ ",
    price: "985",
    Category: "Probitic",
    brand: "zydus",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/913822/cf_probiotics_30_billion_veg_softgel_capsule_100s_0_1.jpg",
  },
  {
    name: "Shreys Biofibe - Pre & Probiotic",
    price: "635",
    Category: "Probitic",
    brand: "BonAyu Probiotics",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/848753/shreys_biofibe_pre_probiotic_for_digestive_health_immunity_60_s_0.jpg",
  },
  {
    name: "Pro Active Sachet 1gm",
    price: "54",
    Category: "Probitic",
    brand: "BonAyu Probiotics",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/857271/pro_active_sachet_1gm_0.jpg",
  },
  {
    name: "Tri-Activ Instant Hand Sanitizer",
    price: "175",
    Category: "covid Essential",
    brand: "Piramal Healthcare Ltd",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/910016/tri_activ_instant_hand_sanitizer_500_ml_0_1.jpg",
  },
  {
    name: "Dettol Instant Hand Sanitizer",
    price: "160",
    Category: "covid Essential",
    brand: "Reckitt Benckiser India Ltd",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/15129/dettol_hand_sanitizer_original_50_ml_0.jpg",
  },
  {
    name: "Dettol Disinfectant Lime",
    price: "63",
    Category: "covid Essential",
    brand: "Reckitt Benckiser India Ltd",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/15115/dettol_disinfectant_lime_fresh_200_ml_0_1.jpg",
  },
  {
    name: "Dettol Liquid HandWash",
    price: "98",
    Category: "covid Essential",
    brand: "Reckitt Benckiser India Ltd",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/822646/dettol_liquid_handwash_refill_original_750_ml_0.jpg",
  },
  {
    name: "Zebronics Fingertip Pulse Oximeter",
    price: "1409",
    Category: "covid Essential",
    brand: "Zebronics India Private Limited",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/915643/zebronics_fingertip_pulse_oximeter_zeb_fpo500_0_0.jpg",
  },
  {
    name: "Choicemmed Pulse Oximeter",
    price: "1285",
    Category: "covid Essential",
    brand: "Beijing Choice Electronic",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/858055/choicemmed_finger_tip_pulse_oximeter_0.jpg",
  },
  {
    name: "Finger Tip Pulse Oximeter",
    price: "1575",
    Category: "covid Essential",
    brand: "Sahyog Wellness Infrared Thermometer",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/902221/sahyog_wellness_multi_function_non_contact_body_object_infrared_thermometer_0_1.jpg",
  },
  {
    name: "Dr.Morepen Digital Thermometer ",
    price: "625",
    Category: "covid Essential",
    brand: "Dr.Morepen Digital",
    image:
      "https://www.netmeds.com/images/product-v1/150x150/407903/dr_morepen_digital_thermometer_flexi_tip_mt222_0.jpg",
  },
];

var product_data_stringfy = JSON.stringify(product_data);
localStorage.setItem("products", product_data_stringfy);

var parsed_data = JSON.parse(localStorage.getItem("products"));

var displaydiv = document.getElementById("productcarddiv");

function showall() {
  parsed_data.forEach(function (product) {
    let div = document.createElement("div");

    let p_image = document.createElement("img");
    p_image.src = product.image;

    let p_name = document.createElement("h5");
    p_name.innerText = product.name;

    let company_name = document.createElement("p");
    company_name.innerText = product.brand;

    let p_price = document.createElement("p");
    p_price.innerText = `Rs. ${product.price}`;

    let btn = document.createElement("button");
    btn.innerHTML = "ADD TO CART";
    div.append(p_image, p_name, company_name, p_price, btn);
    displaydiv.append(div);

    btn.onclick = function () {
      addtoCart(product);
    };
  });
}
showall();

function appendProducts(p) {
  let parsed_data = p;

  displaydiv.innerHTML = null;
  parsed_data.forEach(function (product) {
    let div = document.createElement("div");

    let p_image = document.createElement("img");
    p_image.src = product.image;

    let p_name = document.createElement("h5");
    p_name.innerText = product.name;

    let company_name = document.createElement("p");
    company_name.innerText = product.brand;

    let p_price = document.createElement("p");
    p_price.innerText = `Rs. ${product.price}`;

    let btn = document.createElement("button");
    btn.innerHTML = "ADD TO CART";
    div.append(p_image, p_name, company_name, p_price, btn);
    displaydiv.append(div);

    btn.onclick = function () {
      addtoCart(product);
    };
  });
}

if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify([]));
}
var total_cart_product = 0;
var totacartdisplay = document.getElementById("carttoal");
function addtoCart(el) {
  var cart_data = JSON.parse(localStorage.getItem("cart"));

  let addthis = true;

  for (let i = 0; i < cart_data.length; i++) {
    if (cart_data[i].name == el.name) {
      addthis = false;
      alert("This Product is already in Your Cart");
    }
  }
  if (addthis == true) {
    cart_data.push(el);
    localStorage.setItem("cart", JSON.stringify(cart_data));
    total_cart_product++;
  }
  document.getElementById("carttoal").innerHTML = null;
  var cart_total_p = document.createElement("p");
  cart_total_p.innerText = total_cart_product;
  totacartdisplay.append(cart_total_p);
  console.log(total_cart_product);
}

// console.log(product_list);

function hightolow() {
  var product_list = JSON.parse(localStorage.getItem("products"));
  product_list.sort(function (a, b) {
    return b.price - a.price;
  });
  appendProducts(product_list);
}

function lowtohigh() {
  var product_list = JSON.parse(localStorage.getItem("products"));
  product_list.sort(function (a, b) {
    return a.price - b.price;
  });
  appendProducts(product_list);
}
