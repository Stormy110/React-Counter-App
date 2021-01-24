import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={45}/>
        <Counter initialCount={10}/>
        <Counter initialCount={3}/>
        <Counter initialCount={-6}/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
