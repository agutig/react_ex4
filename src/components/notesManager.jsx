import {useState ,useEffect} from 'react'
import Note from './note';
import {v4 as uuidv4} from  'uuid'
import '../styles/notesManager.css'


function NotesManager(props){

    const [notesList , setNotesList] = useState(props.data);

    function addNote(){
        const newNote = {
            id : uuidv4(),
            text : "Write a note!"
        }
        
        setNotesList([...notesList,newNote])
        localStorage.setItem('notes',JSON.stringify([...notesList,newNote]));
    }

    useEffect(() => {
        setNotesList(props.data)
      },[props.data])

    return(
        <div className='notesManager'>
            <div className='notesManagerTittle'>
                <p className='notesManagerText' >Notes</p>
                <button className='notesManagerButton' onClick={() => addNote()} > +</button>
            </div>
            
            {notesList.map((note) => <Note list={notesList} refresh={setNotesList} text={note.text} id={note.id} key={note.id}/>)}
            <p className='br'><br></br></p>
        </div>
    );

}


export default  NotesManager;