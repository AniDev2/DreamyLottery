const result = [];
const circles = document.getElementById("circles");

function losowanie() {
  if (result.length === 6) return;
  const wyniklosowania = Math.floor(Math.random() * 49 + 1);
  for (let i = 0; i < result.length; i++) {
    if (wyniklosowania === result[i]) {
      return losowanie();
    }
  } 
  const div = document.createElement("div");
  div.classList.add("blue-circle");
  div.textContent = wyniklosowania;
  circles.appendChild(div);
  result.push(wyniklosowania);
}

const button = document.querySelector("button");

button.addEventListener("click", losowanie);
