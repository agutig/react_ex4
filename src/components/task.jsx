import React from 'react'
import '../styles/task.css'

function Input(props){

    function completeButton(){

        const refreshedTaskList = props.list.map( listTask => {
            if(props.task.id === listTask.id){
                listTask.completed = !listTask.completed ;

            }
            return listTask;
        }
        );
        props.actList(refreshedTaskList)
    
    }

    function deleteTask(){
        const refreshedTaskList = props.list.filter( listTask => listTask.id !== props.task.id)
	    props.actList(refreshedTaskList)

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