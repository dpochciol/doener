import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { client } from './client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Home';
import Dishes from './Dishes';
import Community from './Community'



function App() {
  const [values, setValues] = useState();

  useEffect(() => {
    client.getEntries()
    .then((res) => {
      setValues([res, values][0].items)
    })
    .catch(console.error);
  },[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/"  component={Home} />
        {values ?<Route exact path="/dish"><Dishes values={values}/></Route> : 'Loading...'}
        {values ?<Route exact path="/community"><Community values={values}/></Route>: 'Loading...'}
        {/* <Route exact path="/community" render={() => <Community />} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
