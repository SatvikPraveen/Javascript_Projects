import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <h1>JS Playground</h1>
  <button id="add-btn">Add random number</button>
  <p id="numbers">Numbers: []</p>
  <p id="sum">Sum: 0</p>
`;

const numbers = [];

const numbersEl = document.querySelector("#numbers");
const sumEl = document.querySelector("#sum");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10) + 1; // 1–10
  numbers.push(value);

  numbersEl.textContent = `Numbers: ${numbers.join(", ")}`;

  const total = numbers.reduce((acc, n) => acc + n, 0);
  sumEl.textContent = `Sum: ${total}`;
});
