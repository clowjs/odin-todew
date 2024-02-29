import { generateId } from './utils.js';

export function Project(initialTitle = '', id = generateId()) {
  let title = initialTitle;
  let todos = [];

  const getId = () => id;
  const getTitle = () => title;
  const getTodos = () => todos;

  const setTitle = (newTitle) => title = newTitle;
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todo) => todos = todos.filter((t) => t !== todo);

  const toSerializableObject = () => ({
    id,
    title,
    todos: todos.map(todo => todo.toSerializableObject()),
  });

  return {
    getId,
    getTitle,
    getTodos,
    setTitle,
    addTodo,
    removeTodo,
    toSerializableObject
  };
}