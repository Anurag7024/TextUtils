import React, { useState } from 'react'

export default function TextForms(props) {

    const handleUpClick = () => {
        console.log('clicked')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Cleared","success")
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const handleOnChange = (event) => {
        console.log('Changed')
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Your text here');
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}> 
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} chararcters</p>
                <p> {0.08 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to preview here"}</p>
            </div>
        </>
    )
}
