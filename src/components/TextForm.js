import React, { useState } from 'react'

export default function TextForm(props) {

    // State Variable for text
    const [text, setText] = useState('');
    // var capText = text.split(" ");

    // method to handle upper case
    const uppCaseHandler = () => {
        if (text.length <= 0) {
            props.alert({
                type: 'warning',
                msg: 'Write Some Text First!'
            });
            props.alertHandler();
        } else {
            setText(text.toUpperCase());
            props.alert({
                type: 'success',
                msg: 'Converted To UpperCase'
            });
            props.alertHandler();
        }
    }

    // method to capitalize text
    // const capHandler = () => {
    //     let words = text.split(" ");
    //     words.forEach(element => {
    //         let cap = element.charAt(0).toUpperCase().slice(1);
    //         console.log(cap);
    //     });
        
    // }

    // method to handle text changed
    const changeHandler = (e) => {
        setText(e.target.value);
    }

    // method to handle lower case
    const lowerCaseHandler = () => {
        if (text.length <= 0) {
            props.alert({
                type: 'warning',
                msg: 'Write Some Text First!'
            });
            props.alertHandler();
        } else {
            setText(text.toLowerCase());
            props.alert({
                type: 'success',
                msg: 'Converted To Lower Case'
            });
            props.alertHandler();
        }
    }

    // method to clear text
    const clearTextHandler = () => {
        if (text.length <= 0) {
            props.alert({
                type: 'warning',
                msg: 'first, write some text'
            });
            props.alertHandler();
        } else {
            setText("");
            props.alert({
                type: 'success',
                msg: 'Text Has Been Cleared'
            });
            props.alertHandler();
        }
    }

    // method to copy text
    const copyTextHandler = () => {
        if (text.length <= 0) {
            props.alert({
                type: 'warning',
                msg: 'Write Some Text First!'
            });
            props.alertHandler();
        } else {
            let textArea = document.getElementById('myBox');
            textArea.select();
            navigator.clipboard.writeText(textArea.value);
            props.alert({
                type: 'success',
                msg: 'Text Has Been Copied'
            });
            props.alertHandler();
        }
    }

    // method to remove extra spaces
    const spaceHandler = () => {
        if (text.length <= 0) {
            props.alert({
                type: 'warning',
                msg: 'Write Some Text First!'
            });
            props.alertHandler();
        } else {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.alert({
                type: 'success',
                msg: 'Extra Spaces Has Been Removed'
            });
            props.alertHandler();
        }
    }
    return (

        <div className="conatiner">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={changeHandler} style={props.textArea} value={text} rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={uppCaseHandler} >Convert To Upper Case</button>
            {/* <button className="btn btn-primary mx-1 my-1" onClick={capHandler} >Capitalize</button> */}
            <button className="btn btn-primary mx-1 my-1" onClick={lowerCaseHandler} > Convert To Lower Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clearTextHandler} > Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={copyTextHandler} >Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={spaceHandler} >Remove Extra Spaces</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((elem) => elem.length !==0).length} words </p>
                <p> {text.length} Characters</p>
                <p>{text.split(" ").filter((elem) => elem.length !==0).length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? 'Enter Some Text In Above Field' : text}</p>

            </div>
        </div>
    );
}
