document.addEventListener("DOMContentLoaded", function () {

  const loginBtn = document.getElementById("loginBtn");
  const modal = document.getElementById("loginModal");
  const submitLogin = document.getElementById("submitLogin");
  const appLocked = document.getElementById("appLocked");

  // LOCK APP INITIALLY
  appLocked.classList.add("locked");

  loginBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  submitLogin.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (!user || !pass) {
      alert("Fill all fields");
      return;
    }

    modal.classList.add("hidden");

    // UNLOCK APP
    appLocked.classList.remove("locked");

    alert("Login successful!");
  });

  /* BUTTON SYSTEM */
  let selected = { sport:"", injury:"", pain:"" };

  document.querySelectorAll("button[data-type]").forEach(btn => {
    btn.addEventListener("click", function () {
      selected[this.dataset.type] = this.dataset.value;

      document.querySelectorAll(`button[data-type="${this.dataset.type}"]`)
        .forEach(b => b.classList.remove("active"));

      this.classList.add("active");
    });
  });

  document.getElementById("getAdviceBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML =
      "Advice generated for " + selected.sport;
  });

});
