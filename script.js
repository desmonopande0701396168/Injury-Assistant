const data = {
  Football: {
    Strain: {
      pain: "Moderate",
      causes: ["Overstretching", "Sprinting", "Fatigue", "No warm-up", "Poor technique"],
      prevention: ["Warm-up", "Stretching", "Hydration", "Rest", "Strength training"],
      recovery: ["Rest", "Ice", "Physio", "Light movement", "Gradual return"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Twisting ankle", "Tackles", "Bad landing", "Weak ligaments", "Uneven ground"],
      prevention: ["Ankle training", "Proper shoes", "Warm-up", "Balance training", "Avoid rough play"],
      recovery: ["RICE", "Bandage", "Elevation", "Rest", "Physio"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Collision", "Fall", "Hard tackle", "Weak joints", "Impact force"],
      prevention: ["Strength training", "Protective gear", "Safe tackling", "Warm-up", "Conditioning"],
      recovery: ["Hospital reduction", "Immobilization", "Physio", "Pain control", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["High impact", "Falls", "Collisions", "Weak bones", "Stress injury"],
      prevention: ["Bone health", "Protective gear", "Safe training", "Nutrition", "Avoid impact"],
      recovery: ["Casting", "Rest", "Surgery if needed", "Physio", "Slow return"]
    }
  },

  Volleyball: {
    Strain: {
      pain: "Moderate",
      causes: ["Jumping", "Overuse", "Bad landing", "Fatigue", "No warm-up"],
      prevention: ["Stretching", "Warm-up", "Rest", "Strength training", "Hydration"],
      recovery: ["Rest", "Ice", "Physio", "Light training", "Recovery exercises"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Landing wrong", "Collision", "Twist", "Weak ankle", "Hard impact"],
      prevention: ["Balance training", "Proper shoes", "Warm-up", "Strength", "Safe landing"],
      recovery: ["RICE", "Bandage", "Rest", "Physio", "Gradual return"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Fall", "Collision", "Block impact", "Weak joint", "Bad landing"],
      prevention: ["Strength training", "Technique", "Protective gear", "Warm-up", "Safe play"],
      recovery: ["Hospital reduction", "Immobilization", "Physio", "Rest", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Hard fall", "Collision", "Impact", "Weak bones", "Landing wrong"],
      prevention: ["Bone strength", "Protection", "Safe training", "Nutrition", "Avoid impact"],
      recovery: ["Cast", "Rest", "Physio", "Surgery if needed", "Slow recovery"]
    }
  },

  Handball: {
    Strain: {
      pain: "Moderate",
      causes: ["Throwing overload", "Muscle fatigue", "Poor warm-up", "Overuse", "Repetition"],
      prevention: ["Warm-up", "Rest", "Strength training", "Stretching", "Hydration"],
      recovery: ["Rest", "Ice", "Physio", "Light movement", "Gradual return"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Collision", "Twisting", "Bad landing", "Weak ligaments", "Fast movement"],
      prevention: ["Balance training", "Warm-up", "Proper shoes", "Strength", "Safe play"],
      recovery: ["RICE", "Bandage", "Rest", "Physio", "Recovery"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Fall", "Collision", "Hard impact", "Weak joints", "Forceful movement"],
      prevention: ["Strength training", "Technique", "Warm-up", "Protection", "Conditioning"],
      recovery: ["Hospital care", "Immobilization", "Physio", "Pain control", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Impact", "Fall", "Collision", "Weak bones", "High force"],
      prevention: ["Bone health", "Protective gear", "Safe training", "Nutrition", "Avoid impact"],
      recovery: ["Cast", "Rest", "Surgery", "Physio", "Slow recovery"]
    }
  },

  Swimming: {
    Strain: {
      pain: "Mild",
      causes: ["Overuse", "Bad technique", "Long training", "Fatigue", "Cold muscles"],
      prevention: ["Warm-up", "Proper technique", "Rest", "Stretching", "Hydration"],
      recovery: ["Rest", "Light swimming", "Physio", "Massage", "Gradual return"]
    },
    Sprain: {
      pain: "Mild",
      causes: ["Slip poolside", "Sudden movement", "Weak joints", "Improper landing", "Fatigue"],
      prevention: ["Dry surface care", "Warm-up", "Strength", "Balance", "Safe movement"],
      recovery: ["RICE", "Rest", "Physio", "Light activity", "Recovery"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Accident", "Fall", "Bad dive", "Impact", "Joint weakness"],
      prevention: ["Strength training", "Safe diving", "Warm-up", "Technique", "Conditioning"],
      recovery: ["Hospital care", "Immobilization", "Physio", "Rest", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Fall", "Pool accident", "Impact", "Weak bones", "Collision"],
      prevention: ["Safety training", "Bone health", "Proper technique", "Caution", "Protective care"],
      recovery: ["Cast", "Rest", "Physio", "Surgery", "Slow recovery"]
    }
  },

  Rugby: {
    Strain: {
      pain: "Moderate",
      causes: ["Tackling", "Sprinting", "Fatigue", "Overuse", "No warm-up"],
      prevention: ["Warm-up", "Strength training", "Rest", "Stretching", "Hydration"],
      recovery: ["Rest", "Ice", "Physio", "Light training", "Recovery"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Tackle", "Twist", "Fall", "Weak ligaments", "Impact"],
      prevention: ["Strength training", "Protective gear", "Warm-up", "Technique", "Balance"],
      recovery: ["RICE", "Bandage", "Rest", "Physio", "Return slowly"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Collision", "Tackle", "Fall", "Impact force", "Joint stress"],
      prevention: ["Strength training", "Safe tackling", "Warm-up", "Protection", "Conditioning"],
      recovery: ["Hospital reduction", "Immobilization", "Physio", "Pain control", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Hard tackle", "Collision", "Fall", "Impact", "Weak bones"],
      prevention: ["Bone strength", "Protective gear", "Safe play", "Nutrition", "Training"],
      recovery: ["Cast", "Rest", "Surgery", "Physio", "Slow return"]
    }
  }
};

function getAdvice() {
  const sport = document.getElementById("sport").value;
  const injury = document.getElementById("injury").value;

  const info = data[sport][injury];

  document.getElementById("result").innerHTML = `
    <h2>${sport} - ${injury}</h2>
    <h3>Pain Level: ${info.pain}</h3>

    <h3>Causes</h3>
    <ul>${info.causes.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Prevention</h3>
    <ul>${info.prevention.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Recovery</h3>
    <ul>${info.recovery.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
}
