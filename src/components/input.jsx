import React from 'react'
import '../styles/input.css'
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'

function Input(props){

    const [input ,getInput] = useState("");

    const [id ,getId] = useState(0);

    function createTask(text,list, listAct){
        if (text !== ''){
            const task = {
                text : text,
                completed: false,
                id: uuidv4()
            }
            getId(id +1)
            listAct( [task,...list] )
        }
    }

    return(

        <span className='inputBox'>
           <input className='inputText' type="text" value={input} onChange={ev => getInput(ev.target.value)}/> 
           <button onClick={() => createTask(input ,props.list ,props.actButton) }>Add a task!</button>
        </span>
    );
}


export default Input