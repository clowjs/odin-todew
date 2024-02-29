//import './style.css'

import { Todo } from './Todo.js';
import { Project } from './Project.js';

import { Sidebar } from './components/Sidebar.js';
import { Todew } from './components/pages/Todew.js';
import { Home } from './components/pages/Home.js';
import { CreateProject } from './components/pages/CreateProject.js';
import { CreateTodew } from './components/pages/CreateTodew.js';

import { loadProjects } from './controllers/todoControllers.js';


let projects = loadProjects();

const container = document.getElementById('container');
container.appendChild(Sidebar(projects));

if (projects.length > 0) {
  const project = projects[0];

  if (project.getTodos().length === 0) {
    container.appendChild(CreateTodew(project));
  } else {
    container.appendChild(Todew(project.getTodos()[0]));
  }
} else {
  container.appendChild(Home());
}

import {addProject, saveProjects, addTodoToProject} from './controllers/todoControllers.js';

addProject('Test Project');

console.log(`Projects coming from localstorage: ${loadProjects()}`);