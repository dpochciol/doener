import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { client } from './client';


import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Home';
import Dishes from './Dishes';

function App() {
  const [values, setValues] = useState();
  const [current, setCurrent] = useState();

  const setCurrentValue = (value) => {
    setCurrent(value);
  }

  useEffect(() => {
    client.getEntries()
    .then((res) => {
      console.log(res);
      setValues([res, values][0].items)
    })
    .catch(console.error);
  },[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home values={values}/>
        </Route>

        <Route exact path="/dish"> {values ? <Dishes values={values} setCurrentValue={setCurrentValue}/> : 'Loading...'} </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
