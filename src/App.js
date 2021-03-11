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
  const [current, setCurrent] = useState();
  const [page, setPage] = useState(1);

  const setCurrentValue = (value) => {
    setCurrent(value);
  }
  const setCurrentPage = (c) => {
    const newPage = parseInt(c.target.attributes.value.value);
    console.log(newPage);
    setPage(newPage);
  }

  useEffect(() => {
    client.getEntries({
      limit:4,
      skip:(page - 1) * 4
    })
    .then((res) => {
      setValues([res, values][0].items)
    })
    .catch(console.error);
  },[page]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home values={values}/>
        </Route>
        <Route exact path="/dish"> {values ? <Dishes values={values} setCurrentValue={setCurrentValue} setCurrentPage={setCurrentPage} page={page}/> : 'Loading...'} </Route>
        <Route exact path="/community">{current ? <Community current={current}/> : 'Loading...'} </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
