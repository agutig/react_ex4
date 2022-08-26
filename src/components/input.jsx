import React from 'react'
import '../styles/Input.css'
import {useState} from 'react'

function Input(props){

    const [input ,getInput] = useState("");

    const [id ,getId] = useState(0);

    function createTask(text,list, listAct){
        if (text !== ''){
            const task = {
                text : text,
                completed: false,
                id: id
            }
            getId(id +1)
            listAct( [task,...list] )
        }
    }

    return(

        <div className='inputBox'>
           <input type="text" value={input} onChange={ev => getInput(ev.target.value)}/> 
           <button onClick={() => createTask(input ,props.list ,props.actButton) }>Add a task!</button>
        </div>
    );
}


export default Input