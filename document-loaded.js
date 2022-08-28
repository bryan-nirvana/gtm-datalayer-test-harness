const getCurrentUserFromLocalStorage = () => {
  if (window.localStorage) {
    let storageUser = localStorage.getItem("currentUser");
    if (storageUser) {
      window.currentUser = JSON.parse(storageUser);
    } else {
      window.currentUser = getFakeUser();
      saveCurrentUserToLocalStorage();
    }
  } else {
    window.currentUser = getFakeUser();
  }
};

const saveCurrentUserToLocalStorage = () => {
  if (window.localStorage) {
    localStorage.setItem("currentUser", JSON.stringify(window.currentUser));
  }
};

const updateFakeUserGrid = () => {
  document.getElementById("first-name").innerHTML =
    window.currentUser.firstName;
  document.getElementById("last-name").innerHTML = window.currentUser.lastName;
  document.getElementById("email").innerHTML = window.currentUser.email;
  document.getElementById("phone").innerHTML = window.currentUser.phone;
  document.getElementById("nirvana-user-id").innerHTML =
    window.currentUser.nirvanaUserId;
  document.getElementById("nirvana-device-id").innerHTML =
    window.currentUser.nirvanaDeviceId;
};

const pushEventToDataLayer = (event) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded!");

    //get current user from local storage
    getCurrentUserFromLocalStorage();

    //and update the user grid
    updateFakeUserGrid();

    // add button handler for fake user
    const button = document.getElementById("new-fake-user");
    button.addEventListener("click", () => {
      window.currentUser = getFakeUser();
      saveCurrentUserToLocalStorage();
      updateFakeUserGrid();
    });

    // add collapsible section button handlers
    const collapsibles = document.getElementsByClassName("collapsible-title");
    for (const collapsible of collapsibles) {
      collapsible.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        const icon = this.querySelector(".expander-icon");
        icon.classList.toggle("expanded");

        if (content.style.display === "flex") {
          content.style.display = "none";
        } else {
          content.style.display = "flex";
        }
      });
    }
  });
})();
