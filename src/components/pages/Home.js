import './Home.css';

import { renderCreateProject } from '../../controllers/renderControllers.js';

export function Home() {
  const main = document.createElement('main');
  main.id = 'content';
  main.classList.add('home');

  const title = document.createElement('h1');
  title.textContent = 'Welcome to ToDew!';
  main.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'ToDew is a simple to-do list application that allows you to create projects and tasks to help you stay organized. Get started by creating your first project!';
  main.appendChild(description);

  const button = document.createElement('button');
  button.textContent = 'Create Project';
  button.type = 'button';
  button.addEventListener('click', () => renderCreateProject());
  main.appendChild(button);

  return main;
}