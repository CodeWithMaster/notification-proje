// access the buttons and notification
const success = document.querySelector(".success"),
  danger = document.querySelector(".danger"),
  warning = document.querySelector(".warning"),
  tryagain = document.querySelector(".tryagain"),
  notification = document.querySelector(".notification");

  // buttons eventListeners
success.addEventListener("click", () => {
  showMessage(
    "#33e113",
    "Success",
    "fa fa-check-square",
    "Success, hello and welcome to my site"
  );
});
danger.addEventListener("click", () => {
  showMessage(
    "#ee1818",
    "Danger",
    "fa fa-exclamation-triangle",
    "Danger! please clicked after 5 min!"
  );
});
warning.addEventListener("click", () => {
  showMessage(
    "#FFBB00",
    "Warning!",
    "fa fa-exclamation",
    "Warning!, please checked connection"
  );
});
tryagain.addEventListener("click", () => {
  showMessage(
    "#2c393f",
    "Try again!",
    "fa fa-bomb",
    "oh shit! data not founded, try again"
  );
});


// function show message box
function showMessage(color, title, iconClassName, message) {
  // access the progress timer element for showing a left over time
  const progressElement = notification.querySelector(
    ".notification-progress-time"
  );
  notification.classList.add("active");
  notification.style.background = color;
  notification.querySelector("h1").textContent = title;
  notification.querySelector("span").className = iconClassName;
  notification.querySelector("p").textContent = message;
  let progressTimer = 100;
  // set interval for message timer
  let timer = setInterval(() => {
    progressTimer--;
    progressElement.style.width = progressTimer + "%";
    if (progressTimer == 0) {
      clearInterval(timer);
      notification.classList.remove("active");
      progressElement.style.width = 100 + "%";
    }
  }, 50);
}
