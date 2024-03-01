// import './Todew.css'

import { renderContainer } from '../../controllers/renderControllers.js';
import { removeTodoFromProject } from '../../controllers/todoControllers.js';

export function Todew(todo) {
  console.log(`Rendering Todew for ${todo.getId()}`);

  const main = document.createElement('main');
  main.id = 'content';
  main.classList.add('todew');

  const title = document.createElement('h1');
  title.textContent = todo.getTitle();
  main.appendChild(title);

  const details = document.createElement('div');
  details.classList.add('details');

  const description = document.createElement('div');
  description.classList.add('description');

  const descriptionTitle = document.createElement('h2');
  descriptionTitle.textContent = 'Description';
  description.appendChild(descriptionTitle);

  const descriptionText = document.createElement('textarea');
  descriptionText.textContent = todo.getDescription();
  description.appendChild(descriptionText);

  details.appendChild(description);

  const dueDate = document.createElement('div');
  dueDate.classList.add('due-date');

  const dueDateTitle = document.createElement('h2');
  dueDateTitle.textContent = 'Due Date';
  dueDate.appendChild(dueDateTitle);

  const dueDateText = document.createElement('p');
  dueDateText.textContent = todo.getDueDate();
  dueDate.appendChild(dueDateText);

  details.appendChild(dueDate);

  const priority = document.createElement('div');
  priority.classList.add('priority');

  const priorityTitle = document.createElement('h2');
  priorityTitle.textContent = 'Priority';
  priority.appendChild(priorityTitle);

  const priorityText = document.createElement('p');
  priorityText.textContent = todo.getPriority();
  priority.appendChild(priorityText);

  details.appendChild(priority);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    console.log(todo.getProjectId(), todo.getId());
    removeTodoFromProject(todo.getProjectId(), todo.getId());
    renderContainer();
  });
  details.appendChild(deleteButton);

  main.appendChild(details);

  return main;
}

{/* <main id="content">
  <h1>Project 1 > Task 1</h1>
  <div class="details">
    <div class="description">
      <h2>Description</h2>
      <textarea name="description" id="description" cols="150" rows="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
    </div>
    <div class="due-date">
      <h2>Due Date</h2>
      <p>27/02/2024</p>
    </div>
    <div class="priority">
      <h2>Priority</h2>
      <p>High</p>
    </div>
    <button class="delete">Delete</button>
  </div>
</main> */}