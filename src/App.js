import './App.css';
import TaskManager from './components/taskManager';
import PersistencyBox from './components/persistencyBox';
import TaskManagerManager from './components/taskManagerManager';

function App() {


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
        <h1>Notas!  TODO</h1>
        <button>Añadir una nota</button>
      </div>
      

      
    </div>
  );
}

export default App;
