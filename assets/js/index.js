var modal = document.getElementById("modal");
var img = document.getElementById("modal-img");

function showPopup(src) {
  modal.style.display = "block";
  img.src = src;
}

var span = document.getElementById("close");
span.onclick = function() { 
  modal.style.display = "none";
}