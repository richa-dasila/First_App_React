import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
About
function App() {
  return (
  <>
   <Navbar title="EssayEditor" aboutText="About"/>
   <div className= "container">
   {/* <Textform heading="Enter Text to analyze"/> */}
   <About/>
   </div>
  </>
  );
}

export default App;
