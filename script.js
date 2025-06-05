let currentLevel = 0;

const questionDiv = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const feedbackDiv = document.getElementById("feedback");
const levelDiv = document.getElementById("level");

function loadLevel() {
  if (currentLevel < levels.length) {
    const level = levels[currentLevel];
    questionDiv.textContent = level.question;
    levelDiv.textContent = `Level ${currentLevel + 1}`;
    feedbackDiv.textContent = "";
    answerInput.value = "";
    answerInput.focus();
  } else {
    questionDiv.textContent = "🎉 ¡Felicidades! Has completado todos los niveles.";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    levelDiv.textContent = "";
  }
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  const correctAnswer = levels[currentLevel].answer;
  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "✅ ¡Correcto!";
    currentLevel++;
    setTimeout(loadLevel, 1000);
  } else {
    feedbackDiv.textContent = "❌ Incorrecto. Intenta de nuevo.";
  }
});

window.onload = loadLevel;
