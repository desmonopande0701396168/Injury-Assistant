document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LOGIN SYSTEM (NEW ADDITION ONLY)
  ========================= */
  const loginBtn = document.getElementById("loginBtn");
  const modal = document.getElementById("loginModal");
  const submitLogin = document.getElementById("submitLogin");

  const app = document.querySelector(".app");
  const about = document.querySelector("#about");
  const features = document.querySelector("#features");

  // LOCK APP INITIALLY
  function lockApp() {
    app.style.pointerEvents = "none";
    app.style.filter = "blur(5px)";
    about.style.pointerEvents = "none";
    features.style.pointerEvents = "none";
  }

  function unlockApp() {
    app.style.pointerEvents = "auto";
    app.style.filter = "none";
    about.style.pointerEvents = "auto";
    features.style.pointerEvents = "auto";
  }

  lockApp();

  loginBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  submitLogin.addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (!user || !pass) {
      alert("Please fill all fields");
      return;
    }

    modal.classList.add("hidden");
    unlockApp();
    alert("Login successful!");
  });

  /* =========================
     YOUR ORIGINAL CODE (UNCHANGED)
  ========================= */

  let selected = {
    sport: "",
    injury: "",
    pain: ""
  };

  const definitions = {
    Sprain:
      "A sprain is an injury to ligaments caused by twisting or overstretching of a joint.",

    Strain:
      "A strain is an injury to muscles or tendons caused by overuse or overstretching.",

    Dislocation:
      "A dislocation happens when a bone is forced out of its normal joint position."
  };

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
        box.innerHTML = `
          <h3>${value}</h3>
          <p>${definitions[value]}</p>
        `;
      }

    });

  });

  const data = {
    Football: {
      Sprain: {
        causes: ["Twisting","Landing wrong","Tackles","Fatigue","Weak support","Poor warm-up","Slipping","Overstretching","Impact","Uneven ground"],
        prevention: ["Warm-up","Strength training","Good boots","Hydration","Rest","Stretching","Balance","Recovery","Safe pitch","Avoid fatigue"],
        recovery: ["Rest","Ice","Compression","Elevation","Physio","No rush","Light rehab","Monitor swelling","Pain control","Gradual return"]
      },
      Strain: {
        causes: ["Overuse","Sprinting","Fatigue","Weak muscles","Bad technique","No rest","Heavy load","Dehydration","Repetition","Poor conditioning"],
        prevention: ["Warm-up","Strength","Rest","Hydration","Technique","Stretch","Nutrition","Recovery","Avoid overload","Sleep"],
        recovery: ["Rest","Ice","Stretching","Massage","Hydration","Compression","Sleep","Light exercise","Gradual return","Doctor check"]
      },
      Dislocation: {
        causes: ["Impact","Falls","Tackles","Overextension","Weak ligaments","Bad landing","Force","Previous injury","Fatigue","Collision"],
        prevention: ["Strength","Warm-up","Protective gear","Safe play","Balance","Flexibility","Training","Rest","Technique","Medical check"],
        recovery: ["Do not move","Immobilize","Ice","Hospital","Rest","Physio","Brace","No pressure","Follow advice","Slow recovery"]
      }
    }
  };

  ["Rugby","Volleyball","Swimming","Handball"].forEach(sport => {
    data[sport] = JSON.parse(JSON.stringify(data.Football));
  });

  document.getElementById("getAdviceBtn").addEventListener("click", function () {

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
      output += `<p style="color:#FACC15;">⚠️ Moderate: Rest and monitor.</p>`;
    } else {
      output += `<p style="color:#22C55E;">✔️ Mild: Home care is fine.</p>`;
    }

    resultBox.innerHTML = output;
  });

  /* =========================
     BACKGROUND SLIDESHOW (UNCHANGED)
  ========================= */

  const images = [
    "desmon1.jpg",
    "desmon2.jpg",
    "desmon3.jpg",
    "desmon4.jpg",
    "desmon5.jpg",
    "desmonlogo1.jpg"
  ];

  let bgIndex = 0;

  function changeBackground() {
    document.body.style.backgroundImage = `url('${images[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 10000);

});
