import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, GETALLTASKS, CLEARCOMPETE_TASK } from '../actions/types';

// Get Task Reducer
const initialState = { loading: false, tasks: { personal: [], professional: [] }, error: '' };
export const GetAllTasks = (state = initialState, action) => {
  switch (action.type) {
    case GETALLTASKS:
      const tasks = action.payload;

      // Separate the tasks into personal and professional based on task_type
      const personalTasks = tasks.filter((task) => task.task_type === 'personal');
      const professionalTasks = tasks.filter((task) => task.task_type === 'professional');

      return {
        ...state,
        tasks: {
          personal: personalTasks,
          professional: professionalTasks,
        },
      };

    case DELETE_TASK:
      const { delete_task, taskType } = action.payload;

      // Determine the tab based on the 'taskType' property in the payload
      const tab = taskType === 'personal' ? 'personal' : 'professional';

      // Filter out the task with the specified ID from the corresponding tab
      const updatedTasks = state.tasks[tab].filter((task) => task.id != delete_task);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [tab]: updatedTasks,
        },
      };

    case ADD_TASK:
      // Determine the tab based on the 'taskType' property in the payload
      const addTab = action.payload.taskType === 'personal' ? 'personal' : 'professional';
      // Generate an id based on the length of the current tasks array
      // Create a new task object with the provided properties and is_completed set to false
      const newTask = {
        ...action.payload.add_task,
      };

      // Create a new array with the added task
      const newTasks = [...state.tasks[addTab], newTask];

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [addTab]: newTasks,
        },
      };
    case COMPLETE_TASK:
      const { id, type, is_complete } = action.payload;

      // Determine the tab based on the 'taskType' property in the payload
      const updateTab = type === 'personal' ? 'personal' : 'professional';

      // Find the task with the specified ID in the corresponding tab
      const updatedTaskIndex = state.tasks[updateTab].findIndex((task) => task.id == id);

      if (updatedTaskIndex !== -1) {
        // Create a copy of the tasks array to update the specific task
        const updatedTasks = [...state.tasks[updateTab]];

        // Update the is_completed property of the task
        updatedTasks[updatedTaskIndex].is_complete = !is_complete;

        return {
          ...state,
          tasks: {
            ...state.tasks,
            [updateTab]: updatedTasks,
          },
        };
      }

      return state;

    case CLEARCOMPETE_TASK:
      // Determine the tab based on the 'clearType' property in the payload
      const clearTab = action.payload.type === 'personal' ? 'personal' : 'professional';

      // Filter out the completed tasks from the corresponding tab
      const remainingTasks = state.tasks[clearTab].filter((task) => !task.is_complete);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [clearTab]: remainingTasks,
        },
      };

    default:
      return state;
  }
};

// Delete Task Reducer
