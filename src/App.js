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
      console.log(res.items)
      setValues()
      
    })
    .catch(console.error);
    
  },[]);
  console.log(values);
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/dish" component={Dishes} />
        <Route exact path="/community" component={Community} />
        {/* <Route exact path="/community" render={() => <Community />} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
