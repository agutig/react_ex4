import React from 'react'
import {useState} from 'react'
import Input from '../components/input';
import Task from '../components/task';
import '../styles/taskManager.css'

function TaskManager(props){

    const [taskList ,setTaskList] = useState([]);

    return(
        <div className='taskManager'>
            <h1>Nombre Lista</h1>
            <Input list={taskList} actButton={setTaskList}/>
            {taskList.map( (task) => <Task task={task}  actList={setTaskList} list={taskList}/>)}
        </div>
    );

}


export default TaskManager