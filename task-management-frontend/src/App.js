import TaskList from './tasks/TaskList';
import './App.css';
import NaviBar from './navigation/NaviBar';

function App() {
  return (
    <div className="App">
      <NaviBar/>
      <TaskList
      />
    </div>
  );
}

export default App;
