import React from 'react'
import '../styles/Input.css'
import {useState} from 'react'

function Input(props){

    const [input ,getInput] = useState("");

    function createTask(text,list, listAct){
        const task = {
            text : text,
            completed: false
        }
        listAct( [task,...list] )
        console.log(list)
    }

    return(

        <div className='inputBox'>
           <input type="text" value={input} onChange={ev => getInput(ev.target.value)}/> 
           <button onClick={() => createTask(input ,props.list ,props.actButton)}>Add a task!</button>
        </div>
    );
}


export default Input