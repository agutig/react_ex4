import './App.css';
import PersistencyBox from './components/persistencyBox';
import TaskManagerManager from './components/taskManagerManager';
import NotesManager from './components/notesManager';

function App() {

  /*
  If by any reason you are reading the code of this proyect im sorry to inform you that the data managing is 
  structured using a lot of react bad practices. This is because the main reason of this proyect is pracitcing and understanding 
  better this library and the posible combination with other libraries (redux)
  */

  return (
    <div className="App">

      <div className='subBox1'>
        <div className='timeBox'>
              <h1>Relojes y Cronometros!</h1>
              <p>TODO</p>
        </div>
        <PersistencyBox/>
      </div>

      
      <div className='subBox2'>
          <h1>Proyecto</h1> 
          <div className='taskManagerManager'>
            <TaskManagerManager/>
          </div>
      </div>


      <div className='subBox3'>
          <NotesManager></NotesManager>
      </div>
      

      
    </div>
  );
}

export default App;
