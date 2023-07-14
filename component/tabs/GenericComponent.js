import { Button, Input } from 'antd';
import Image from 'next/image';
import React from 'react';

function GenericComponent({
  personalTasks,
  handleImageClick,
  task,
  isChecked,
  setIsChecked,
  setTask,
  handleAddButtonClick,
  deleteTask,
  TaksType,
  handleClearCompeleteTask,
}) {
  return (
    <div className="scroll">
      <div className="add-task">
        <div className="input">
          <Input
            className="custom-input"
            placeholder="What do you need to do?"
            style={{ background: ' transparent', border: 'none', outline: 'none', padding: '10px' }}
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="btn">
          <Button
            className="btn-shape"
            type="primary"
            style={{ borderRadius: '0px 50px 50px 0px' }}
            onClick={() => {
              handleAddButtonClick();
            }}
          >
            ADD
          </Button>
        </div>
      </div>

      <div className="data-bar">
        {personalTasks.map((checked, index) => (
          <React.Fragment key={index}>
            <div className="row">
              <Image
                src={checked.is_complete ? 'assets/images/check.svg' : 'assets/images/Radio button unchecked.svg'}
                height={64}
                width={64}
                className="check-box"
                onClick={() => handleImageClick(checked.id, checked.task_type, checked.is_complete)}
              />
              <p className={checked.is_complete == true ? 'task completed' : 'task'}>{checked.task_name}</p>
              <div className="delete-task">
                <Image
                  src="assets/images/Delete outline.svg"
                  height={32}
                  width={32}
                  onClick={() => {
                    deleteTask(checked.id, checked.task_type);
                  }}
                />
              </div>
            </div>
            <div className="heading-line">
              <hr className="line" />
            </div>
          </React.Fragment>
        ))}
        <div className="clear">
          <Image
            src="assets/images/Frame 7.svg"
            height={76}
            width={264}
            className="check-box"
            onClick={() => handleClearCompeleteTask(TaksType)}
          />
        </div>
      </div>
    </div>
  );
}

export default GenericComponent;
