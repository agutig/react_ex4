import './App.css';
import PersistencyBox from './components/persistencyBox';
import TaskManagerManager from './components/taskManagerManager';
import NotesManager from './components/notesManager';
import {useState} from 'react'
import TimeManager from './components/timeManager';

function App() {

  /*
  If by any reason you are reading the code of this proyect im sorry to inform you that the data managing is 
  structured using a lot of react bad practices. This is because the main reason of this proyect is pracitcing and understanding 
  better this library and the posible combination with other libraries (redux)
  */
  const [tittle,getTittle] = useState("Proyect Name");

  return (
    <div className="App">
      <input type='text' value={tittle} onChange={ev => getTittle(ev.target.value)} className='tittle' />
      <h3 className='subtittle'><em> &nbsp; &nbsp; &nbsp; by Short Workflow</em></h3>

      <div className='mainBox'>
        <div className='subBox1'>
          <div className='timeBox'>
                <h1>Relojes y Cronometros!</h1>
                <TimeManager></TimeManager>
          </div>
          <PersistencyBox/>
        </div>

        
        <div className='subBox2'>
            <div className='taskManagerManager'>
              <TaskManagerManager/>
            </div>
        </div>


        <div className='subBox3'>
            <NotesManager></NotesManager>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
