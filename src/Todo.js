import { generateId } from './utils.js';

export function Todo(
  initialTitle = '',
  initialDescription = '',
  initialDueDate = '',
  initialPriority = 'low',
  initialDone = false,
  initialProjectId = '',
  id = generateId()
  ) {

  let title = initialTitle;
  let description = initialDescription;
  let dueDate = initialDueDate;
  let priority = initialPriority;
  let done = initialDone;
  let projectId = initialProjectId;
  
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getDone = () => done;
  const getProjectId = () => projectId;

  const setTitle = (newTitle) => title = newTitle;
  const setDescription = (newDescription) => description = newDescription;
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const setPriority = (newPriority) => priority = newPriority;
  const setDone = (newDone) => done = newDone;
  const setProjectId = (newProjectId) => projectId = newProjectId;

  const toSerializableObject = () => ({
    id,
    title,
    description,
    dueDate,
    priority,
    done,
    projectId
  });

  return {
    getId, 
    getTitle, 
    getDescription, 
    getDueDate, 
    getPriority, 
    getDone, 
    getProjectId,
    setTitle, 
    setDescription, 
    setDueDate, 
    setPriority, 
    setDone, 
    setProjectId,
    toSerializableObject
  };
}