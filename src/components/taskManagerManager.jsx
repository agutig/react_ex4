import React from 'react'
import TaskManager from './taskManager';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'

function TaskManagerManager(){

    const [taskManagerList ,setTaskManagerList] = useState([]);

    function addTaskManager() {
        const taskManager = {
			key: uuidv4(),
			data: []
        }
        setTaskManagerList([taskManager, ...taskManagerList])
    }

    return(
        <div className='taskManager'>
            <button>Add list</button>
            {taskManagerList.map( (taskManager) => <TaskManager/>)}
            <TaskManager/>
        </div>
    );

}


export default TaskManagerManager