import { combineReducers } from 'redux';
import { GetAllTasks } from './reducers/TodoReducer';

const rootReducer = combineReducers({
  get_All_Tasks: GetAllTasks,
});

export default rootReducer;
