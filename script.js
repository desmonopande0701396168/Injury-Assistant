function getRehab() {
  const sport = document.getElementById("sport").value;
  const injury = document.getElementById("injury").value;
  const level = document.getElementById("level").value;

  let phase1 = [];
  let phase2 = [];
  let phase3 = [];
  let time = "";

  if (level === "Mild") {
    time = "1–2 weeks";
    phase1 = ["Rest", "Ice", "Light stretching"];
    phase2 = ["Mobility exercises", "Light strength work"];
    phase3 = ["Return to training gradually"];
  }

  if (level === "Moderate") {
    time = "2–4 weeks";
    phase1 = ["Rest", "Ice", "Compression", "Physio"];
    phase2 = ["Strength training", "Balance work"];
    phase3 = ["Controlled sport drills"];
  }

  if (level === "Severe") {
    time = "4–8+ weeks";
    phase1 = ["Medical treatment", "Immobilization", "Pain control"];
    phase2 = ["Rehabilitation therapy", "Light movement"];
    phase3 = ["Progressive sport training"];
  }

  document.getElementById("result").innerHTML = `
    <h2>${sport} - ${injury}</h2>

    <h3>Estimated Recovery Time</h3>
    <p>${time}</p>

    <h3>Phase 1</h3>
    <ul>${phase1.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Phase 2</h3>
    <ul>${phase2.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Phase 3</h3>
    <ul>${phase3.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
}
