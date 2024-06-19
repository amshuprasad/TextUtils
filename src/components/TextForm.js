import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleup = () => {
        console.log("event clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success");
    }
    const textchange = (event) => {
      console.log("on change")
    setText(event.target.value)
    
    }
    const handleclear =()=>{
        let newtext="";
        setText(newtext);
        props.showAlert("text cleared","success");
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handlelow = () => {
        console.log("low event");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'grey':'white'}}>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#043135':'white' , color:props.mode==='light'?'grey':'white'}} onChange={textchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" onClick={handleup} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" onClick={handlelow} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" onClick={handleclear} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button disabled={text.length===0} type="button" onClick={handlecopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
            <button disabled={text.length===0} type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra-spaces</button>

        </div>
        <div className="box my-3" style={{color:props.mode==='light'?'grey':'white'}}>
            <h2>Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
