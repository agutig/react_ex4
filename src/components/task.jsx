import React from 'react'
import '../styles/Task.css'

function Input(){
    return(
        <div className='taskBox'>
           <strike>Dar de comer al gato</strike>
           <button className='completeButton'>Delete</button>
        </div>
    );
}


export default Input