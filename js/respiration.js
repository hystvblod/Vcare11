let breathingText = document.getElementById("breathing-text");
let breathingCircle = document.getElementById("breathing-circle");
let interval;
let steps = [
  { text: "Inspirez...", class: "grow" },
  { text: "Retenez...", class: "hold" },
  { text: "Expirez...", class: "shrink" },
  { text: "Retenez...", class: "hold" }
];
let currentStep = 0;

function startBreathing() {
  clearInterval(interval);
  updateStep();
  interval = setInterval(() => {
    currentStep = (currentStep + 1) % steps.length;
    updateStep();
  }, 4000);
}

function updateStep() {
  breathingText.textContent = steps[currentStep].text;
  breathingCircle.className = "breathing-circle " + steps[currentStep].class;
}
