import { CreateTodew } from "../components/pages/CreateTodew.js";
import { CreateProject } from "../components/pages/CreateProject.js";
import { Todew } from "../components/pages/Todew.js";

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