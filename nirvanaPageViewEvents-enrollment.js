const pageViewNirvanaEvent = (pageTitle, pagePath) => {
  let event = {};
  event.event = "nirvanaPageView";
  event.category = "enrollment";
  event.pageTitle = pageTitle;
  event.pagePath = pagePath;
  event.pageUrl = `${window.location.origin}${pagePath}`;
  event.pageSearch = window.location.search;
  event.pageHostName = window.location.hostname;
  event.referrer = document.referrer || "";
  event.clientTimestampMs = Date.now();

  return event;
};

// nirvana page view events
const pvnEnrollmentClickHandler = () => {
  let button = document.getElememntById("pvn-enrollment");
  button.addEventListener("click", () => {
    let pagePath = "/enrollment";
    let pageTitle = "Enroll";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentPersonalInfoCLickHandler = () => {
  let button = document.getElememntById("pvn-enrollment-personal-info");
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/personal-info";
    let pageTitle = "Get an Account";
    pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
  });
};

const pvnEnrollmentOtp = () => {
  let pagePath = "/enrollment/otp";
  let pageTitle = "Enter Code";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentAddress = () => {
  let pagePath = "/enrollment/address";
  let pageTitle = "Home Address";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentCreditLine = () => {
  let pagePath = "/enrollment/credit-line";
  let pageTitle = "Almost Done";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentCreditResubmit = () => {
  let pagePath = "/enrollment/credit-resubmit";
  let pageTitle = None;
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentReject = () => {
  let pagePath = "/enrollment/reject";
  let pageTitle = "Enrollment Reject";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentFrozenCredit = () => {
  let pagePath = "/enrollment/frozen-credit";
  let pageTitle = "Enrollment Frozen Credit";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentDesktop = () => {
  let pagePath = "/enrollment-desktop";
  let pageTitle = "Get an Account";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentDocV = () => {
  let pagePath = "/enrollment/documents-verification";
  let pageTitle = "Enrollment in Desktop";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnEnrollmentAccountVerification = () => {
  let pagePath = "/enrollment/personal-info";
  let pageTitle = "Document Verification";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

const pvnAccountConfirmation = () => {
  let pagePath = "/account-confirmation";
  let pageTitle = "You've got a Nirvana Card!";
  pushEventToDataLayer(pageViewNirvanaEvent(pagePath, pageTitle));
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Adding event handlers for nirvanaPageViewEvent - Enrollment");
  pvnEnrollmentClickHandler();
  pvnEnrollmentPersonalInfoCLickHandler();
});
