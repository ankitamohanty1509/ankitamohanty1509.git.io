function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
  
    tabs.forEach(tab => tab.style.display = 'none');
    buttons.forEach(button => button.classList.remove('active'));
  
    document.getElementById(tabName).style.display = 'block';
    event.target.classList.add('active');
  }
  
  function addTask(tab) {
    const input = document.getElementById(`${tab}-input`);
    const list = document.getElementById(`${tab}-list`);
    const task = input.value.trim();
  
    if (task !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="task-text">${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>
      `;
      li.onclick = (e) => {
        if (e.target.className !== 'delete-btn') completeTask(li, list);
      };
      list.appendChild(li);
      input.value = '';
    }
  }
  
  function completeTask(taskElement, list) {
    const colors = ['#d4edda', '#f8d7da', '#fff3cd', '#cce5ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    taskElement.style.backgroundColor = randomColor;
  
    taskElement.classList.add('completed');
  
    // Reorder tasks: move completed task to the bottom
    const tasks = Array.from(list.children);
    const incompleteTasks = tasks.filter(task => !task.classList.contains('completed'));
    const completedTasks = tasks.filter(task => task.classList.contains('completed'));
  
    list.innerHTML = ''; // Clear the list
    incompleteTasks.forEach(task => list.appendChild(task));
    completedTasks.forEach(task => list.appendChild(task));
  }
  
  function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
  }
  