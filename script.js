const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <span class="task-text">${taskText}</span>
      ${taskDate ? `<span class="task-date">(Due: ${taskDate})</span>` : ""}
    </div>
    <button class="deleteBtn">X</button>
  `;

  // Mark as completed when clicked on task text
  li.querySelector(".task-text").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  // Reset inputs
  taskInput.value = "";
  dateInput.value = "";
});

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
