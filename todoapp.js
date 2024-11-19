// Select DOM elements
const toDo = document.getElementById('toDo'); // Get the input field where the user types a task
const taskList = document.getElementById('taskList');    // Get the <ul> element where tasks will be displayed
const addBtn = document.getElementById('addBtn'); // Get the "Add Task" button

// Add an event listener to the "Add Task" button
// This listens for a click event and triggers the addTask function when clicked
addBtn.addEventListener('click', addTask);
// Function to add a new task to the list
function addTask() {
    // Get the value from the input field and trim any extra whitespace around it
    const taskText = toDo.value;

    // Check if the input is empty (user didn't type anything)
    if (taskText === "") {
        // Show an alert if the user tries to add an empty task
        alert("Please enter a task!");
        return; // Exit the function early if the input is empty
    }

    // Create a new <li> element that represents the task by calling createTaskElement
    const li = createTaskElement(taskText);
    
    // Append the newly created task (<li>) to the task list (the <ul> element)
    taskList.appendChild(li);
    
    // Clear the input field so the user can enter another task if needed
    toDo.value = "";
}
// Function to create a task element (the <li>) with text and buttons (Edit, Delete)
function createTaskElement(taskText) {
    // Create the <li> element that will represent a single task in the list
    const li = document.createElement('li');
    
    // Create a <span> element to hold the task's text
    const span = document.createElement('span');
    span.textContent = taskText; // Set the task text inside the <span>
    
    // Create the "Delete" button that will allow users to delete the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'; // Set the text on the delete button
    deleteBtn.addEventListener('click', deleteTask); // Add an event listener for the delete button
    
    // Create the "Edit" button that will allow users to edit the task's text
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'; // Set the text on the edit button
    editBtn.addEventListener('click', editTask); // Add an event listener for the edit button

    // Append the task text, edit button, and delete button to the <li> element
    li.appendChild(span);   // Adds the task text to the list item
    li.appendChild(editBtn); // Adds the "Edit" button to the list item
    li.appendChild(deleteBtn); // Adds the "Delete" button to the list item

    // Return the <li> element, which now contains the task and the buttons
    return li;
}
// Function to delete a task when the "Delete" button is clicked
function deleteTask(event) {
    // 'event.target' is the clicked delete button, we use 'parentElement' to get the <li> that contains the button
    const taskItem = event.target.parentElement;
    
    // Remove the task (the <li>) from the task list
    taskItem.remove(); // This completely removes the task from the DOM
}
// Function to edit a task when the "Edit" button is clicked
function editTask(event) {
    // 'event.target' refers to the clicked edit button, 'parentElement' gives the <li> element (task item)
    const taskItem = event.target.parentElement;

    // Retrieve the task text from the <span> inside the <li>
    const taskText = taskItem.querySelector('span').textContent;

    // Set the input field to the current task text so the user can modify it
    toDo.value = taskText;

    // Remove the task item from the list since it's being edited
    taskItem.remove();

    // Change the button text from "Add Task" to "Save Task"
    addBtn.textContent = "Save Task";

    // Remove the current "Add Task" event listener (to prevent adding a new task)
    addBtn.removeEventListener('click', addTask);

    // Add a new event listener to the "Save Task" button to save the edited task
    addBtn.addEventListener('click', function saveTask() {
        // Get the new text entered by the user in the input field
        const updatedTaskText = toDo.value;

        // If the user entered some new text (not empty), update the task
        if (updatedTaskText !== "") {
            const updatedTask = createTaskElement(updatedTaskText); // Create the updated task element
            taskList.appendChild(updatedTask); // Add the updated task to the list
        }

        // Reset the "Add Task" button to its original state
        addBtn.textContent = "Add Task"; // Change the button text back to "Add Task"
        addBtn.removeEventListener('click', saveTask); // Remove the saveTask listener
        addBtn.addEventListener('click', addTask); // Re-attach the original addTask listener

        // Clear the input field after saving the task
        toDo.value = "";
    });
}
