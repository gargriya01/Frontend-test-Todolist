// Explanation:

// The JavaScript code starts by getting references to various HTML elements using their IDs. These elements include the todo input text box, the add button, the todo list (which is an unordered list), and the total tasks element.

// Next, we define a counter variable to keep track of the number of tasks in the list. This will be used to update the total tasks count.

// The createTodoItem() function is responsible for creating a new todo item when the user clicks the add button. It first gets the value from the input text box and trims any leading or trailing whitespace. If the input is empty, the function simply returns without doing anything.

// If the input has a value, the function proceeds to create a new list item (<li> element) using the createElement() method. Inside this list item, we create the necessary elements for the todo item: a checkbox, a label to display the task, and a delete button.

// We attach event listeners to the checkbox and the delete button. The checkbox's listener is responsible for toggling the completion status of the task. When the checkbox is checked, we add a CSS class called "completed" to the label element to visually indicate that the task is completed. When the checkbox is unchecked, we remove the "completed" class.

// The delete button's listener is responsible for removing the todo item from the list. When the delete button is clicked, we access its parent node (the list item) and remove it from the todo list using the removeChild() method. We also decrement the task counter and update the total tasks count.

// The updateTotalTasks() function is used to update the text content of the total tasks element with the current count of tasks.

// Finally, we add event listeners for the add button and the Enter key press in the input text box. When the add button is clicked or the Enter key is pressed, the createTodoItem() function is called to create a new todo item.


// Get HTML elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const totalTasks = document.getElementById('total-tasks');

// Initialize task counter
let counter = 0;

// Function to create a new todo item
function createTodoItem() {
  // Get input value and trim whitespace
  const task = todoInput.value.trim();

  // If input is empty, do nothing
  if (task === '') {
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleCompletion);

  // Create task label
  const label = document.createElement('label');
  label.textContent = task;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', deleteTodoItem);

  // Append elements to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteBtn);

  // Append list item to the todo list
  todoList.appendChild(listItem);

  // Increment task counter
  counter++;

  // Update total tasks count
  updateTotalTasks();

  // Clear the input
  todoInput.value = '';
}

// Function to toggle completion of a task
function toggleCompletion(event) {
  const checkbox = event.target;
  const listItem = checkbox.parentNode;
  const label = listItem.querySelector('label');

  if (checkbox.checked) {
    label.classList.add('completed');
  } else {
    label.classList.remove('completed');
  }
}

// Function to delete a todo item
function deleteTodoItem(event) {
  const deleteBtn = event.target;
  const listItem = deleteBtn.parentNode;

  // Remove the list item from the todo list
  todoList.removeChild(listItem);

  // Decrement task counter
  counter--;

  // Update total tasks count
  updateTotalTasks();
}

// Function to update the total tasks count
function updateTotalTasks() {
  totalTasks.textContent = `Total tasks: ${counter}`;
}

// Event listener for the add button
addBtn.addEventListener('click', createTodoItem);

// Event listener for the Enter key press
todoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    createTodoItem();
  }
});
