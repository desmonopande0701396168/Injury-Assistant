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
     BUTTON HANDLING (SAFE VERSION)
  ========================= */
  const buttons = document.querySelectorAll("button[data-type]");

  if (buttons.length > 0) {
    buttons.forEach(btn => {

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
  }

  /* =========================
     SPORTS DATA
  ========================= */
  const data = {
    Football: {
      Sprain: {
        causes: ["Twisting during tackles","Sudden direction changes","Landing awkwardly","Uneven pitch surfaces","Weak ankle support","Fatigue","Poor warm-up","Direct contact","Overstretching ligaments","Slipping"],
        prevention: ["Strength training","Warm-up","Proper boots","Balance drills","Rest","Support gear","Stretching","Safe surfaces","Hydration","Recovery"],
        recovery: ["Rest","Ice","Compression","Elevation","Avoid play","Light rehab","Monitor swelling","Pain control","Gradual return","Medical check"]
      },

      Strain: {
        causes: ["Overrunning","Sprinting","Poor warm-up","Fatigue","Weak conditioning","Repetitive kicks","Bad technique","No rest","Dehydration","Heavy training"],
        prevention: ["Warm-up","Strength training","Hydration","Rest","Technique","Stretching","Avoid overload","Nutrition","Footwear","Recovery"],
        recovery: ["Rest","Ice","Stretching","Avoid activity","Massage","Hydration","Compression","Sleep","Gradual return","Doctor check"]
      },

      Dislocation: {
        causes: ["Tackles","Falls","Collisions","Overextension","Weak ligaments","Previous injury","Bad landing","Force impact","Fatigue","Direct blow"],
        prevention: ["Strength","Technique","Gear","Warm-up","Safe play","Flexibility","Balance","Controlled training","Rest","Medical check"],
        recovery: ["Do NOT relocate","Immobilize","Ice","Hospital","Rest","Physio","No movement","Brace","Follow advice","Slow return"]
      }
    }
  };

  /* =========================
     COPY TEMPLATE SPORTS
  ========================= */
  ["Rugby", "Volleyball", "Swimming", "Handball"].forEach(sport => {
    data[sport] = JSON.parse(JSON.stringify(data.Football));
  });

  /* =========================
     GET ADVICE BUTTON
  ========================= */
  const adviceBtn = document.getElementById("getAdviceBtn");

  if (adviceBtn) {
    adviceBtn.addEventListener("click", function () {

      const resultBox = document.getElementById("result");

      if (!selected.sport || !selected.injury || !selected.pain) {
        resultBox.innerHTML = "⚠️ Please select all options.";
        return;
      }

      const sportData = data[selected.sport];
      const info = sportData?.[selected.injury];

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
  }

  /* =========================
     BACKGROUND SLIDESHOW (STABLE FIX)
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
    document.body.style.transition = "background-image 1.5s ease-in-out";
    document.body.style.backgroundImage = `url('${images[bgIndex]}')`;

    bgIndex = (bgIndex + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 10000);

});
