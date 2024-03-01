import './CreateProject.css'

import { addProject } from '../../controllers/todoControllers.js';

import { renderContainer, renderCreateTodew } from '../../controllers/renderControllers.js';

export function CreateProject() {
  const main = document.createElement('main');
  main.id = 'content';
  main.classList.add('create-project');

  const title = document.createElement('h1');
  title.textContent = 'Create a new project';
  main.appendChild(title);

  const form = document.createElement('div');
  form.id = 'create-project-form';

  const nameLabel = document.createElement('h1');
  nameLabel.textContent = 'Title';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.id = 'project-name';
  nameInput.name = 'project-name';
  nameInput.type = 'text';
  nameInput.required = true;
  form.appendChild(nameInput);

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Create Project';
  submitButton.type = 'button';
  submitButton.addEventListener('click', () => {
    const projectName = document.getElementById('project-name').value;
    addProject(projectName);

    renderContainer();
    renderCreateTodew();
  });
  form.appendChild(submitButton);

  main.appendChild(form);

  return main;
}