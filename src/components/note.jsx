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
            return note
        })
        props.refresh(refreshedText)
        if(props.save === "days"){
            localStorage.setItem('notes', JSON.stringify(refreshedText));
        }else{localStorage.setItem('notes', JSON.stringify([]))}
    }

    function deleteNote() {

        let refreshedList = props.list.filter( listTask => listTask.id !== props.id)
        props.refresh( refreshedList)
        if(props.save === "days"){
            localStorage.setItem('notes', JSON.stringify(refreshedList));
        }else{localStorage.setItem('notes', JSON.stringify([]))}
    }

    return(
        <div className='noteContainer'>
            <textarea onChange={ev => refreshText(ev)} className='noteInput' value={text}/>
            <button className='noteButton' onClick={() => deleteNote()} >-</button>
        </div>
    );

}


export default Note