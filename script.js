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
    Sprain:
      "A sprain is an injury to ligaments caused by twisting or overstretching of a joint.",

    Strain:
      "A strain is an injury to muscles or tendons caused by overuse or overstretching.",

    Dislocation:
      "A dislocation happens when a bone is forced out of its normal joint position."
  };

  /* =========================
     BUTTON CLICK SYSTEM
  ========================= */
  document.querySelectorAll("button[data-type]").forEach(btn => {

    btn.addEventListener("click", function () {

      const type = this.dataset.type;
      const value = this.dataset.value;

      selected[type] = value;

      document
        .querySelectorAll(`button[data-type="${type}"]`)
        .forEach(b => b.classList.remove("active"));

      this.classList.add("active");

      /* SHOW DEFINITIONS */
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
     MEDICAL DATA
  ========================= */
  const injuryData = {

    Sprain: {

      causes: [
        "Twisting injuries during sports or exercise.",
        "Awkward landings after jumping.",
        "Walking or running on uneven surfaces.",
        "Repetitive stress weakening ligaments.",
        "Sudden stops or changes in direction.",
        "Direct blows to joints.",
        "Lack of supportive footwear.",
        "Weak ligaments causing instability.",
        "Fatigue reducing joint support.",
        "Poor movement technique."
      ],

      prevention: [
        "Strengthen muscles around joints.",
        "Use proper technique during activity.",
        "Wear supportive footwear.",
        "Use taping or braces when needed.",
        "Improve balance and coordination.",
        "Warm up before exercise.",
        "Avoid slippery or uneven surfaces.",
        "Increase training intensity gradually.",
        "Rest when pain occurs.",
        "Maintain flexibility and strength."
      ],

      recovery: [
        "Rest the injured area immediately.",
        "Apply ice every 2–3 hours.",
        "Use compression bandages.",
        "Elevate the injured limb.",
        "Avoid intense physical activity.",
        "Use supportive braces if needed.",
        "Perform gentle rehabilitation exercises.",
        "Drink enough water during recovery.",
        "Return to sports gradually.",
        "Seek medical attention if swelling worsens."
      ]
    },

    Strain: {

      causes: [
        "Overexertion during physical activity.",
        "Sudden jerking movements.",
        "Poor exercise technique.",
        "Inadequate warm-up before sports.",
        "Repetitive muscle movements.",
        "Weak muscle conditioning.",
        "Muscle fatigue.",
        "Improper sports equipment.",
        "Running on uneven terrain.",
        "Previous muscle injuries."
      ],

      prevention: [
        "Warm up properly before activity.",
        "Increase exercise intensity gradually.",
        "Strengthen muscles regularly.",
        "Use correct exercise techniques.",
        "Stretch to improve flexibility.",
        "Allow muscles enough rest.",
        "Use supportive sports equipment.",
        "Stay hydrated.",
        "Avoid overtraining.",
        "Correct muscular imbalances."
      ],

      recovery: [
        "Rest strained muscles.",
        "Apply ice to reduce swelling.",
        "Use gentle stretching after pain decreases.",
        "Avoid heavy lifting initially.",
        "Use compression if swelling occurs.",
        "Massage muscles carefully.",
        "Stay hydrated during healing.",
        "Sleep properly for recovery.",
        "Gradually return to activity.",
        "Seek medical care for severe pain."
      ]
    },

    Dislocation: {

      causes: [
        "Trauma from falls or collisions.",
        "High-impact sports injuries.",
        "Accidental trauma from crashes or falls.",
        "Weak ligaments around joints.",
        "Previous dislocations increasing risk.",
        "Overextension of joints.",
        "Repetitive stress on joints.",
        "Improper sports technique.",
        "Age-related joint degeneration.",
        "Genetic connective tissue disorders."
      ],

      prevention: [
        "Strengthen muscles around joints.",
        "Use proper movement techniques.",
        "Wear protective gear.",
        "Avoid repetitive overuse.",
        "Maintain flexibility safely.",
        "Address ligament weakness early.",
        "Keep environments safe from hazards.",
        "Increase activity gradually.",
        "Warm up and cool down properly.",
        "Attend regular medical check-ups."
      ],

      recovery: [
        "Do not force the joint back into place.",
        "Immobilize the injured joint.",
        "Apply ice to reduce swelling.",
        "Seek emergency medical help.",
        "Rest the affected area.",
        "Follow rehabilitation exercises carefully.",
        "Avoid intense activity during healing.",
        "Use supportive braces if advised.",
        "Attend physiotherapy if necessary.",
        "Return to sports gradually."
      ]
    }

  };

  /* =========================
     GET ADVICE BUTTON
  ========================= */
  document
    .getElementById("getAdviceBtn")
    .addEventListener("click", function () {

      if (
        !selected.sport ||
        !selected.injury ||
        !selected.pain
      ) {

        document.getElementById("result").innerHTML =
          "⚠️ Please select all options.";

        return;
      }

      const info = injuryData[selected.injury];

      let output = `

        <h2>${selected.sport} - ${selected.injury}</h2>

        <h3>Common Causes</h3>
        <ul>
          ${info.causes.map(c => `<li>${c}</li>`).join("")}
        </ul>

        <h3>Prevention Tips</h3>
        <ul>
          ${info.prevention.map(p => `<li>${p}</li>`).join("")}
        </ul>

        <h3>Recovery Advice</h3>
        <ul>
          ${info.recovery.map(r => `<li>${r}</li>`).join("")}
        </ul>
      `;

      /* =========================
         PAIN LEVEL ADVICE
      ========================= */
      if (selected.pain === "Severe") {

        output += `
          <p style="color:red;">
            ⚠️ Severe Pain:
            Seek immediate medical attention.
            Avoid movement and stop sports activity immediately.
          </p>
        `;

      } else if (selected.pain === "Moderate") {

        output += `
          <p style="color:orange;">
            ⚠️ Moderate Pain:
            Rest carefully, monitor swelling,
            and avoid intense movement.
          </p>
        `;

      } else {

        output += `
          <p style="color:lightgreen;">
            ✔️ Mild Pain:
            Home care, light rest,
            and gradual recovery are recommended.
          </p>
        `;
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

  document.body.style.backgroundImage =
    `url('${images[bgIndex]}')`;

  bgIndex = (bgIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 3000);
