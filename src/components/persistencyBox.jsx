import React from 'react'
import {useState} from 'react'
import '../styles/persistencyBox.css'

function PersistencyBox(){

    const [persistencyText , setPersistencyText] = useState("Sesion")

    function changeText(){
        if(persistencyText === "Sesion"){
            setPersistencyText("Days")
        }else{
            setPersistencyText("Sesion")
        }
    }
    
    return(
        <div className='persistencyBox'>
            <span className='persistencyBoxText'>Tasks saved for <button className='persistencyBoxButton' onClick={ () => changeText()}>{persistencyText}</button> </span>
        </div>
    );

}


export default PersistencyBox