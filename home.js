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
