const redBearGroup1 = () => {
  let button = document.getElementById("redbear-group1");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "starterAccount";
    event.initialCreditLine = 1;
    event.initialCreditScore = undefined;
    event.initialAPR = 38.6;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const redBearGroup2 = () => {
  let button = document.getElementById("redbear-group2");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "starterAccount";
    event.initialCreditLine = 1;
    event.initialCreditScore = 298;
    event.initialAPR = 37.2;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const redBearGroup3 = () => {
  let button = document.getElementById("redbear-group3");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "starterAccount";
    event.initialCreditLine = 1;
    event.initialCreditScore = 552;
    event.initialAPR = 27.9;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const redBearGroup4 = () => {
  let button = document.getElementById("redbear-group4");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "standardAccount";
    event.initialCreditLine = 400;
    event.initialCreditScore = 622;
    event.initialAPR = 24.2;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const snazzyPopcornGroup1 = () => {
  let button = document.getElementById("snazzy-popcorn-group1");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "starterAccount";
    event.initialCreditLine = 1;
    event.initialCreditScore = 422;
    event.initialAPR = 23.8;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const snazzyPopcornGroup2 = () => {
  let button = document.getElementById("snazzy-popcorn-group2");
  button.style.display = "block";
  button.addEventListener("click", () => {
    let event = {};
    event.event = "initialCreditLineGranted";
    event.creditLineType = "standardAccount";
    event.initialCreditLine = 1000;
    event.initialCreditScore = 692;
    event.initialAPR = 17.9;
    event.category = "enrollment";
    event.subCategory = "creditDecision";
    event.eventType = "eventTracking";

    pushEventToDataLayer(event);
  });
};

const pinwheelSuccessDirectDepositSwitch = () => {
  let button = document.getElementById("pinwheel-success-direct-deposit");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "pinwheelSuccess",
      category: "directDepositSwitch",
      subCategory: "pinwheel",
      eventType: "eventTracking",
      accountId: "testAccount",
      platformId: "testPlatform",
      job: "direct_deposit_switch",
      params: {
        amount: {
          value: 100,
          unit: "%",
        },
      },
    });
  });
};

const experimentStartedRedBearVar1 = () => {
  let button = document.getElementById("redbear-experiment-started");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "experimentStarted",
      category: "experiments",
      subCategory: "googleOptimize",
      eventType: "eventTracking",
      experimentId: "D9xAt-miTVq1w-tkZsEEdw",
      experimentVariantId: "1",
      experimentName: "QA Red Bear",
      experimentVariantName: "Offer -> Pinwheel",
    });
  });
};

const experimentStartedSnazzyPopcornVar1 = () => {
  let button = document.getElementById("snazzy-popcorn-experiment-started");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "experimentStarted",
      category: "experiments",
      subCategory: "googleOptimize",
      eventType: "eventTracking",
      experimentId: "QCXpR4k0RjWHrR_U6VjPlA",
      experimentVariantId: "1",
      experimentName: "QA Snazzy Popcorn",
      experimentVariantName: "Credit Promise -> Pinwheel -> Plaid",
    });
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log(
      "=== gtm-datalayer-events => Adding event handlers for directDepositSwitch"
    );
    redBearGroup1();
    redBearGroup2();
    redBearGroup3();
    redBearGroup4();
    snazzyPopcornGroup1();
    snazzyPopcornGroup2();
    experimentStartedRedBearVar1();
    experimentStartedSnazzyPopcornVar1();
    pinwheelSuccessDirectDepositSwitch();
  });
})();
