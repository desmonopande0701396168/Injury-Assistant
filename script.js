document.addEventListener("DOMContentLoaded", function () {

  let selected = {
    sport: "",
    injury: "",
    pain: ""
  };

  /* =========================
     DEFINITIONS
  ========================= */
  const definitions = {
    Sprain: "A sprain is an injury to ligaments caused by twisting or overstretching of a joint.",
    Strain: "A strain is an injury to muscles or tendons caused by overuse or overstretching.",
    Dislocation: "A dislocation happens when a bone is forced out of its normal joint position."
  };

  /* =========================
     BUTTON SYSTEM
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
        box.innerHTML = `
          <h3>${value}</h3>
          <p>${definitions[value]}</p>
        `;
      }

    });

  });

  /* =========================
     FULL SPORTS DATA (COMPLETE)
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

  /* =========================
     AUTO COPY FOOTBALL TEMPLATE
  ========================= */
  function copyTemplate() {
    ["Rugby", "Volleyball", "Swimming", "Handball"].forEach(sport => {
      data[sport] = JSON.parse(JSON.stringify(data.Football));
    });
  }

  copyTemplate();

  /* =========================
     RESULT BUTTON
  ========================= */
  document.getElementById("getAdviceBtn").addEventListener("click", function () {

    if (!selected.sport || !selected.injury || !selected.pain) {
      document.getElementById("result").innerHTML =
        "⚠️ Please select all options.";
      return;
    }

    const sportData = data[selected.sport];
    const info = sportData[selected.injury];

    let output = `
      <h2>${selected.sport} - ${selected.injury}</h2>

      <h3>Causes</h3>
      <ul>${info.causes.map(c => `<li>${c}</li>`).join("")}</ul>

      <h3>Prevention</h3>
      <ul>${info.prevention.map(p => `<li>${p}</li>`).join("")}</ul>

      <h3>Recovery</h3>
      <ul>${info.recovery.map(r => `<li>${r}</li>`).join("")}</ul>
    `;

    if (selected.pain === "Severe") {
      output += `<p style="color:red;">⚠️ Severe: Seek immediate medical attention.</p>`;
    } else if (selected.pain === "Moderate") {
      output += `<p style="color:orange;">⚠️ Moderate: Rest and monitor closely.</p>`;
    } else {
      output += `<p style="color:lightgreen;">✔️ Mild: Home care is fine.</p>`;
    }

    document.getElementById("result").innerHTML = output;
  });

});

/* =========================
   BACKGROUND SLIDESHOW
========================= */
const images = [
  "myphoto1.jpg",
  "myphoto2.jpg",
  "myphoto3.jpg",
  "myphoto4.jpg"
];

let bgIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);
