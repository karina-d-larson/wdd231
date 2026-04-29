

function loadParkData() {

  document.getElementById("parkName").textContent = "Yellowstone";
  document.getElementById("parkType").textContent = "National Park";
  document.getElementById("parkStates").textContent = "WY, ID, MT";
  document.querySelector("#hero-image").src = "./images/yellowstone.jpg";
  document.querySelector("#hero-image").alt = "Yellowstone";

}

loadParkData();