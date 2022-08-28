const pageViewNirvanaEvent = (pagePath, pageTitle) => {
  let event = {};
  event.event = "pageViewNirvana";
  event.category = "enrollment";
  event.pageTitle = pageTitle;
  event.pagePath = pagePath;
  event.pageUrl = `${window.location.origin}${pagePath}`;
  event.pageSearch = window.location.search;
  event.pageHostName = window.location.hostname;
  event.referrer = document.referrer || "";

  return event;
};

// STEP 1: PERSONAL INFO
const pvnEnrollmentClickHandler = () => {
  let button = document.getElementById("pvn-enrollment");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment";
    let pageTitle = "Enroll";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentPersonalInfoCLickHandler = () => {
  let button = document.getElementById("pvn-enrollment-personal-info");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/personal-info";
    let pageTitle = "Get an Account";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentDesktop = () => {
  let button = document.getElementById("pvn-enrollment-desktop");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment-desktop";
    let pageTitle = "Enrollment in Desktop";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 2: OTP

const pvnEnrollmentOtp = () => {
  let button = document.getElementById("pvn-enrollment-otp");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/otp";
    let pageTitle = "Enter Code";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 3: Address

const pvnEnrollmentAddress = () => {
  let button = document.getElementById("pvn-enrollment-address");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/address";
    let pageTitle = "Home Address";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 4: Almost Done

const pvnEnrollmentCreditLine = () => {
  let button = document.getElementById("pvn-enrollment-credit-line");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/credit-line";
    let pageTitle = "Almost Done";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 5: KYC

const pvnEnrollmentDocV = () => {
  let button = document.getElementById("pvn-enrollment-doc-v");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/documents-verification";
    let pageTitle = "Document Verification";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentCreditResubmit = () => {
  let button = document.getElementById("pvn-enrollment-credit-resubmit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/credit-resubmit";
    let pageTitle = None;
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 6: Credit Decision

const pvnEnrollmentFrozenCredit = () => {
  let button = document.getElementById("pvn-enrollment-frozen-credit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/frozen-credit";
    let pageTitle = "Enrollment Frozen Credit";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentReject = () => {
  let button = document.getElementById("pvn-enrollment-reject");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/reject";
    let pageTitle = "Enrollment Reject";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

// STEP 7: Account Verification

const pvnAccountConfirmation = () => {
  let button = document.getElementById("pvn-account-confirmation");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/account-confirmation";
    let pageTitle = "You've got a Nirvana Card!";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Adding event handlers for nirvanaPageViewEvent - Enrollment");
    pvnEnrollmentClickHandler();
    pvnEnrollmentPersonalInfoCLickHandler();
    pvnEnrollmentDesktop();
    pvnEnrollmentOtp();
    pvnEnrollmentAddress();
    pvnEnrollmentCreditLine();
    pvnEnrollmentDocV();
    pvnEnrollmentCreditResubmit();
    pvnEnrollmentFrozenCredit();
    pvnEnrollmentReject();
    pvnAccountConfirmation();
  });
})();
