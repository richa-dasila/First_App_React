import React,{useState} from 'react'

export default function Textform(props) {
  // have to update state using fucntion, using states:
  const[text, setText] = useState('');
  
  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  
  const handleDownClick =()=> {
      console.log("Lowercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
    props.showAlert("Converted to lowercase!", "success");

    }
    
    const handleOnChange =(event)=>{
      // console.log("Onchange was clicked");
      setText(event.target.value);
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}

const handleClearClick = ()=>{ 
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!", "success");
}

    return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#181818'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
          <textarea className="form-control" value={text} onChange={handleOnChange}   style={{backgroundColor: props.mode==='dark'?'#181818':'white', color: props.mode==='dark'?'white':'#181818'}} id="myBox" rows="8"></textarea>
        </div>
          <button className="btn btn-outline-success" onClick={handleUpClick}>Upper case</button>
          <button className="btn btn-outline-danger mx-2" onClick={handleDownClick}>Lower case</button>
          <button disabled={text.length===0} className="btn btn-outline-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-outline-warning my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className = "conatiner my-3" style={{color: props.mode==='dark'?'white':'#181818'}}>
      <h3>Text Summary</h3>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"--Preview--"}</p>
    </div>
    </>
  )
}
