import './App.css';
import PersistencyBox from './components/persistencyBox';
import TaskManagerManager from './components/taskManagerManager';
import NotesManager from './components/notesManager';
import {useState ,useEffect} from 'react'
import TimeManager from './components/timeManager';

function App() {

  /*
  If by any reason you are reading the code of this proyect im sorry to inform you that the data managing is 
  structured using a lot of react bad practices. This is because the main reason of this proyect is pracitcing and understanding 
  better this library and the posible combination with other libraries (redux)
  */
  const [tittle,getTittle] = useState("Proyect Name");

  const [notes,getNotes] = useState([]);

  useEffect(() => {
    getNotes( JSON.parse(localStorage.getItem('notes')))
  },[])

  return (
    <div className="App">
      <input type='text' value={tittle} onChange={ev => getTittle(ev.target.value)} className='tittle' />
      <h3 className='subtittle'><em> &nbsp; &nbsp; &nbsp; by agutig.github</em></h3>

      <div className='mainBox'>
        <div className='subBox1'>
          <div className='timeBox'>
                <TimeManager></TimeManager>
          </div>
        </div>

        
        <div className='subBox2'>
              <TaskManagerManager/>
        </div>


        <div className='subBox3'>
            <NotesManager data={notes}></NotesManager>
        </div>
      
      </div>
      
      <footer>
          <PersistencyBox/>
      </footer>
      
    </div>
  );
}

export default App;
