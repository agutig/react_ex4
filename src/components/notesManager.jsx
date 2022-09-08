import React, { useState } from 'react'
import Note from './note';
import {v4 as uuidv4} from  'uuid'


function NotesManager(){

    const [notesList , setNotesList] = useState([]);

    function addNote(){
        const newNote = {
            id : uuidv4(),
            text : "Write a note!"
        }

        setNotesList([newNote,...notesList])
    }

    return(
        <div>
            <h1>Notes</h1>
            <button onClick={() => addNote()} >Add a note</button>
            {notesList.map((note) => <Note list={notesList} refresh={setNotesList} text={note.text} id={note.id} key={note.id}/>)}
        </div>
    );

}


export default  NotesManager;