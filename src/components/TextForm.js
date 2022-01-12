import React, { useState } from 'react'
import { Form, Button, NavItem } from 'react-bootstrap'
  



export const TextForm = (props) => {
    const [text, setText] = useState("");
    const [words, setWords]=useState(0);
    const [characters, setCharacters]=useState(0);
    const [textCase, setTextCase]=useState("UPPER CASE");

    const toUpper = () => {
        if(text===""){
            alert("Enter text");
        }else{
            let newText=text.toUpperCase();
            setText(newText);
        }
    }

    const changeText=(event)=>{
        // console.log("Text is changing");
        setText(event.target.value);
        countWords();
    }

    function countWords(){
        let wordCount=1;
        for(let i=0; i<text.length; i++){
            if(text.charAt(i)===" "){
                if(text.charAt(i-1)!==" "){
                    wordCount++;
                }
            }
        }

    //    wordCount= text.split(/[^\s]+/).length

        setWords(wordCount);
        setCharacters(text.length);
    }

    const checkButton=()=>{
        if(textCase==="lower case"){
            setTextCase("UPPER CASE");
            let newText=text.toLowerCase();
            setText(newText);
        }else if(textCase==="UPPER CASE"){
            setTextCase("lower case");
            let newText=text.toUpperCase();
            setText(newText);
        }
    }

    const clearText=()=>{
        setText("");
    }

    const removeWhiteSpaces=()=>{
        let newText=text.replace(/\s+/g,' ').trim();;
        setText(newText);
    }

    const copyText=()=>{
        if(text.length>0){
            navigator.clipboard.writeText(text);
            alert("Copied the text");
        }else{
            alert("Enter the text to copy.");
        }
    }
    return (
        <>
        <div className="container">
            <h3>{props.textHeading}</h3>
            <Form>
                <Form.Group className="mb-3" /*controlId="exampleForm.ControlTextarea1"*/ >
                    <Form.Control as="textarea" value={text} onChange={changeText} style={{backgroundColor: props.mode==='dark'?'rgb(7, 2, 48)':'white', color: props.mode==='dark'?'white':'black'}} rows={10} id="myBox" placeholder="Enter text here"/>
                </Form.Group>
                <Button variant="primary" onClick={toUpper, checkButton}>Convert to {textCase}</Button>
                <Button variant="primary my-2 mx-3" onClick={clearText}>Clear Text</Button>
                <Button variant="primary my-2 mx-3" onClick={removeWhiteSpaces}>Remove Extra White Spaces</Button>
                <Button variant="primary my-2 mx-3" onClick={copyText}>Copy Text</Button>
            </Form>
        </div>
        <div className='container my-3'>
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{words*0.008} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the box above to preview here!!"}</p>
        </div>
        </>
    )
}
