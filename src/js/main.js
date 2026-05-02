function loadParkData() {
  document.getElementById("parkName").textContent = "Yellowstone";
  document.getElementById("parkType").textContent = "National Park";
  document.getElementById("parkStates").textContent = "WY, ID, MT";
  document.querySelector("#hero-image").src = "./images/yellowstone.jpg";
  document.querySelector("#hero-image").alt = "Yellowstone";
}

function addEventListeners() {
  const menuTrigger = document.querySelector("#header-menu-trigger");
  const menuOptions = document.querySelector("#header-menu-options");
  const parkInfo = document.querySelector("#parkInfo");

  // MENU toggle
  if (menuTrigger && menuOptions) { // Don't add these listeners if the elements don't exist
    menuTrigger.addEventListener("click", () => {
      menuOptions.classList.toggle("is-hidden");
    });

    // Event delegation (single listener)
    menuOptions.addEventListener("click", (event) => {
      const itemName = event.target.textContent;
      console.log(itemName);
    });
  }

  // Overlay hover color toggle
  if (parkInfo) { // Don't add these listeners if the element doesn't exist
    parkInfo.addEventListener("mouseenter", () => {
      parkInfo.classList.add("parkInfo-hover");
    });

    parkInfo.addEventListener("mouseleave", () => {
      parkInfo.classList.remove("parkInfo-hover");
    });
  }
}



// Calling Functions
addEventListeners();
loadParkData();