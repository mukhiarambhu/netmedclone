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

console.log("yes");
