const linkAccountIntent = () => {
  let button = document.getElementById("link-account-intent");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "linkAccountIntent";
    event.category = "accountLinking";
    event.subCategory = "linkDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const skipForNowIntentLinking = () => {
  let button = document.getElementById("skip-for-now-intent-linking");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "skipForNowIntent";
    event.category = "accountLinking";
    event.subCategory = "linkDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const firstDeposit = () => {
  let button = document.getElementById("first-deposit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "firstDeposit";
    event.category = "accountLinking";
    event.subCategory = "firstDeposit";
    event.eventType = "eventTracking";
    event.amount = 50.75;

    pushEventToDataLayer(event);
  });
};

const skipForNowIntentDeposit = () => {
  let button = document.getElementById("skip-for-now-intent-deposit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "skipForNowIntent";
    event.category = "accountLinking";
    event.subCategory = "firstDeposit";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

/// these are plaid linking events

/// OPEN

/// TRANSITION_VIEW

/// SELECT_INSTITUTION

/// SUBMIT_CREDENTIALS

/// HANDOFF

/// ERROR

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log(
      "=== gtm-datalayer-events => Adding event handlers for accountLinking"
    );
  });
})();
