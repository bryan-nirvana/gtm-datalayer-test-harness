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

const addNewFakeUserHandler = () => {
  let newFakeUserButton = document.querySelectorAll(".new-fake-user");
  for (const button of newFakeUserButton) {
    button.addEventListener("click", (event) => generateNewFakeUser(event));
  }
};

const generateNewFakeUser = () => {
  window.currentUser = getFakeUser();
  saveCurrentUserToLocalStorage();
  updateFakeUserGrid();
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document Loaded!");

  addNewFakeUserHandler();
  getCurrentUserFromLocalStorage();
  updateFakeUserGrid();
});
