// import './CreateTodew.css'

import { loadProjects } from '../../controllers/todoControllers.js';
import { renderCreateProject, renderTodew } from '../../controllers/renderControllers.js';

import { Todo } from '../../Todo.js';

import { addTodoToProject } from '../../controllers/todoControllers.js';

export function CreateTodew() {
  const projects = loadProjects();

  if (projects.length === 0) {
    return renderCreateProject();
  }

  const main = document.createElement('main');
  main.id = 'content';
  main.classList.add('create-todew');

  const title = document.createElement('h1');
  title.textContent = 'Create a New ToDew';
  main.appendChild(title);

  const form = document.createElement('form');
  form.id = 'create-todew-form';

  const projectLabel = document.createElement('label');
  projectLabel.htmlFor = 'project';
  projectLabel.textContent = 'Project';
  form.appendChild(projectLabel);

  const projectInput = document.createElement('select');
  projectInput.id = 'project';
  projectInput.name = 'project';

  projects.forEach(project => {
    const option = document.createElement('option');
    option.value = project.getId();
    option.textContent = project.getTitle();
    projectInput.appendChild(option);
  });
  form.appendChild(projectInput);

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = 'Title';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.id = 'title';
  nameInput.name = 'title';
  nameInput.type = 'text';
  nameInput.required = true;
  form.appendChild(nameInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.htmlFor = 'description';
  descriptionLabel.textContent = 'Description';
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'description';
  descriptionInput.name = 'description';
  descriptionInput.required = true;
  form.appendChild(descriptionInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = 'due-date';
  dueDateLabel.textContent = 'Due Date';
  form.appendChild(dueDateLabel);

  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'due-date';
  dueDateInput.name = 'due-date';
  dueDateInput.type = 'date';
  dueDateInput.required = true;
  form.appendChild(dueDateInput);

  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = 'priority';
  priorityLabel.textContent = 'Priority';
  form.appendChild(priorityLabel);

  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority';
  priorityInput.name = 'priority';

  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'Low';
  
  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'Medium';
  
  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.textContent = 'High';
  
  priorityInput.appendChild(lowOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(highOption);
  form.appendChild(priorityInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.textContent = 'Create ToDew';
  submitButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const newTodo = Todo();
    newTodo.setTitle(title);
    newTodo.setDescription(description);
    newTodo.setDueDate(dueDate);
    newTodo.setPriority(priority);
    newTodo.setDone(false);

    const selectedProjectId = document.getElementById('project').value;
    const selectedProject = projects.find(project => project.getId() === selectedProjectId);

    addTodoToProject(selectedProject.getId(), newTodo);
    renderTodew(newTodo);
  });
  form.appendChild(submitButton);

  main.appendChild(form);
  
  return main;
}