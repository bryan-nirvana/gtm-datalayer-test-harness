// app info event
const appInfoClickHandler = () => {
  let button = document.getElementById("app-info");
  button.style.display = "block";
  button.addEventListener("click", () => {
    const event = {};
    event.event = "appInfo";
    event.appPlatform = "web";
    event.appType = "browser";
    event.appVersion = "1.0.3";
    event.userAgent = navigator.userAgent;
    pushEventToDataLayer(event);
  });
};

// device info event
const deviceInfoClickHandler = () => {
  let button = document.getElementById("device-info");
  button.style.display = "block";
  button.addEventListener("click", () => {
    const event = {};
    event.event = "deviceInfo";
    event.nirvanaDeviceId = window.currentUser.nirvanaDeviceId;
    event.fingerPrintJsId = window.currentUser.fingerPrintJsId;
    event.sardineDeviceId = window.currentUser.sardineDeviceId;
    pushEventToDataLayer(event);
  });
};

// user info event
const userInfoClickHandler = () => {
  let button = document.getElementById("user-info");
  button.style.display = "block";
  button.addEventListener("click", () => {
    const event = {};
    event.event = "userInfo";
    event.nirvanaUserId = window.currentUser.nirvanaUserId;
    event.nirvanaUserStatus = window.currentUser.nirvanaUserStatus;
    pushEventToDataLayer(event);
  });
};

// login event
const loginClickHandler = () => {
  let button = document.getElementById("login");
  button.style.display = "block";
  button.addEventListener("click", () => {
    const event = {};
    event.event = "login";
    event.nirvanaUserId = window.currentUser.nirvanaUserId;
    event.nirvanaDeviceId = window.currentUser.nirvanaDeviceId;
    event.nirvanaUserStatus = window.currentUser.nirvanaUserStatus;
    pushEventToDataLayer(event);
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log(
      "=== gtm-datalayer-events => Added event handlers for appInfo, userInfo, deviceInfo, login"
    );
    appInfoClickHandler();
    deviceInfoClickHandler();
    userInfoClickHandler();
    loginClickHandler();
  });
})();
