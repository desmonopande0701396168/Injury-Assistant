document.addEventListener("DOMContentLoaded", function () {

  let selected = {
    sport: "",
    injury: "",
    pain: ""
  };

  /* =========================
     DEFINITIONS (FIXED LOCATION)
  ========================= */
  const definitions = {
    Sprain: "A sprain is an injury to ligaments caused by twisting or overstretching of a joint.",
    Strain: "A strain is an injury to muscles or tendons caused by overuse or overstretching.",
    Dislocation: "A dislocation happens when a bone is forced out of its normal joint position."
  };

  /* =========================
     CLICK SYSTEM
  ========================= */
  document.querySelectorAll("button[data-type]").forEach(btn => {
    btn.addEventListener("click", function () {

      let type = this.dataset.type;
      let value = this.dataset.value;

      selected[type] = value;

      document.querySelectorAll(`button[data-type="${type}"]`)
        .forEach(b => b.classList.remove("active"));

      this.classList.add("active");

      /* SHOW DEFINITION ONLY FOR INJURY */
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
     MEDICAL DATA
  ========================= */
  const data = {
    Football: {
      Sprain: {
        cause: [
          "Twisting ankle during running or tackles",
          "Sudden stops and direction changes",
          "Landing awkwardly after jumps"
        ],
        recovery: [
          "Rest and ice",
          "Compression and elevation"
        ]
      },

      Strain: {
        cause: [
          "Overuse of muscles",
          "Poor warm-up"
        ],
        recovery: [
          "Rest and stretching",
          "Gradual return"
        ]
      },

      Dislocation: {
        cause: [
          "High-impact collision",
          "Falls"
        ],
        recovery: [
          "Do NOT realign",
          "Seek medical care"
        ]
      }
    }
  };

  /* =========================
     RESULT SYSTEM
  ========================= */
  document.getElementById("getAdviceBtn").addEventListener("click", function () {

    if (!selected.sport || !selected.injury || !selected.pain) {
      document.getElementById("result").innerHTML =
        "⚠️ Please select all options.";
      return;
    }

    let info = data[selected.sport][selected.injury];

    let output = `
      <h2>${selected.sport} - ${selected.injury}</h2>

      <h3>Cause</h3>
      <ul>${info.cause.map(c => `<li>${c}</li>`).join("")}</ul>

      <h3>Recovery</h3>
      <ul>${info.recovery.map(r => `<li>${r}</li>`).join("")}</ul>
    `;

    if (selected.pain === "Severe") {
      output += `<p style="color:red;">⚠️ Severe: Seek medical attention immediately.</p>`;
    } else if (selected.pain === "Moderate") {
      output += `<p style="color:orange;">⚠️ Moderate: Rest and monitor closely.</p>`;
    } else {
      output += `<p style="color:lightgreen;">✔️ Mild: Home care is fine.</p>`;
    }

    document.getElementById("result").innerHTML = output;
  });

});

/* =========================
   BACKGROUND SLIDESHOW (FIXED)
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