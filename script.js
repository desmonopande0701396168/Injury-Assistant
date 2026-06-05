const data = {
  Football: {
    Strain: {
      pain: "Moderate",
      causes: ["Overstretching", "Sprinting", "Fatigue", "No warm-up", "Muscle overload"],
      prevention: ["Warm-up", "Stretching", "Hydration", "Rest", "Strength training"],
      recovery: ["Rest", "Ice", "Physio", "Light rehab", "Gradual return"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Twisting", "Tackles", "Bad landing", "Weak ligaments", "Impact"],
      prevention: ["Balance training", "Warm-up", "Proper shoes", "Strength", "Avoid rough play"],
      recovery: ["RICE", "Bandage", "Rest", "Physio", "Rebuild strength"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Collision", "Fall", "Hard tackle", "Joint weakness", "Force impact"],
      prevention: ["Strength training", "Protective gear", "Safe play", "Warm-up", "Conditioning"],
      recovery: ["Medical reset", "Immobilization", "Physio", "Pain control", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Impact", "Falls", "Collision", "Weak bones", "Stress injury"],
      prevention: ["Bone health", "Protection", "Safe training", "Nutrition", "Avoid impact"],
      recovery: ["Casting", "Rest", "Surgery", "Physio", "Slow return"]
    }
  },

  Volleyball: {
    Strain: {
      pain: "Moderate",
      causes: ["Jumping", "Overuse", "Fatigue", "Bad landing", "No warm-up"],
      prevention: ["Stretching", "Warm-up", "Rest", "Strength", "Hydration"],
      recovery: ["Rest", "Ice", "Physio", "Recovery training", "Return slowly"]
    },
    Sprain: {
      pain: "Moderate",
      causes: ["Landing wrong", "Collision", "Twist", "Weak ankle", "Impact"],
      prevention: ["Balance training", "Proper shoes", "Warm-up", "Strength", "Safe landing"],
      recovery: ["RICE", "Bandage", "Rest", "Physio", "Rehab"]
    },
    Dislocation: {
      pain: "Severe",
      causes: ["Fall", "Impact", "Collision", "Weak joint", "Bad landing"],
      prevention: ["Strength training", "Technique", "Protection", "Warm-up", "Control"],
      recovery: ["Hospital care", "Immobilization", "Physio", "Rest", "Rehab"]
    },
    Fracture: {
      pain: "Severe",
      causes: ["Fall", "Impact", "Collision", "Weak bones", "Landing wrong"],
      prevention: ["Bone strength", "Safety", "Training", "Nutrition", "Protection"],
      recovery: ["Cast", "Rest", "Surgery", "Physio", "Recovery"]
    }
  },

  Handball: {
    Strain: { pain:"Moderate", causes:["Throwing","Overuse","Fatigue","No warm-up","Repetition"], prevention:["Warm-up","Rest","Strength","Stretching","Hydration"], recovery:["Rest","Ice","Physio","Light training","Recovery"] },
    Sprain: { pain:"Moderate", causes:["Twist","Fall","Collision","Weak ligaments","Impact"], prevention:["Balance","Warm-up","Strength","Shoes","Control"], recovery:["RICE","Bandage","Rest","Physio","Rehab"] },
    Dislocation: { pain:"Severe", causes:["Collision","Fall","Impact","Weak joint","Force"], prevention:["Strength","Technique","Warm-up","Protection","Conditioning"], recovery:["Hospital","Immobilization","Physio","Rest","Rehab"] },
    Fracture: { pain:"Severe", causes:["Impact","Fall","Collision","Weak bone","Stress"], prevention:["Bone health","Protection","Training","Nutrition","Safety"], recovery:["Cast","Rest","Surgery","Physio","Slow return"] }
  },

  Swimming: {
    Strain: { pain:"Mild", causes:["Overuse","Bad technique","Fatigue","Cold muscles","Long training"], prevention:["Warm-up","Technique","Rest","Stretching","Hydration"], recovery:["Rest","Light swim","Physio","Massage","Recovery"] },
    Sprain: { pain:"Mild", causes:["Slip","Fall","Twist","Weak joints","Fatigue"], prevention:["Dry area","Warm-up","Strength","Balance","Care"], recovery:["RICE","Rest","Physio","Light activity","Recovery"] },
    Dislocation: { pain:"Severe", causes:["Accident","Fall","Impact","Weak joint","Bad dive"], prevention:["Strength","Technique","Warm-up","Safety","Control"], recovery:["Hospital","Immobilization","Physio","Rest","Rehab"] },
    Fracture: { pain:"Severe", causes:["Fall","Impact","Accident","Weak bones","Collision"], prevention:["Safety","Bone health","Training","Protection","Care"], recovery:["Cast","Rest","Physio","Surgery","Recovery"] }
  },

  Rugby: {
    Strain: { pain:"Moderate", causes:["Tackle","Sprint","Fatigue","Overuse","No warm-up"], prevention:["Warm-up","Strength","Rest","Hydration","Stretching"], recovery:["Rest","Ice","Physio","Training","Recovery"] },
    Sprain: { pain:"Moderate", causes:["Tackle","Twist","Fall","Impact","Weak ligaments"], prevention:["Strength","Balance","Warm-up","Protection","Technique"], recovery:["RICE","Bandage","Rest","Physio","Return"] },
    Dislocation: { pain:"Severe", causes:["Collision","Tackle","Fall","Impact","Force"], prevention:["Strength","Protection","Warm-up","Safe play","Conditioning"], recovery:["Hospital","Immobilization","Physio","Rest","Rehab"] },
    Fracture: { pain:"Severe", causes:["Hard tackle","Impact","Fall","Weak bone","Collision"], prevention:["Bone health","Gear","Training","Nutrition","Safety"], recovery:["Cast","Rest","Surgery","Physio","Slow return"] }
  }
};

function getAdvice() {
  const sport = document.getElementById("sport").value;
  const injury = document.getElementById("injury").value;

  const info = data[sport][injury];

  document.getElementById("result").innerHTML =
  `<h3>${sport} - ${injury}</h3>
   <p><b>Pain:</b> ${info.pain}</p>
   <p><b>Causes:</b> ${info.causes.join(", ")}</p>
   <p><b>Prevention:</b> ${info.prevention.join(", ")}</p>
   <p><b>Recovery:</b> ${info.recovery.join(", ")}</p>`;
}
