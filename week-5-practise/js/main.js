var buttonBlue = document.querySelector("#blueBtn");
buttonBlue.addEventListener("click", function() {
  var background1 = document.querySelector(".jumbotron");
  var background2 = document.querySelector("#donateBtn");
  var background3 = document.querySelector(".btn-secondary");
  background1.style.backgroundColor = "#588fbd";
  background2.style.backgroundColor = "#ffa500";
  background3.style.backgroundColor = "black";
  background3.style.color = "white";
});
var buttonOrange = document.querySelector("#orangeBtn");
buttonOrange.addEventListener("click", function() {
  var background1 = document.querySelector(".jumbotron");
  var background2 = document.querySelector("#donateBtn");
  var background3 = document.querySelector(".btn-secondary");
  background1.style.backgroundColor = "#f0ad4e";
  background2.style.backgroundColor = "#5751fd";
  background3.style.backgroundColor = "#31b0d5";
  background3.style.color = "white";
});
var buttonGreen = document.querySelector("#greenBtn");
buttonGreen.addEventListener("click", function() {
  var background1 = document.querySelector(".jumbotron");
  var background2 = document.querySelector("#donateBtn");
  var background3 = document.querySelector(".btn-secondary");
  background1.style.backgroundColor = "#87ca8a";
  background2.style.backgroundColor = "black";
  background3.style.backgroundColor = "#8c9c08";
  // background3.style.color = "white";
});

var submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(event) {
  var emailContainer = document.querySelector("#exampleInputEmail1");
  var nameContainer = document.querySelector("#example-text-input");
  var descriptionConatiner = document.querySelector("#exampleTextarea");

  if (emailContainer.value.length > 0 && emailContainer.value.includes("@")) {
  } else {
    emailContainer.style.backgroundColor = "red";
  }
  if (nameContainer.value.length > 0) {
  } else {
    nameContainer.style.backgroundColor = "red";
  }
  if (descriptionConatiner.value.length > 0) {
  } else {
    descriptionConatiner.style.backgroundColor = "red";
  }

  event.preventDefault();
  if (
    emailContainer.value.length > 0 &&
    emailContainer.value.includes("@") &&
    nameContainer.value.length > 0 &&
    descriptionConatiner.value.length > 0
  ) {
    emailContainer.value = "";
    nameContainer.value = "";
    descriptionConatiner.value = "";
    emailContainer.style.backgroundColor = "white";
    nameContainer.style.backgroundColor = "white";
    descriptionConatiner.style.backgroundColor = "white";
    alert("Thanks for filling out the form");
  }
});
