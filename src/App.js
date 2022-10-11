import './App.css';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    //BEM
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* HomePage Component */}
      <Home />
    </div>
  );
}

export default App;
