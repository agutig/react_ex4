import React from 'react'
import {useState} from 'react'


function Note(props){

    const [text, setText] = useState(props.list.name)

    function refreshText(ev) {

        setText(ev.target.value)
        const refreshedText= props.db.map(TM => {
            console.log(props.db)
            if(props.list.id === TM.id ) {
                TM.text = text;
            }
            return TM
        })
        props.refresh(refreshedText)
    }

    return(
        <div>
            <input onChange={ev => refreshText(ev)}  className='note' value='hola'/>
        </div>
    );

}


export default Note