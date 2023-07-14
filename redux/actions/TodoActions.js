import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, GETALLTASKS, CLEARCOMPETE_TASK } from './types';

// Get All Task Api

const todoTask = (task) => {
  return {
    type: GETALLTASKS,
    payload: task,
  };
};

let url = 'https://e857-182-178-136-111.ngrok-free.app';
const getAllTask = () => {
  return (dispatch) => {
    var axios = require('axios');
    var config = {
      method: 'GET',
      url: `${url}/tasks`,
      headers: { 'ngrok-skip-browser-warning': true },
    };
    axios(config)
      .then((response) => {
        dispatch(todoTask(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export default getAllTask;

// Delete Task Api

const todoDelete = (delete_task, taskType) => {
  return {
    type: DELETE_TASK,
    payload: { delete_task, taskType },
  };
};

export const deleteTaskAction = (id, taskType) => {
  return (dispatch) => {
    var axios = require('axios');
    var config = {
      method: 'DELETE',
      url: `${url}/tasks/delete/${id}`,
    };
    axios(config)
      .then((response) => {
        dispatch(todoDelete(id, taskType));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Add Task Api

const addTask = (add_task, taskType) => {
  return {
    type: ADD_TASK,
    payload: { add_task, taskType },
  };
};
export const addTaskAction = (params) => {
  return (dispatch) => {
    var axios = require('axios');
    var config = {
      method: 'POST',
      url: `${url}/tasks`,
      data: params,
    };
    axios(config)
      .then((response) => {
        dispatch(addTask(response.data, params.task_type));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Complete Task Api

const completeTask = (id, type, is_complete) => {
  return {
    type: COMPLETE_TASK,
    payload: { id, type, is_complete },
  };
};

export const completeTaskAction = (id, type, is_complete) => {
  return (dispatch) => {
    var axios = require('axios');
    var config = {
      method: 'PUT',
      url: `${url}/tasks/${id}/complete`,
    };
    axios(config)
      .then((response) => {
        dispatch(completeTask(id, type, is_complete));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const clearTasks = (type) => {
  return {
    type: CLEARCOMPETE_TASK,
    payload: { type },
  };
};
export const ClearCompletedTask = (type) => {
  return (dispatch) => {
    var axios = require('axios');
    var config = {
      method: 'DELETE',
      url: `${url}/tasks/clear-completed?task_type=${type}`,
    };
    axios(config)
      .then((response) => {
        dispatch(clearTasks(type));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
