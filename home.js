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

//slider2 start
var left = 1;
var right = 3;

function show() {
  document.getElementById("slideimage1").style.display = "inline-block";

  for (i = left; i <= right; i++) {
    document.getElementById("slideimage" + i).style.display = "inline-block";
  }
}
function moveLeft() {
  if (left <= 6 && right >= 3) {
    document.getElementById("slideimage" + left).style.display = "none";
    left += 1;
    right += 1;
    for (i = left; i <= right; i++) {
      document.getElementById("slideimage" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

function moveRight() {
  if (left <= 6 && right >= 4) {
    document.getElementById("slideimage" + right).style.display = "none";
    left -= 1;
    right -= 1;
    for (i = left; i <= right; i++) {
      document.getElementById("slideimage" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

show();

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("header");

  if (window.pageYOffset == 0) {
    navbar.classList.add("sticky");
  }
});
