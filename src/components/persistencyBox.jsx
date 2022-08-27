import React from 'react'
import {useState} from 'react'
import '../styles/persistencyBox.css'

function PersistencyBox(){

    const [persistencyText , setPersistencyText] = useState("Only this sesion")

    function changeText(){
        if(persistencyText === "Only this sesion"){
            setPersistencyText("Days")
        }else{
            setPersistencyText("Only this sesion")
        }
    }
    
    return(
        <div className='persistencyBox'>
            <span>Tasks saved for <button onClick={ () => changeText()}>{persistencyText}</button> </span>
        </div>
    );

}


export default PersistencyBox