import React from 'react'
import '../styles/Task.css'

function Input(props){


    function completed_task(isCompleted){
        console.log(props.task)
        if (isCompleted === false){
            return(
                <div className='taskBox'>
                    <p>{props.task.text}</p>
                    <button className='completeButton' >Complete</button>     
                </div>
            )
        }else{
            return(
                <div className='taskBox'>
                    <strike>{props.task.text}</strike>
                    <button className='completeButton'>Delete</button>
                           
                </div>
            )
        }
    }

    return(
        completed_task(props.task.completed)
    );
}


export default Input