import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      //user logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      //user log out condition
      else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<div><Header /><Home /></div>} />
          <Route exact path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route exact path="/" element={<div><Header /><Home /></div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
