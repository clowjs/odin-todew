//import './style.css'

import { renderContainer } from './controllers/renderControllers.js';
import { loadProjects } from './controllers/todoControllers.js';

renderContainer();

const projects = loadProjects();



console.log(`From index.js:`)

projects.forEach(project => {
  console.log(`Project: ${project.getTitle()} (${project.getId()})`);
  project.getTodos().forEach(todo => {
    console.log(`Todo: ${todo.getTitle()} (${todo.getId()})`);
  });
});