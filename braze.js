// billboard campaign triggers 1-10

const billboardEvents = () => {
  let button = document.getElementById("braze-billboard");
  button.style.display = "block";
  button.addEventListener("click", () => {
    for (let i = 1; i < 11; i++) {
      const triggerId = `billboard-${i.toString().padStart(2, "0")}`;
      pushEventToDataLayer({
        event: "campaignTrigger",
        category: "braze",
        subCategory: "billboard",
        eventType: "eventTracking",
        triggerId: triggerId,
      });
    }
  });
};

// experiment trigger (user needs to input an experiment Id for this)
const experimentTriggerVar1 = () => {
  let button = document.getElementById("braze-experiment-trigger-var-1");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "campaignTrigger",
      category: "braze",
      subCategory: "experiment",
      eventType: "eventTracking",
      experimentId: "FdedfcvFRxyZ_syoHheFeA",
      experimentVariantId: "1",
    });
  });
};

// experiment trigger (user needs to input an experiment Id for this)
const experimentTriggerVar2 = () => {
  let button = document.getElementById("braze-experiment-trigger-var-2");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "campaignTrigger",
      category: "braze",
      subCategory: "experiment",
      eventType: "eventTracking",
      experimentId: "FdedfcvFRxyZ_syoHheFeA",
      experimentVariantId: "2",
    });
  });
};

// experimentStarted event
// experiment trigger (user needs to input an experiment Id for this)
const experimentStartedVar1 = () => {
  let button = document.getElementById("braze-experiment-started-var-1");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "experimentStarted",
      category: "experiments",
      subCategory: "googleOptimize",
      eventType: "eventTracking",
      experimentId: "FdedfcvFRxyZ_syoHheFeA",
      experimentVariantId: "1",
      experimentName: "QA Test",
      experimentVariantName: "Pinwheel",
    });
  });
};

const experimentStartedVar2 = () => {
  let button = document.getElementById("braze-experiment-started-var-2");
  button.style.display = "block";
  button.addEventListener("click", () => {
    pushEventToDataLayer({
      event: "experimentStarted",
      category: "experiments",
      subCategory: "googleOptimize",
      eventType: "eventTracking",
      experimentId: "FdedfcvFRxyZ_syoHheFeA",
      experimentVariantId: "2",
      experimentName: "QA Test",
      experimentVariantName: "Plaid",
    });
  });
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("=== gtm-datalayer-events => Adding braze event handlers");
    billboardEvents();
    experimentTriggerVar1();
    experimentTriggerVar2();
    experimentStartedVar1();
    experimentStartedVar2();
  });
})();
