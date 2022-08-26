import './App.css';
import Input from './components/input';
import Task from './components/task';
import {useState} from 'react'

function App() {

  const [taskList ,setTaskList] = useState([]);

  return (
    <div className="App">
      <Input list={taskList} actButton={setTaskList}/>
      <Task/>
    </div>
  );
}

export default App;
