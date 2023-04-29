const submitBtn = document.getElementById("save-result-btn");
const usernameInput = document.getElementById("username-input");

const sendResultToBackend = async () => {
  const gameResults = {
    username: usernameInput.value,
    user_time: finalTime
  };
  const sendResults = new Data("/index.php/ajax/save-game-results", gameResults);
  await sendResults.sendToPhpAsForm();

  document.location.reload();
};

const checkInput = () => {
  const username = usernameInput.value;

  if (username !== "" && typeof finalTime !== "undefined") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
};

submitBtn.addEventListener("click", sendResultToBackend);
usernameInput.addEventListener("input", checkInput);
