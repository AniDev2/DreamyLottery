const result = [];
const circles = document.getElementById("circles");

function lottery() {
  if (result.length === 6) return;
  const drawResult = Math.floor(Math.random() * 49 + 1);
  for (let i = 0; i < result.length; i++) {
    if (drawResult === result[i]) {
      return lottery();
    }
  } 
  const div = document.createElement("div");
  div.classList.add("num-circle");
  div.textContent = drawResult;
  circles.appendChild(div);
  result.push(drawResult);
}

const button = document.querySelector("button");

button.addEventListener("click", lottery);
