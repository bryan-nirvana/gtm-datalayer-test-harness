const pageViewNirvanaEvent = (pagePath, pageTitle, pageCategory) => {
  let event = {};
  event.event = "pageViewNirvana";
  event.category = pageCategory;
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
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const pvnEnrollmentPersonalInfoCLickHandler = () => {
  let button = document.getElementById("pvn-enrollment-personal-info");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/personal-info";
    let pageTitle = "Get an Account";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const pvnEnrollmentDesktop = () => {
  let button = document.getElementById("pvn-enrollment-desktop");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment-desktop";
    let pageTitle = "Enrollment in Desktop";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const enrollmentStarted = () => {
  let button = document.getElementById("enrollment-started");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "enrolmmentStarted";
    event.category = "enrollment";
    event.subCategory = "personalInfo";

    pushEventToDataLayer(event);
  });
};

// STEP 2: OTP

const pvnEnrollmentOtp = () => {
  let button = document.getElementById("pvn-enrollment-otp");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/otp";
    let pageTitle = "Enter Code";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const phoneVerified = () => {
  let button = document.getElementById("phone-verified");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "phoneVerified";
    event.category = "enrollment";
    event.subCategory = "otp";

    pushEventToDataLayer(event);
  });
};

const otpResend = () => {
  let button = document.getElementById("otp-resend");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "otpResend";
    event.category = "enrollment";
    event.subCategory = "otp";

    pushEventToDataLayer(event);
  });
};

// STEP 3: Address

const pvnEnrollmentAddress = () => {
  let button = document.getElementById("pvn-enrollment-address");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/address";
    let pageTitle = "Home Address";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const addressVerified = () => {
  let button = document.getElementById("address-verified");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "addressVerified";
    event.category = "enrollment";
    event.subCategory = "address";

    pushEventToDataLayer(event);
  });
};

const dontSeeAddressIntent = () => {
  let button = document.getElementById("dont-see-address-intent");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "dontSeeAddressIntent";
    event.category = "enrollment";
    event.subCategory = "address";

    pushEventToDataLayer(event);
  });
};

// STEP 4: Almost Done

const pvnEnrollmentCreditLine = () => {
  let button = document.getElementById("pvn-enrollment-credit-line");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/credit-line";
    let pageTitle = "Almost Done";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const applyForCreditIntent = () => {
  let button = document.getElementById("apply-for-credit-intent");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "applyForCreditIntent";
    event.category = "enrollment";
    event.subCategory = "creditApply";

    pushEventToDataLayer(event);
  });
};

const agreedTermsConditions = () => {
  let button = document.getElementById("agreed-terms-conditions");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "agreedTermsConditions";
    event.category = "enrollment";
    event.subCategory = "creditApply";

    pushEventToDataLayer(event);
  });
};

const optInWebauthn = () => {
  let button = document.getElementById("opt-in-webauthn");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "optInWebauthn";
    event.category = "enrollment";
    event.subCategory = "creditApply";

    pushEventToDataLayer(event);
  });
};

// STEP 5: KYC

const pvnEnrollmentDocV = () => {
  let button = document.getElementById("pvn-enrollment-doc-v");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/documents-verification";
    let pageTitle = "Document Verification";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const pvnEnrollmentCreditResubmit = () => {
  let button = document.getElementById("pvn-enrollment-credit-resubmit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/credit-resubmit";
    let pageTitle = "";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const kycStart = () => {
  let button = document.getElementById("kyc-start");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycStart";
    event.category = "enrollment";
    event.subCategory = "kyc";

    pushEventToDataLayer(event);
  });
};

const kycComplete = () => {
  let button = document.getElementById("kyc-complete");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycComplete";
    event.category = "enrollment";
    event.subCategory = "kyc";

    pushEventToDataLayer(event);
  });
};

const kycResult = () => {
  let button = document.getElementById("kyc-result");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycResult";
    event.resultStatus = "Success";
    event.category = "enrollment";
    event.subCategory = "kyc";

    pushEventToDataLayer(event);
  });
};

const kycResubmit = () => {
  let button = document.getElementById("kyc-resubmit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycResubmit";
    event.fieldsUpdated = ["firstName", "lastName", "dateOfBirth", "SSN"];
    event.category = "enrollment";
    event.subCategory = "kyc";
    pushEventToDataLayer(event);
  });
};

const kycDocVStarted = () => {
  let button = document.getElementById("kyc-doc-v-started");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycDocVStarted";
    event.category = "enrollment";
    event.subCategory = "kyc";
    pushEventToDataLayer(event);
  });
};

const kycDocVComplete = () => {
  let button = document.getElementById("kyc-doc-v-complete");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycDocVComplete";
    event.category = "enrollment";
    event.subCategory = "kyc";
    pushEventToDataLayer(event);
  });
};

const kycDocVResult = () => {
  let button = document.getElementById("kyc-doc-v-result");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "kycDocVResult";
    event.resultStatus = "Accept";
    event.category = "enrollment";
    event.subCategory = "kyc";
    pushEventToDataLayer(event);
  });
};

// STEP 6: Credit Decision

const pvnEnrollmentFrozenCredit = () => {
  let button = document.getElementById("pvn-enrollment-frozen-credit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/frozen-credit";
    let pageTitle = "Enrollment Frozen Credit";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const pvnEnrollmentReject = () => {
  let button = document.getElementById("pvn-enrollment-reject");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/enrollment/reject";
    let pageTitle = "Enrollment Reject";
    let pageCategory = "enrollment";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const creditDecisionStart = () => {
  let button = document.getElementById("credit-decision-start");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "creditDecisionStart";
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    pushEventToDataLayer(event);
  });
};

const creditDecisionComplete = () => {
  let button = document.getElementById("credit-decision-complete");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "creditDecisionComplete";
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    pushEventToDataLayer(event);
  });
};

const creditDecisionResult = () => {
  let button = document.getElementById("credit-decision-result");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "creditDecisionResult";
    event.resultStatus = "creditDecisionFailure";
    event.failureReason = "creditReportFrozen";
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    pushEventToDataLayer(event);
  });
};

const initialCreditLineGranted = () => {
  let button = document.getElementById("initial-credit-line-granted");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "fullCredit";
    event.initialCreditLine = 4000;
    event.initialCreditScore = 720;
    event.initialAPR = 0.149;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    pushEventToDataLayer(event);
  });
};

// STEP 7: Account Decision
const accountDecisionStart = () => {
  let button = document.getElementById("account-decision-start");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountDecisionStart";
    event.category = "enrollment";
    event.subCategory = "accountDecision";
    pushEventToDataLayer(event);
  });
};

const accountDecisionComplete = () => {
  let button = document.getElementById("account-decision-complete");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountDecisionComplete";
    event.category = "enrollment";
    event.subCategory = "accountDecision";
    pushEventToDataLayer(event);
  });
};

const accountDecisionResult = () => {
  let button = document.getElementById("account-decision-result");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountDecsionResult";
    event.resultStatus = "createAccountApproved";
    event.category = "enrollment";
    event.subCategory = "accountDecision";
    pushEventToDataLayer(event);
  });
};

// STEP 8: Account Creation

const accountCreationStart = () => {
  let button = document.getElementById("account-creation-start");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountCreationStart";
    event.category = "enrollment";
    event.subCategory = "accountCreation";
    pushEventToDataLayer(event);
  });
};

const accountCreationComplete = () => {
  let button = document.getElementById("account-creation-complete");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountCreationComplete";
    event.category = "enrollment";
    event.subCategory = "accountCreation";
    pushEventToDataLayer(event);
  });
};

const accountCreationResult = () => {
  let button = document.getElementById("account-creation-result");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountCreationResult";
    event.resultStatus = "createAccountSuccess";
    event.category = "enrollment";
    event.subCategory = "accountCreation";
    pushEventToDataLayer(event);
  });
};

const accountCreated = () => {
  let button = document.getElementById("account-created");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountCreated";
    event.category = "enrollment";
    event.subCategory = "accountCreation";
    pushEventToDataLayer(event);
  });
};

// STEP 9: Account Congrats
const pvnAccountConfirmation = () => {
  let button = document.getElementById("pvn-account-confirmation");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let pagePath = "/account-confirmation";
    let pageTitle = "You've got a Nirvana Card!";
    let pageCategory = "account";
    pushEventToDataLayer(
      pageViewNirvanaEvent(pagePath, pageTitle, pageCategory)
    );
  });
};

const reviewImportantDisclosures = () => {
  let button = document.getElementById("review-important-disclosures");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "reviewImportantDisclosures";
    event.category = "enrollment";
    event.subCategory = "accountCongrats";
    pushEventToDataLayer(event);
  });
};

const fundYourCardIntent = () => {
  let button = document.getElementById("fund-your-card-intent");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "accountCreated";
    event.category = "enrollment";
    event.subCategory = "accountCongrats";
    pushEventToDataLayer(event);
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Adding event handlers for enrollment");

    // step 1: personal info
    pvnEnrollmentClickHandler();
    pvnEnrollmentPersonalInfoCLickHandler();
    pvnEnrollmentDesktop();
    enrollmentStarted();

    //step 2: otp
    pvnEnrollmentOtp();
    phoneVerified();
    otpResend();

    //step 3: address
    pvnEnrollmentAddress();
    addressVerified();
    dontSeeAddressIntent();

    //step 4: almost done
    pvnEnrollmentCreditLine();
    applyForCreditIntent();
    agreedTermsConditions();
    optInWebauthn();

    //step 5: KYC
    pvnEnrollmentDocV();
    pvnEnrollmentCreditResubmit();
    kycStart();
    kycComplete();
    kycResult();
    kycResubmit();
    kycDocVStarted();
    kycDocVComplete();
    kycDocVResult();

    //step 6: credit decsiion
    pvnEnrollmentFrozenCredit();
    pvnEnrollmentReject();
    creditDecisionStart();
    creditDecisionComplete();
    creditDecisionResult();
    initialCreditLineGranted();

    //step 7: account decsion
    accountDecisionStart();
    accountDecisionComplete();
    accountDecisionResult();

    //step 8: account creation
    accountCreationStart();
    accountCreationComplete();
    accountCreationResult();
    accountCreated();

    //step 9: Account Congrats
    pvnAccountConfirmation();
    reviewImportantDisclosures();
    fundYourCardIntent();
  });
})();
