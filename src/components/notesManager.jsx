import React, { useState } from 'react'
import Note from './note';
import {v4 as uuidv4} from  'uuid'
import '../styles/notesManager.css'


function NotesManager(){

    const [notesList , setNotesList] = useState([]);

    function addNote(){
        const newNote = {
            id : uuidv4(),
            text : "Write a note!"
        }

        setNotesList([...notesList,newNote])
    }

    return(
        <div className='notesManager'>
            <div className='notesManagerTittle'>
                <h1>Notes</h1>
                <button onClick={() => addNote()} >+</button>
            </div>
            
            {notesList.map((note) => <Note list={notesList} refresh={setNotesList} text={note.text} id={note.id} key={note.id}/>)}
        </div>
    );

}


export default  NotesManager;