import './style.css'

let projects = [];

{/* <main>
  <h1>Project 1 > Task 1</h1>
  <div class="details">
    <div class="description">
      <h2>Description</h2>
      <textarea name="description" id="description" cols="150" rows="10">Titulo</textarea>
    </div>
    <div class="due-date">
      <h2>Due Date</h2>
      <p>27/02/2024</p>
    </div>
    <div class="priority">
      <h2>Priority</h2>
      <p>High</p>
    </div>
    <button class="delete">Delete</button>
  </div>
</main> */}

function ProjectComponent(project) {
  const main = document.createElement('main');

  const title = document.createElement('h1');
  title.textContent = project.getTitle();
  main.appendChild(title);
  
  const details = document.createElement('div');
  details.classList.add('details');

  const description = document.createElement('div');
  description.classList.add('description');

  const descriptionTitle = document.createElement('h2');
  descriptionTitle.textContent = 'Description';
  description.appendChild(descriptionTitle);

  const descriptionText = document.createElement('textarea');
  descriptionText.textContent = project.getDescription();

  

  return projectDiv;

}

function Todo() {
  let title;
  let description;
  let dueDate;
  let priority;
  
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const setTitle = (newTitle) => title = newTitle;
  const setDescription = (newDescription) => description = newDescription;
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const setPriority = (newPriority) => priority = newPriority;

  return {getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority};
}

function Project() {
  let title
  let todos = [];

  const getTitle = () => title;
  const getTodos = () => todos;

  const setTitle = (newTitle) => title = newTitle;
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todo) => todos = todos.filter((t) => t !== todo);

  return {getTitle, getTodos, setTitle, addTodo, removeTodo};
}