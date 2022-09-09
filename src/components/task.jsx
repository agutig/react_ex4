import React from 'react'
import '../styles/Task.css'

function Input(props){

    function completeButton(){

        const refreshedTMM = props.db.map( taskManager => {
            if(props.id_TM === taskManager.id){
                const refreshedTaskManagerData = taskManager.data.map( listTask => {
                    if(props.task.id === listTask.id){
                        listTask.completed = !listTask.completed ;
                    }
                    return listTask;
                }
                );
                taskManager.data = refreshedTaskManagerData;
            }
            return taskManager;
        }
        );
        props.refresh(refreshedTMM)

    }

    function deleteTask(){

        const refreshedTMM = props.db.map( taskManager => {
            if(props.id_TM === taskManager.id){
                taskManager.data = taskManager.data.filter( listTask => listTask.id !== props.task.id)
            }
            return taskManager;
        }
        );
        props.refresh(refreshedTMM)
    }


    function completed_task(isCompleted){
        if (isCompleted === false){
            return(
                <div className='taskBox' >
                    <span className='taskText' onClick={() => completeButton()}>{props.task.text}</span>
                    <button className='deleteButton' onClick={ () => deleteTask()} >Delete</button>     
                </div>
            )
        }else{
            return(
                <div className='taskBox' >
                    <span className='taskText'  onClick={() => completeButton()}><strike>{props.task.text}</strike></span>
                    <button className='deleteButton' onClick={ () => deleteTask()} >Delete</button>
                           
                </div>
            )
        }
    }

    return(
        completed_task(props.task.completed)
    );
}


export default Input