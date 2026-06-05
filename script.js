function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function getAdvice() {
  const sport = document.getElementById("sport").value;
  const injury = document.getElementById("injuryType").value;
  const pain = document.getElementById("pain").value;

  if (!sport || !injury) {
    document.getElementById("result").innerHTML =
      "⚠️ Please select both sport and injury type.";
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Advice Result</h3>
    <p><b>Sport:</b> ${sport}</p>
    <p><b>Injury:</b> ${injury}</p>
    <p><b>Pain Level:</b> ${pain}/10</p>

    <hr/>

    <h4>Recovery Tips</h4>
    <ul>
      <li>Rest the affected area</li>
      <li>Apply ice for swelling</li>
      <li>Do light stretching</li>
      <li>Hydrate well</li>
      <li>See a professional if pain persists</li>
    </ul>
  `;
}
