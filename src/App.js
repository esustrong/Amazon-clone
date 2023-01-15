import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
import auth from './firebase';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<><Header /><Checkout /></>} />
        <Route path="/" element={<><Header /><Home /></>} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Elements stripe={promise}><Header /><Payment/></Elements>} />
        <Route path="/orders" element={<><Header /><Orders /></>} /> */}
      </Routes>
      </Router>
      </div>
  );
}

export default App;
