import React, { useState } from 'react'
import Note from './note';


function NotesManager(){

    const [notesList , setNotesList] = useState([]);


    return(
        <div>
            <h1>Notes</h1>
            <button>Add a note</button>
            {notesList.map((note) => <Note/>)}
        </div>
    );

}


export default  NotesManager;