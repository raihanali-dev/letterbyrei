const clickNowBtn = document.getElementById("clickNowBtn");
const envelopeSection = document.querySelector(".envelope-section");
const flap = document.querySelector(".envelope-flap");
const paper = document.querySelector(".paper");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");

clickNowBtn.addEventListener("click", () => {
  envelopeSection.classList.remove("hidden");
  clickNowBtn.style.display = "none";
  envelopeSection.classList.add("animate-in");
});



openEnvelopeBtn.addEventListener("click", () => {
  console.log("Open Envelope clicked ✅");
  flap.classList.add("open");

  setTimeout(() => {
    paper.classList.add("show");
  }, 1000);

  openEnvelopeBtn.style.display = "none";
});

// 🎨 Random Balloon Colors
const balloons = document.querySelectorAll(".colored-balloon");

const balloonColors = [
  "#ff4b2b", "#aa5e17ff", "#7de442ff", "#fd79a8", "#f39c12", "#8e44ad",
  "#00cec9", "#a50969ff", "#6c5ce7", "#00b894", "#1428abff", "#e17055"
];

balloons.forEach(balloon => {
  const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.background = `radial-gradient(circle at 30% 30%, ${randomColor}, #00000022)`;
});

// 🌠 Random Shooting Stars Generator
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  const startTop = Math.random() * window.innerHeight * 0.5; // Top half only
  const startRight = Math.random() * window.innerWidth * 0.5; // Right half
  const duration = 1.2 + Math.random(); // 1.2s to 2.2s

  star.style.top = `${startTop}px`;
  star.style.right = `${startRight}px`;
  star.style.animationDuration = `${duration}s`;

  document.getElementById("shooting-stars-container").appendChild(star);

  // Remove after animation completes
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// Generate random shooting stars every 2–4 seconds
setInterval(() => {
  const shouldCreate = Math.random() > 0.4; // 60% chance
  if (shouldCreate) {
    createShootingStar();
  }
}, 2000);

