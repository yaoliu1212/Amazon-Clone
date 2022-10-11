import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/checkout" element={< Checkout />} />
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Home />} /> */}
          {/* <Route exact path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route exact path="/" element={<div><Header /><Home /></div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
