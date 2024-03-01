import { CreateTodew } from "../components/pages/CreateTodew.js";
import { CreateProject } from "../components/pages/CreateProject.js";
import { Sidebar } from "../components/Sidebar.js";
import { Home } from "../components/pages/Home.js";
import { Todew } from "../components/pages/Todew.js";

import { loadProjects } from "./todoControllers.js";

export function renderTodew(todo) {
  const content = document.getElementById('content');
  content.replaceWith(Todew(todo));
}

export function renderCreateProject() {
  const content = document.getElementById('content');
  content.replaceWith(CreateProject());
}

export function renderCreateTodew() {
  const content = document.getElementById('content');
  content.replaceWith(CreateTodew());
}

export function renderContainer() {
  const projects = loadProjects();

  const container = document.getElementById('container');
  container.innerHTML = '';

  container.appendChild(Sidebar());

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

}