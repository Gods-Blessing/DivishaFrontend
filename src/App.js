import React, {useEffect} from 'react';

import './App.css';
import Home from './components/Home/Home';

// importing components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  useEffect(()=>{
    document.title = "StartUpz"
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
