import React from 'react'
import TaskManager from './taskManager';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'
import '../styles/taskManagerManager.css'

function TaskManagerManager(){

    const [taskManagerList ,setTaskManagerList] = useState([]);

    function addTaskManager() {
        const taskManager = {
			id: uuidv4(),
			data: [],
            name: "List Name",
        }
        setTaskManagerList([...taskManagerList ,taskManager])
    }



    return(
        <div className='taskManagerManager'>
            <div className='TMMTitle'>
                <p className='TMMTitleText'>Lists</p>
                <button className='TMMTitleButton' onClick={() => addTaskManager()}>+</button>
            </div>
            {taskManagerList.map( (taskManager) => <TaskManager list={taskManager} key={taskManager.id} id={taskManager.id} db={taskManagerList} refresh={setTaskManagerList}/>)}
            <p className='br'><br></br></p>
        </div>
    );

}


export default TaskManagerManager