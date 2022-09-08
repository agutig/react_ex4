import React from 'react'
import '../styles/note.css'


function Note(props){

   
    let text = props.text


    function refreshText(ev) {

        text = ev.target.value;
        const refreshedText= props.list.map(note => {
            
            if(props.id === note.id ) {
                note.text = ev.target.value;
            }
            console.log(note.text)
            return note
        })
        props.refresh(refreshedText)
    }


    /* EN EL INPUT:    */

    return(
        <div className='noteContainer'>
            <textarea onChange={ev => refreshText(ev)} className='noteInput' value={text}/>
            <button className='noteButton' >-</button>
        </div>
    );

}


export default Note