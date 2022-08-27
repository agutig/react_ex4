import React from 'react'
import TaskManager from './taskManager';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'

function TaskManagerManager(){

    const [taskManagerList ,setTaskManagerList] = useState([]);

    function addTaskManager() {
        const taskManager = {
			key: uuidv4(),
			data: [],
            name: "Name",
        }
        setTaskManagerList([taskManager, ...taskManagerList])
    }

    return(
        <div className='taskManager'>
            <button onClick={() => addTaskManager()}>Add list</button>
            {taskManagerList.map( (taskManager) => <TaskManager list={taskManager} key={taskManager.key} refresh={setTaskManagerList}/>)}
        </div>
    );

}


export default TaskManagerManager