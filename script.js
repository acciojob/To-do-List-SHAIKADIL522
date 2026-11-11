//your code here
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;       // block empty submission

  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  input.value = "";              // clear input
});
