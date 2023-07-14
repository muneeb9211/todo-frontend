// TabsComponent.js
import getAllTask, {
  ClearCompletedTask,
  addTaskAction,
  completeTaskAction,
  deleteTaskAction,
} from '@/redux/actions/TodoActions';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenericComponent from './GenericComponent';
const { TabPane } = Tabs;

const TabsComponent = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [task, setTask] = useState('');
  const [taskType, setTaskType] = useState('personal');

  const dispatch = useDispatch();

  useEffect(() => {
    // this api for geting all task
    dispatch(getAllTask());
  }, []);

  // this api for add task
  const handleTabChange = (key) => {
    if (key === '1') {
      setTaskType('personal');
    } else if (key === '2') {
      setTaskType('professional');
    }

    // Update the taskType state or use it as needed
  };

  const handleAddButtonClick = () => {
    let params = {
      task_name: task,
      task_type: taskType,
    };
    dispatch(addTaskAction(params));
    setTask('');
  };

  // this  code for delete task

  const deleteTask = (id, taskType) => {
    dispatch(deleteTaskAction(id, taskType));
  };

  // this for complete the  task
  const { tasks } = useSelector((state) => state.get_All_Tasks);

  const handleImageClick = (id, type, is_complete) => {
    dispatch(completeTaskAction(id, type, is_complete));
  };

  const handleClearCompeleteTask = (type) => {
    dispatch(ClearCompletedTask(type));
  };

  return (
    <Tabs
      defaultActiveKey="1"
      style={{ width: '100%', backgroundColor: 'white' }}
      tabBarStyle={{ backgroundColor: '#F3F3F3' }}
      onChange={(key) => handleTabChange(key)}
    >
      {/* first tab  */}
      <TabPane tab="Personal" key="1">
        <GenericComponent
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          task={task}
          setTask={setTask}
          handleImageClick={handleImageClick}
          handleAddButtonClick={handleAddButtonClick}
          personalTasks={tasks.personal}
          deleteTask={deleteTask}
          handleClearCompeleteTask={handleClearCompeleteTask}
          TaksType="personal"
        />
      </TabPane>

      {/* second tab  */}
      <TabPane tab="Professional" key="2">
        <GenericComponent
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          task={task}
          setTask={setTask}
          handleImageClick={handleImageClick}
          handleAddButtonClick={handleAddButtonClick}
          personalTasks={tasks.professional}
          deleteTask={deleteTask}
          handleClearCompeleteTask={handleClearCompeleteTask}
          TaksType="professional"
        />
      </TabPane>
    </Tabs>
  );
};

export default TabsComponent;
