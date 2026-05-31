document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     USER SELECTION STATE
  ========================= */
  let selected = {
    sport: "",
    injury: "",
    pain: ""
  };

  /* =========================
     🔐 LOGIN SYSTEM (ONLY ADDITION)
  ========================= */
  let isLoggedIn = false;

  const loginBtn = document.getElementById("loginBtn");
  const modal = document.getElementById("loginModal");
  const submitLogin = document.getElementById("submitLogin");

  if (loginBtn && modal && submitLogin) {

    loginBtn.addEventListener("click", function () {
      modal.classList.remove("hidden");
    });

    submitLogin.addEventListener("click", function () {

      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (!user || !pass) {
        alert("Please fill in all fields");
        return;
      }

      isLoggedIn = true;
      modal.classList.add("hidden");

      alert("Login successful!");
    });

  }

  /* =========================
     INJURY DEFINITIONS
  ========================= */
  const definitions = {
    Sprain:
      "A sprain is an injury to ligaments caused by twisting or overstretching of a joint.",

    Strain:
      "A strain is an injury to muscles or tendons caused by overuse or overstretching.",

    Dislocation:
      "A dislocation happens when a bone is forced out of its normal joint position."
  };

  /* =========================
     BUTTON HANDLING (UNCHANGED)
  ========================= */
  document.querySelectorAll("button[data-type]").forEach(btn => {

    btn.addEventListener("click", function () {

      const type = this.dataset.type;
      const value = this.dataset.value;

      selected[type] = value;

      document.querySelectorAll(`button[data-type="${type}"]`)
        .forEach(b => b.classList.remove("active"));

      this.classList.add("active");

      if (type === "injury") {
        const box = document.getElementById("definitionBox");

        if (box) {
          box.innerHTML = `
            <h3>${value}</h3>
            <p>${definitions[value]}</p>
          `;
        }
      }

    });

  });

  /* =========================
     SPORTS DATA (UNCHANGED)
  ========================= */
  const data = {

    Football: {

      Sprain: {
        causes: [
          "Twisting during tackles",
          "Sudden direction changes",
          "Landing awkwardly",
          "Uneven pitch surfaces",
          "Weak ankle support",
          "Fatigue during match",
          "Poor warm-up",
          "Direct contact injuries",
          "Overstretching ligaments",
          "Slipping while running"
        ],
        prevention: [
          "Strengthen leg muscles",
          "Proper warm-up before games",
          "Wear football boots with grip",
          "Improve balance training",
          "Avoid overtraining",
          "Use ankle support if needed",
          "Stretch regularly",
          "Train on safe surfaces",
          "Stay hydrated",
          "Rest when tired"
        ],
        recovery: [
          "Rest immediately",
          "Apply ice regularly",
          "Use compression wrap",
          "Elevate leg",
          "Avoid playing early",
          "Light rehab exercises",
          "Monitor swelling",
          "Use pain relief if needed",
          "Return gradually",
          "Seek medical help if severe"
        ]
      },

      Strain: {
        causes: [
          "Overrunning muscles",
          "Sudden sprinting",
          "Poor warm-up",
          "Muscle fatigue",
          "Weak conditioning",
          "Repetitive kicks",
          "Incorrect technique",
          "Lack of rest",
          "Dehydration",
          "Heavy training load"
        ],
        prevention: [
          "Warm up properly",
          "Strength training",
          "Hydration",
          "Rest between matches",
          "Proper technique",
          "Stretching routines",
          "Avoid overtraining",
          "Good nutrition",
          "Correct footwear",
          "Recovery sessions"
        ],
        recovery: [
          "Rest muscles",
          "Ice treatment",
          "Gentle stretching",
          "Avoid heavy activity",
          "Massage lightly",
          "Hydration",
          "Compression support",
          "Sleep well",
          "Gradual return",
          "Medical check if needed"
        ]
      },

      Dislocation: {
        causes: [
          "Hard tackles",
          "Falls on joints",
          "High impact collisions",
          "Overextension",
          "Weak ligaments",
          "Previous injury",
          "Improper landing",
          "Sudden force",
          "Fatigue",
          "Direct blow"
        ],
        prevention: [
          "Strength training",
          "Proper technique",
          "Protective gear",
          "Warm-up",
          "Avoid risky tackles",
          "Flexibility training",
          "Balance drills",
          "Safe play habits",
          "Gradual training",
          "Medical checks"
        ],
        recovery: [
          "Do NOT relocate joint",
          "Immobilize immediately",
          "Apply ice",
          "Go to hospital",
          "Rest completely",
          "Physiotherapy",
          "Avoid movement",
          "Support brace",
          "Follow doctor advice",
          "Slow return to sport"
        ]
      }
    },

    Rugby: {},
    Volleyball: {},
    Swimming: {},
    Handball: {}
  };

  function copyTemplate() {
    ["Rugby", "Volleyball", "Swimming", "Handball"]
      .forEach(sport => {
        data[sport] = JSON.parse(JSON.stringify(data.Football));
      });
  }

  copyTemplate();

  /* =========================
     GET ADVICE BUTTON (UNCHANGED)
  ========================= */
  document.getElementById("getAdviceBtn").addEventListener("click", function () {

    if (!isLoggedIn) {
      alert("Please sign in first");
      return;
    }

    const resultBox = document.getElementById("result");

    if (!selected.sport || !selected.injury || !selected.pain) {
      resultBox.innerHTML = "⚠️ Please select all options.";
      return;
    }

    const sportData = data[selected.sport];
    const info = sportData[selected.injury];

    if (!info) {
      resultBox.innerHTML = "No injury information found.";
      return;
    }

    let output = `
      <h2>${selected.sport} ${selected.injury} Advice</h2>

      <h3>Causes</h3>
      <ul>${info.causes.map(c => `<li>${c}</li>`).join("")}</ul>

      <h3>Prevention</h3>
      <ul>${info.prevention.map(p => `<li>${p}</li>`).join("")}</ul>

      <h3>Recovery</h3>
      <ul>${info.recovery.map(r => `<li>${r}</li>`).join("")}</ul>
    `;

    if (selected.pain === "Severe") {
      output += `<p style="color:#F97316;">⚠️ Severe: Seek medical attention.</p>`;
    } else if (selected.pain === "Moderate") {
      output += `<p style="color:#FACC15;">⚠️ Moderate: Rest and monitor closely.</p>`;
    } else {
      output += `<p style="color:#22C55E;">✔️ Mild: Home care is fine.</p>`;
    }

    resultBox.innerHTML = output;

  });

});
