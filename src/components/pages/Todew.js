// import './Todew.css'

import { renderContainer, renderTodew } from '../../controllers/renderControllers.js';
import { editTodoInProject, removeTodoFromProject } from '../../controllers/todoControllers.js';

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
  descriptionText.id = 'description';
  description.appendChild(descriptionText);

  details.appendChild(description);

  const dueDate = document.createElement('div');
  dueDate.classList.add('due-date');

  const dueDateTitle = document.createElement('h2');
  dueDateTitle.textContent = 'Due Date';
  dueDate.appendChild(dueDateTitle);

  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due-date';
  dueDateInput.value = todo.getDueDate();
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  dueDateInput.setAttribute('min', today);

  dueDate.appendChild(dueDateInput);

  details.appendChild(dueDate);

  const priority = document.createElement('div');
  priority.classList.add('priority');

  const priorityTitle = document.createElement('h2');
  priorityTitle.textContent = 'Priority';
  priority.appendChild(priorityTitle);

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  const options = ['Low', 'Medium', 'High'];
  options.forEach(optionValue => {
    const option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionValue;
    prioritySelect.appendChild(option);
  });
  prioritySelect.value = todo.getPriority();
  priority.appendChild(prioritySelect);

  details.appendChild(priority);

  const saveButton = document.createElement('button');
  saveButton.classList.add('save');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', () => {
    todo.setTitle(title.textContent);
    todo.setDescription(descriptionText.value);
    todo.setDueDate(dueDateInput.value);
    todo.setPriority(prioritySelect.value);
    editTodoInProject(todo.getProjectId(), todo);
    renderTodew(todo);
  });
  details.appendChild(saveButton);

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