import Todo from '@/component/main/Todo';
import React, { useEffect } from 'react';
import { createTask, getAllTasks, deleteTask } from '../api/hello';

function Main() {
  return <Todo />;
}

export default Main;
