// PAGE NAVIGATION
function showPage(pageId) {
  let pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// SLIDESHOW
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slideImage").src = images[index];
}, 3000);

// INJURY DATABASE
const data = {
  Football: {
    Strain: {
      causes: ["Overstretching", "Poor warm-up", "Fatigue", "Sudden sprint", "Muscle imbalance"],
      prevention: ["Proper warm-up", "Stretching", "Strength training", "Rest", "Hydration"],
      recovery: ["Ice therapy", "Rest", "Physiotherapy", "Light stretching", "Massage"]
    }
  }
};

// DEFAULT CONTENT FOR ALL SPORTS (simplified reusable structure)
function generateList(title, items) {
  return `<h3>${title}</h3><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

// ADVICE FUNCTION
function getAdvice() {
  let sport = document.getElementById("sportSelect").value;
  let injury = document.getElementById("injurySelect").value;
  let pain = document.getElementById("painLevel").value;

  const base = {
    causes: [
      "Overuse of muscles",
      "Poor technique",
      "Lack of warm-up",
      "Fatigue",
      "Contact impact"
    ],
    prevention: [
      "Proper training",
      "Warm-up before activity",
      "Strength conditioning",
      "Rest and recovery",
      "Correct technique"
    ],
    recovery: [
      "Rest",
      "Ice application",
      "Physiotherapy",
      "Gradual return",
      "Medical check-up"
    ]
  };

  document.getElementById("resultBox").innerHTML = `
    <h2>${sport} - ${injury}</h2>
    <p><b>Pain Level:</b> ${pain}/10</p>

    ${generateList("Causes", base.causes)}
    ${generateList("Prevention", base.prevention)}
    ${generateList("Recovery", base.recovery)}
  `;
}

// LOGIN (simple front-end)
function loginUser(event) {
  event.preventDefault();
  document.getElementById("loginMsg").innerText =
    "Login successful (demo mode - no backend connected)";
}
