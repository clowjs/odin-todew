import { Project } from '../Project.js';
import { Todo } from '../Todo.js';

export function saveProjects(projects) {
  const serializableProjects = projects.map(project => project.toSerializableObject());

  localStorage.setItem('projects', JSON.stringify(serializableProjects));
}

export function loadProjects() {
  const projectsData = JSON.parse(localStorage.getItem('projects')) || [];

  return projectsData.map(data => {
    const project = Project(data.title, data.id);

    data.todos.forEach(todoData => {
      const todo = Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, todoData.done, todoData.projectId, todoData.id);
      project.addTodo(todo);
    });

    return project;
  });
}

export function addProject(projectName) {
  let savedProjects = loadProjects();

  let newProject = Project();
  newProject.setTitle(projectName);

  savedProjects.push(newProject);

  saveProjects(savedProjects);
}

export function addTodoToProject(projectId, todo) {
  let savedProjects = loadProjects();

  let project = savedProjects.find(p => p.getId() === projectId);

  project.addTodo(todo);

  saveProjects(savedProjects);
}

export function removeTodoFromProject(projectId, todoId) {
  let savedProjects = loadProjects();

  let project = savedProjects.find(p => p.getId() === projectId);

  project.removeTodo(todoId);

  saveProjects(savedProjects);
}

export function editTodoInProject(projectId, todo) {
  let savedProjects = loadProjects();

  let project = savedProjects.find(p => p.getId() === projectId);

  let todos = project.getTodos();
  let index = todos.findIndex(t => t.getId() === todo.getId());
  todos[index] = todo;

  saveProjects(savedProjects);
}