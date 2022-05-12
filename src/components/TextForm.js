import React, { useState } from 'react';


export default function TextForm(props) {
const handleUpClick = () =>{
    // console.log("Upeer case was click");
    let newText= text.toUpperCase();
    setText(newText);
}
const handleOnChange= (event)=>{
    setText(event.target.value);

}
const handleUpClicklower = () => {
    let newtext= text.toLowerCase();
    setText(newtext)
}

const handleUpClickCapitalize = () => {
    let newtext= text.split('');
    console.log(newtext.toString());
    setText(newtext.toString())
}
const handleClear = () => {
  let newtext= '';
  // setText('Enter text here')
  setText(newtext)
}
const speech = () => {
  let txt= new SpeechSynthesisUtterance();
  txt.text=text;
  window.speechSynthesis.speak(txt);
}
const pause = () => {
  let stop= new SpeechSynthesisUtterance().pause();
  stop.text=text;
  window.speechSynthesis.speak(stop);
}
const removeExtraSpace = ( ) => {
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
}
const copyText =() => {
  let txt = document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
}



    const [text, setText] = useState('');
    
  return (
      <>
    <div className="container my-3">
    <h2>{props.heading}</h2>
      <div className="mb-3">
  
  <textarea  onChange={handleOnChange}  className="form-control" value={text} id="myBox" rows="8" ></textarea></div>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClicklower}>Convert to LowerCase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
  <button className="btn btn-primary my-3 mx-2 " onClick={handleUpClickCapitalize}>Tokenization</button>
  <button className="btn btn-primary my-3 mx-2 " onClick={speech}>Speak</button>
  <button className="btn btn-primary my-3 mx-2 " onClick={pause}>Pause</button>
  <button className="btn btn-primary my-3 mx-2" onClick={copyText}>copyText</button>

  <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>clear</button>

</div>
<div className="container">
  <h2><u>Text Summary is</u></h2>
  <div className='my-2'>
  <p><strong>{(text.split(' ')).length}</strong> words  and  <strong>{text.length}</strong> characters</p>
<p>Time to read <strong>{((text.split(' ')).length)/125}</strong> minutes</p>
<p>Preview</p>
<p><b>{text}</b></p>
<a href="/mycomputer.pdf" download>Download Text File</a>
</div>
</div>
 </>
  )
}

