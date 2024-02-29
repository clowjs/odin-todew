import { generateId } from './utils.js';

export function Todo(
  initialTitle = '',
  initialDescription = '',
  initialDueDate = '',
  initialPriority = 'low',
  initialDone = false,
  id = generateId()
  ) {

  let title = initialTitle;
  let description = initialDescription;
  let dueDate = initialDueDate;
  let priority = initialPriority;
  let done = initialDone;
  
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getDone = () => done;

  const setTitle = (newTitle) => title = newTitle;
  const setDescription = (newDescription) => description = newDescription;
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const setPriority = (newPriority) => priority = newPriority;
  const setDone = (newDone) => done = newDone;

  const toSerializableObject = () => ({
    id,
    title,
    description,
    dueDate,
    priority,
    done,
  });

  return {
    getId, 
    getTitle, 
    getDescription, 
    getDueDate, 
    getPriority, 
    getDone, 
    setTitle, 
    setDescription, 
    setDueDate, 
    setPriority, 
    setDone, 
    toSerializableObject
  };
}