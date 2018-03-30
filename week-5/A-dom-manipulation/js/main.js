var button1 = document.querySelector("#bgrChangeBtn");
button1.addEventListener("click", function() {
  var background = document.querySelector(".jumbotron");
  background.style.backgroundColor = "blue";
});

var button2 = document.querySelector("#alertBtn");
button2.addEventListener("click", function() {
  alert("Get out of this Page!");
});

var button3 = document.querySelector("#addTextBtn");
button3.addEventListener("click", function() {
  var paragraph = document.createElement("p");
  paragraph.innerText = "What's up!";
  var container = document.querySelector(".jumbotron");
  container.appendChild(paragraph);
});
