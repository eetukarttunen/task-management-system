import TaskList from './tasks/TaskList';
import './App.css';
import Navigation from './navigation/Navigation';
import Header from './navigation/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <TaskList/>
    </div>
  );
}

export default App;
