import React,{useState} from 'react'

export default function Textform(props) {
  // have to update state using fucntion, using states:
  
  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  
  // const handleDownClick =()=> {
    //   console.log("Lowercase was clicked");1
    // }
    
    const handleOnChange =(event)=>{
      console.log("Onchange was clicked");
      setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');
    
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3  my-2 ">
          <textarea className="form-control" value={text} onChange={handleOnChange}  id="my-Box" rows="8"></textarea>
        </div>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>Upper case</button>
    </div>
  )
}
