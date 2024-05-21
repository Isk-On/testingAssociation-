const nav = document.querySelector(".header-menu");

window.addEventListener("scroll", function () {
  window.scrollY > 100 || this.window.innerWidth < 625
    ? (nav.style.backgroundColor = "#212529")
    : (nav.style.backgroundColor = "transparent");
});

const burger = document.body.querySelector(".burger-menu");

burger.addEventListener("click", function (e) {
  this.classList.toggle("active");
});

const chat_id = "786490978";
const botID = "bot6791570227:AAEfUo9Lm0DJwo-cAVjN6kTLHoix96gGnGE";
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

document.querySelector("#messageForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let text = "";
  for (let [key, value] of formData.entries()) {
    text += `${key}: ${value}\n`;
  }

  const sendMessage = await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text }),
  });
  e.target.reset();

  sendMessage.ok
    ? alert("Message Sent!")
    : alert("Message Failed to send :( " + (await sendMessage.text()));
});
