//the below is react function based component
import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        //props.showAlert("converted to uppercase","success")
        props.showAlert('converted to uppercase','success')

    }

    const clearClick=()=>{
      setText('');
      props.showAlert("text has been cleared","success")

    }
    const handlelowerClick=()=>{
      setText(text.toLowerCase());
      props.showAlert("converted to lowercase","success")

    }
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const copytoclipboard=()=>
     { 
          navigator.clipboard.writeText(text);
        props.showAlert("text has been copied to clipboard","success")

      }
      const removeextraspaces=()=>{
        let newtext=text.replace(/\s+/g,' ');
        setText(newtext)
        props.showAlert("extra spaces has been removed","success")

      }
      // The clipboard is a buffer that some operating systems provide for short-term storage and transfer within and between application programs.
      //The navigator object contains information about the browser. The navigator object is a property of the window object.
    const[text,setText]=useState('enter text here');
    // text="hiiii";  //wrong way to change the state
    // setText("this is correct way");
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1>{props.heading}</h1>
      <div>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handlelowerClick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={clearClick}>clear text</button>
      <button className="btn btn-primary mx-3" onClick={copytoclipboard}>copy text</button>
      <button className="btn btn-primary mx-3" onClick={removeextraspaces}>remove extra spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      {/* 125 words can be read in 1 minute so 1 word can be read in 60/125=0.008 second */}
      <p>{0.008*text.split(" ").length} Minunutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing in the textbox above to preview here"}</p>
      
    </div>
    </>
  );
}
