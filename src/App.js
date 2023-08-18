import './App.css';
import ToDoList from './components/ToDoList';
import Titulo from './components/Titulo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <ToDoList />        
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
