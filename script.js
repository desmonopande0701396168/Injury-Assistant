// Declare global variables at top
let isLoggedIn = false;
let selected = {
  sport: "",
  injury: "",
  pain: ""
};

document.addEventListener("DOMContentLoaded", () => {
  // Login system
  const loginBtn = document.getElementById("loginBtn");
  const modal = document.getElementById("loginModal");
  const submitLogin = document.getElementById("submitLogin");
  
  if (loginBtn && modal && submitLogin) {
    loginBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
    submitLogin.addEventListener("click", () => {
      const user = document.getElementById("username");
      const pass = document.getElementById("password");
      if (!user || !pass || !user.value || !pass.value) {
        alert("Please fill in all fields");
        return;
      }
      isLoggedIn = true; // update login status
      modal.classList.add("hidden");
      alert("Login successful!");
    });
  }

  // Handle "Sport", "Injury", "Pain" button clicks
  document.querySelectorAll("#sportBtn, #injuryBtn, #painBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle color for visual feedback
      if (btn.classList.contains("btn-blue")) {
        btn.classList.remove("btn-blue");
        btn.classList.add("btn-green");
      } else {
        btn.classList.remove("btn-green");
        btn.classList.add("btn-blue");
      }
    });
  });

  // Attach event handlers for options
  document.querySelectorAll("[data-type='sport']").forEach(btn => {
    btn.addEventListener("click", () => {
      selectOption(btn, "sport");
    });
  });
  document.querySelectorAll("[data-type='injury']").forEach(btn => {
    btn.addEventListener("click", () => {
      selectOption(btn, "injury");
    });
  });
  document.querySelectorAll("[data-type='pain']").forEach(btn => {
    btn.addEventListener("click", () => {
      selectOption(btn, "pain");
    });
  });

  // Main Action button toggle
  document.getElementById("mainBtn")?.addEventListener("click", () => {
    toggleMainButton();
  });

  // Get Advice button
  const adviceBtn = document.getElementById("getAdviceBtn");
  if (adviceBtn) {
    adviceBtn.addEventListener("click", () => {
      // Check login
      if (!isLoggedIn) {
        alert("Please sign in first");
        return;
      }
      // Check if options are selected
      const resultBox = document.getElementById("result");
      if (!selected.sport || !selected.injury || !selected.pain) {
        resultBox.innerHTML = "⚠️ Please select all options.";
        return;
      }
      // Show advice based on selections
      showAdvice(selected);
    });
  }

  // Function to handle option selection
  function selectOption(btn, type) {
    // Clear previous selections in the group
    document.querySelectorAll(`#${type}Options button`).forEach(b => b.classList.remove("selected"));
    // Highlight selected button
    btn.classList.add("selected");
    // Save selection
    selected[type] = btn.dataset.value;
  }

  // Advice display function
  function showAdvice({ sport, injury, pain }) {
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
      }
    };
    // Clone data for other sports
    ["Rugby", "Volleyball", "Swimming", "Handball"].forEach(s => {
      data[s] = JSON.parse(JSON.stringify(data.Football));
    });
    const sportData = data[sport];
    const info = sportData?.[injury];

    if (!info) {
      document.getElementById("result").innerHTML = "No injury information found.";
      return;
    }

    let html = `
      <h2>${sport} ${injury}</h2>
      <h3>Causes</h3>
      <ul>${info.causes.map(c => `<li>${c}</li>`).join("")}</ul>
      <h3>Prevention</h3>
      <ul>${info.prevention.map(p => `<li>${p}</li>`).join("")}</ul>
      <h3>Recovery</h3>
      <ul>${info.recovery.map(r => `<li>${r}</li>`).join("")}</ul>
    `;

    if (pain === "Severe") {
      html += `<p style="color:#F97316;">⚠️ Severe: Seek medical attention.</p>`;
    } else if (pain === "Moderate") {
      html += `<p style="color:#FACC15;">⚠️ Moderate: Rest and monitor closely.</p>`;
    } else {
      html += `<p style="color:#22C55E;">✔️ Mild: Home care is fine.</p>`;
    }

    document.getElementById("result").innerHTML = html;
  }

  // Background slideshow
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
    document.body.style.backgroundImage = `url('${images[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 10000);

  // Toggle main button color
  window.toggleMainButton = () => {
    const btn = document.getElementById("mainBtn");
    if (btn.classList.contains("btn-green")) {
      btn.classList.remove("btn-green");
      btn.classList.add("btn-red");
    } else {
      btn.classList.remove("btn-red");
      btn.classList.add("btn-green");
    }
  };

  // Function to style button selection
  window.selectOption = (btn, type) => {
    // Clear all in group
    document.querySelectorAll(`#${type}Options button`).forEach(b => b.classList.remove("selected"));
    // Add selected class
    btn.classList.add("selected");
    // Save selection
    selected[type] = btn.dataset.value;
  };
});
