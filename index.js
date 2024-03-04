const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();

}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  getMousePos(e)
});

