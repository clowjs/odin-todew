// import './Sidebar.css'

export function Sidebar(projects) {
  const sidebar = document.createElement('nav');
  sidebar.id = 'sidebar';

  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = 'ToDew';
  sidebar.appendChild(logo);

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
      const todoItem = document.createElement('a');
      todoItem.classList.add('project-todew');
      todoItem.textContent = todo.getTitle();
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