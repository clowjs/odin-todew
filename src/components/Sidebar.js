// import './Sidebar.css'

import { renderTodew, renderCreateProject, renderCreateTodew } from "../controllers/renderControllers.js";
import { loadProjects } from "../controllers/todoControllers.js";

export function Sidebar() {
  const projects = loadProjects();

  const sidebar = document.createElement('nav');
  sidebar.id = 'sidebar';

  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = 'ToDew';
  sidebar.appendChild(logo);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const createProjectButton = document.createElement('button');
  createProjectButton.textContent = '+ Project';
  createProjectButton.type = 'button';
  createProjectButton.addEventListener('click', () => {
    renderCreateProject();
  });
  buttonsContainer.appendChild(createProjectButton);

  const createTodewButton = document.createElement('button');
  createTodewButton.textContent = '+ ToDew';
  createTodewButton.type = 'button';
  createTodewButton.addEventListener('click', () => {
    renderCreateTodew();
  });
  buttonsContainer.appendChild(createTodewButton);

  sidebar.appendChild(buttonsContainer);

  const projectsTitle = document.createElement('h3');
  projectsTitle.textContent = 'Projects';
  sidebar.appendChild(projectsTitle);

  const projectsList = document.createElement('ul');
  projectsList.id = 'projects';

  projects.forEach(project => {
    const projectItem = document.createElement('li');

    const projectTitle = document.createElement('span');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.getTitle();
    projectItem.appendChild(projectTitle);

    const projectTodos = document.createElement('ul');
    projectTodos.classList.add('project');

    project.getTodos().forEach(todo => {
      if (todo.getDone()) return;

      const todoItem = document.createElement('li');
      todoItem.classList.add('project-todew');
      todoItem.textContent = `- ${todo.getTitle()}`;

      todoItem.addEventListener('click', () => {
        renderTodew(todo);
      });

      projectTodos.appendChild(todoItem);
    });

    projectItem.appendChild(projectTodos);
    projectsList.appendChild(projectItem);
  });


  sidebar.appendChild(projectsList);

  return sidebar;
}

{/* <nav id="sidebar">
  <h1 class="logo">ToDew</h1>
  <h3>Projects</h3>
  <ul id="projects">
    <li>
      <span class="project-title">Project 1</span>
      <ul class="project">
        <li class="project-todew">Task 1</li>
        <li class="project-todew">Task 2</li>
        <li class="project-todew">Task 3</li>
      </ul>
    </li>
    <li>
      <span class="project-title">Project 2</span>
      <ul class="project">
        <li class="project-todew">Task 1</li>
        <li class="project-todew">Task 2</li>
        <li class="project-todew">Task 3</li>
      </ul>
    </li>
    <li>
      <span class="project-title">Project 3</span>
      <ul class="project">
        <li class="project-todew">Task 1</li>
        <li class="project-todew">Task 2</li>
        <li class="project-todew">Task 3</li>
      </ul>
    </li>
  </ul>
</nav> */}