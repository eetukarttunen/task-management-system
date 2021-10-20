import TaskList from './tasks/TaskList';
import './App.css';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <TaskList/>
    </div>
  );
}

export default App;
