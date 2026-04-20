document.addEventListener("DOMContentLoaded", function () {

let selected = {
  sport: "",
  injury: "",
  pain: ""
};

/* CLICK SYSTEM */
document.querySelectorAll("button[data-type]").forEach(btn => {
  btn.addEventListener("click", function () {

    let type = this.dataset.type;
    let value = this.dataset.value;

    selected[type] = value;

    document.querySelectorAll(`button[data-type="${type}"]`)
      .forEach(b => b.classList.remove("active"));

    this.classList.add("active");
  });
});

/* =========================
   FULL UPDATED MEDICAL DATA
   (USING YOUR CONTENT)
========================= */

const data = {

  Football: {
    Sprain: {
      cause: [
        "Twisting ankle during running or tackles",
        "Sudden stops and direction changes",
        "Landing awkwardly after jumps",
        "Collisions with other players",
        "Impact from ball hitting joints"
      ],
      recovery: [
        "Rest and immobilize the joint",
        "Ice packs for swelling",
        "Compression wraps",
        "Elevate the limb",
        "Seek medical assessment if severe"
      ]
    },

    Strain: {
      cause: [
        "Overuse of leg muscles during running and kicking",
        "Poor warm-up routines",
        "Playing through fatigue",
        "Repetitive sprinting and kicking",
        "Sudden acceleration or deceleration"
      ],
      recovery: [
        "Rest and avoid strenuous activity",
        "Ice and pain relievers",
        "Gentle stretching exercises",
        "Proper warm-up",
        "Gradual return to play"
      ]
    },

    Dislocation: {
      cause: [
        "High-impact tackles",
        "Falls or awkward landings",
        "Collisions with opponents",
        "Forceful twisting injuries",
        "Sudden impacts during play"
      ],
      recovery: [
        "Do NOT attempt to realign",
        "Immobilize joint",
        "Seek emergency medical care",
        "Ice to reduce swelling",
        "Physiotherapy rehabilitation"
      ]
    }
  },

  Rugby: {
    Sprain: {
      cause: [
        "Ligament overstretching during tackles",
        "Twisting ankle on uneven ground",
        "Landing awkwardly",
        "Collisions causing joint twisting",
        "Sudden directional changes"
      ],
      recovery: [
        "Rest and immobilize joint",
        "Ice packs",
        "Compression wraps",
        "Elevate limb",
        "Medical assessment if severe"
      ]
    },

    Strain: {
      cause: [
        "Overexertion during contact",
        "Rapid acceleration/deceleration",
        "Poor warm-up",
        "Repetitive tackling",
        "Fatigue"
      ],
      recovery: [
        "Rest muscle",
        "Gentle stretching",
        "Ice for pain",
        "Pain medication if needed",
        "Gradual return"
      ]
    },

    Dislocation: {
      cause: [
        "High-impact tackles",
        "Falls during contact",
        "Joint displacement collisions",
        "Forceful twisting",
        "Scrum impacts"
      ],
      recovery: [
        "Do NOT realign",
        "Immobilize",
        "Emergency care",
        "Ice application",
        "Physiotherapy"
      ]
    }
  },

  Volleyball: {
    Sprain: {
      cause: [
        "Bad landing after jumps",
        "Twisting ankle during movement",
        "Player collisions",
        "Sudden direction changes",
        "Impact during play"
      ],
      recovery: [
        "Rest and immobilize",
        "Ice application",
        "Compression and elevation",
        "Gentle stretching",
        "Medical check if severe"
      ]
    },

    Strain: {
      cause: [
        "Repetitive spiking",
        "Muscle overuse",
        "Poor warm-up",
        "Fatigue",
        "Jump overload"
      ],
      recovery: [
        "Rest",
        "Ice",
        "Light stretching",
        "Strengthening",
        "Proper warm-up"
      ]
    },

    Dislocation: {
      cause: [
        "Falling on arm",
        "Player collision",
        "Ball impact",
        "Twisting during jump",
        "Awkward landing"
      ],
      recovery: [
        "Do NOT reposition",
        "Immobilize",
        "Urgent medical care",
        "Ice area",
        "Physiotherapy"
      ]
    }
  },

  Swimming: {
    Sprain: {
      cause: [
        "Overextending joints during strokes",
        "Repetitive movement stress",
        "Slips outside pool",
        "Wall impact",
        "Poor technique"
      ],
      recovery: [
        "Rest joint",
        "Ice therapy",
        "Compression",
        "Gentle stretching",
        "Medical advice"
      ]
    },

    Strain: {
      cause: [
        "Repetitive shoulder movement",
        "Overtraining",
        "Poor technique",
        "Fatigue",
        "No warm-up"
      ],
      recovery: [
        "Rest",
        "Ice",
        "Physio exercises",
        "Warm-up improvement",
        "Gradual return"
      ]
    },

    Dislocation: {
      cause: [
        "Slips outside pool",
        "Poolside falls",
        "Collisions",
        "Training accidents",
        "Awkward landings"
      ],
      recovery: [
        "Immobilize",
        "Emergency care",
        "Ice application",
        "Medical reduction",
        "Rehab therapy"
      ]
    }
  },

  Handball: {
    Sprain: {
      cause: [
        "Rapid movements",
        "Jump landings",
        "Collisions",
        "Ball impact",
        "Sudden direction changes"
      ],
      recovery: [
        "Rest joint",
        "Ice",
        "Compression",
        "Gentle movement",
        "Medical check"
      ]
    },

    Strain: {
      cause: [
        "Overuse of arm muscles",
        "Repetitive throwing",
        "Fatigue",
        "Poor warm-up",
        "Explosive movements"
      ],
      recovery: [
        "Rest",
        "Ice",
        "Anti-inflammatory meds",
        "Stretching",
        "Warm-up routine"
      ]
    },

    Dislocation: {
      cause: [
        "Tackles",
        "Falls",
        "Ball impact",
        "Twisting injury",
        "Awkward landings"
      ],
      recovery: [
        "Do NOT realign",
        "Immobilize",
        "Emergency care",
        "Ice",
        "Rehab"
      ]
    }
  }
};

/* =========================
   DISPLAY RESULT
========================= */

document.getElementById("getAdviceBtn").addEventListener("click", function () {

  if (!selected.sport || !selected.injury || !selected.pain) {
    document.getElementById("result").innerHTML =
      "⚠️ Please select all options.";
    return;
  }

  let info = data[selected.sport][selected.injury];

  let output = `
    <img src="${info.image}">
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

  output += `<p style="text-align:center; font-size:12px; color:gray;">Created by Christopher Opande</p>`;

  document.getElementById("result").innerHTML = output;
});

});