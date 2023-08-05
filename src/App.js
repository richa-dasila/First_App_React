import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{ useState } from 'react';

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
   <Navbar title="EssayEditor" mode={mode} toggleMode={toggleMode} aboutText='About'/>
   <Alert alert={alert}/>
   <div className= "container my-3">
   <Textform showAlert={showAlert} heading="Enter Text to analyze" mode={mode}  toggleMode={toggleMode} />
   {/* <About/> */}
   </div>
  </>
  );
}

export default App;
