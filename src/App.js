import './App.css';
import Input from './components/input';
import Task from './components/task';
import {useState} from 'react'

function App() {

  const [taskList ,setTaskList] = useState([]);

  return (
    <div className="App">
      <Input list={taskList} actButton={setTaskList}/>
      {console.log(taskList)}
      {taskList.map( (task) => <Task task={task}  actList={setTaskList} list={taskList}/>)}

    </div>
  );
}

export default App;
