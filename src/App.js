import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{ useState } from 'react';

import {
  BrowserRouter as Router,
  // Switch
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setalert] = useState(null);
 
 const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
  }, 1500);
 }
 
 
 
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181818';
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");

    }
  }
  
  return (
  <>
  <Router>
   <Navbar title="EssayEditor" mode={mode} toggleMode={toggleMode} aboutText='About'/>
   <Alert alert={alert}/>
   <div className="container my-3">
  <Routes>
       <Route  exact path="/about" element={<About/>}/>
       <Route  exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
        {/* <Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> */}
    </Routes>
   </div>
  </Router>
  </>
  );
}

export default App;
