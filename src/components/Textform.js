import React , {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log('uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handlelowClick = ()=>{
    // console.log('lowercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleextspaceClick = ()=>{
    // console.log('Remove Extra Space was clicked');
    let extText = text.split(/[ ]+/);
    setText(extText.join(" "));
  }

  const handleselectClick = ()=>{
    // console.log('Select Text was clicked');
    var stext = document.getElementById("myBox");
    stext.select();
  }
  
  
  // const handledownlClick = ()=>{
  //   // console.log('Download Text was clicked');
  //   // setText('');
  // }
  
  const handlecopyClick = ()=>{
    // console.log('Copy to Clipboard was clicked');
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard');
  }
  
    const handleclrClick = ()=>{
      // console.log('Clear Text was clicked');
      setText('');
    }


  const handleOnChange = (event)=>{
    // console.log('on Change');
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleextspaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleselectClick}>Select All</button>
            {/* <button className="btn btn-primary mx-1" onClick={handledownlClick}>Download Text</button> */}
            <button className="btn btn-primary mx-1" onClick={handlecopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleclrClick}>Clear Text</button>

        </div>
        <div className='container my-3'>
          <h2>Your Text Summary</h2>
          <p>{(text.split(' ').length)-1} words and {text.length} Characters</p>
          <p>{0.008 * ((text.split(' ').length)-1)} minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>

    </div>
  )
}
