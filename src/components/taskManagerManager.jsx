import React from 'react'
import TaskManager from './taskManager';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'

function TaskManagerManager(){

    const [taskManagerList ,setTaskManagerList] = useState([]);

    function addTaskManager() {
        const taskManager = {
			id: uuidv4(),
			data: [],
            name: "Name",
        }
        setTaskManagerList([...taskManagerList ,taskManager])
    }



    return(
        <div className='taskManager'>
            <p>To do Lists!</p>
            <button onClick={() => addTaskManager()}>Add list</button>
            {taskManagerList.map( (taskManager) => <TaskManager list={taskManager} key={taskManager.id} db={taskManagerList} refresh={setTaskManagerList}/>)}
        </div>
    );

}


export default TaskManagerManager