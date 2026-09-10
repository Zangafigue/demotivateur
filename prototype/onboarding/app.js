const form = document.querySelector("#onboarding-form");
const steps = Array.from(document.querySelectorAll(".step"));
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const resetButton = document.querySelector("#reset-button");
const progressBar = document.querySelector("#progress-bar");
const stepLabel = document.querySelector("#step-label");
const progressPurpose = document.querySelector("#progress-purpose");
const formError = document.querySelector("#form-error");
const storageKey = "demotivateur-onboarding-draft-v1";

let currentStep = 0;

function selectedValues(name) {
  return Array.from(form.querySelectorAll('[name="' + name + '"]:checked')).map(
    (input) => input.value,
  );
}

function valueOf(name) {
  const field = form.elements.namedItem(name);
  if (!field) return "";

  if (field instanceof RadioNodeList) {
    return field.value;
  }

  if (field.type === "checkbox") {
    return field.checked;
  }

  return field.value;
}

function snapshot() {
  return {
    contractAccepted: Boolean(valueOf("contractAccepted")),
    goalCategory: valueOf("goalCategory"),
    goalLabel: valueOf("goalLabel"),
    currentState: valueOf("currentState"),
    failureReasons: selectedValues("failureReasons"),
    triggers: selectedValues("triggers"),
    intensity: valueOf("intensity"),
    actionLabel: valueOf("actionLabel"),
    deadline: valueOf("deadline"),
    maxReminders: valueOf("maxReminders"),
    proofType: valueOf("proofType"),
  };
}

function saveDraft() {
  localStorage.setItem(storageKey, JSON.stringify(snapshot()));
}

function restoreDraft() {
  const rawDraft = localStorage.getItem(storageKey);
  if (!rawDraft) return;

  try {
    const draft = JSON.parse(rawDraft);

    Object.entries(draft).forEach(([name, value]) => {
      const fields = Array.from(form.querySelectorAll('[name="' + name + '"]'));
      if (!fields.length) return;

      fields.forEach((field) => {
        if (field.type === "radio" || field.type === "checkbox") {
          const expectedValues = Array.isArray(value) ? value : [value];
          field.checked =
            expectedValues.includes(field.value) ||
            (field.type === "checkbox" && value === true);
        } else if (typeof value === "string") {
          field.value = value;
        }
      });
    });
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function validateStep() {
  const step = steps[currentStep];
  const requiredFields = Array.from(step.querySelectorAll("[required]"));

  for (const field of requiredFields) {
    if (!field.checkValidity()) {
      formError.textContent = "Il manque une réponse nécessaire pour continuer.";
      field.focus();
      return false;
    }
  }

  if (currentStep === 3 && selectedValues("failureReasons").length === 0) {
    formError.textContent = "Choisis au moins une raison déjà observée.";
    return false;
  }

  if (currentStep === 4) {
    const triggers = selectedValues("triggers");
    if (triggers.length === 0) {
      formError.textContent = "Choisis au moins un déclencheur à tester.";
      return false;
    }
    if (triggers.length > 2) {
      formError.textContent = "Deux déclencheurs maximum pour le premier test.";
      return false;
    }
  }

  formError.textContent = "";
  return true;
}

function createSummaryRow(label, value) {
  const term = document.createElement("dt");
  const definition = document.createElement("dd");
  term.textContent = label;
  definition.textContent = value || "Non renseigné";
  return [term, definition];
}

function messageFor(data) {
  if (data.intensity === "Taquin") {
    return "Ton engagement est prêt. Il ne manque plus que la partie où tu le respectes.";
  }

  if (data.intensity === "Sans pitié") {
    return (
      "Tu as choisi « " +
      data.actionLabel +
      " » avant " +
      data.deadline +
      ". À l'échéance, montre une preuve ou assume le report."
    );
  }

  return (
    "Tu as promis « " +
    data.actionLabel +
    " » avant " +
    data.deadline +
    ". Cette fois, une intention ne suffira pas."
  );
}

function renderSummary() {
  const data = snapshot();
  const summary = document.querySelector("#summary");
  const rows = [
    ["Objectif", data.goalLabel || data.goalCategory],
    ["Situation", data.currentState],
    ["Ce qui échoue", data.failureReasons.join(" · ")],
    ["Déclencheurs", data.triggers.join(" · ")],
    ["Ton maximal", data.intensity],
    ["Engagement", data.actionLabel],
    ["Échéance", data.deadline],
    ["Preuve", data.proofType],
    ["Rappels maximum", data.maxReminders],
  ];

  summary.replaceChildren();
  rows.forEach(([label, value]) => {
    const [term, definition] = createSummaryRow(label, value);
    summary.append(term, definition);
  });

  document.querySelector("#message-preview").textContent = messageFor(data);
}

function renderStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("is-active", index === currentStep);
  });

  const progress = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = progress + "%";
  stepLabel.textContent = "Étape " + (currentStep + 1) + " sur " + steps.length;
  progressPurpose.textContent = steps[currentStep].dataset.purpose;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Enregistrer le brouillon" : "Continuer";
  formError.textContent = "";

  if (currentStep === steps.length - 1) {
    renderSummary();
  }

  steps[currentStep].querySelector("h2")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

form.addEventListener("change", (event) => {
  if (event.target.name === "triggers" && selectedValues("triggers").length > 2) {
    event.target.checked = false;
    formError.textContent = "Deux déclencheurs maximum.";
  } else {
    formError.textContent = "";
  }
  saveDraft();
});

form.addEventListener("input", saveDraft);

nextButton.addEventListener("click", () => {
  if (currentStep === steps.length - 1) {
    saveDraft();
    nextButton.textContent = "Brouillon enregistré";
    nextButton.disabled = true;
    return;
  }

  if (!validateStep()) return;
  saveDraft();
  currentStep += 1;
  renderStep();
});

backButton.addEventListener("click", () => {
  if (currentStep === 0) return;
  currentStep -= 1;
  renderStep();
});

resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("Effacer toutes les réponses de ce prototype ?");
  if (!confirmed) return;

  form.reset();
  localStorage.removeItem(storageKey);
  currentStep = 0;
  nextButton.disabled = false;
  renderStep();
});

restoreDraft();
renderStep();
