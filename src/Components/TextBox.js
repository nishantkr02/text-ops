import React from 'react' ;
import { useState } from 'react';

export default function TextBox(props) {
   const [text,setText]=useState("");
    const handleChange=(evt)=>{
        console.log("Change Happend ");
        setText(evt.target.value);
    }
    /* Result box */
    const showResult =(str)=>{
      let box= document.getElementById("resultBox") ;
      box.innerText=str;
      box.style.wordWrap="break-word";
      box.style. overflow ="scroll";
      setText("")
    }
    /*To UpperCase Button */
    const toUpper=()=>{
        var upText =text.toUpperCase();
        setText(upText);
        showResult(upText) ;
        props.showAlert("Converted To UpperCase") ;
    }
    /*To LowerCase Button */
    const toLower=()=>{
      let lowText=text.toLowerCase();
      setText(lowText);
      showResult(lowText) ;
    }
    /*Remove Spaces  */
    const removeSpaces=()=>{
      var rsText =text.split(/[ ]+/);
      var ftext=rsText.join(" ")
      setText(ftext);
      showResult(ftext) ;
    }


    /*Reset Button */
    const Reset=()=>{
      setText("");
      showResult("") ;
      let inputBox= document.getElementById("inputTextArea") ;
      inputBox.innerText=" " ;
    }

     /*Copy To clipBoard 
     const copyText=()=>{
      
      text.select() ;
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text);

     }
     */

  return (

<div className='container '>
  <div className='row my-3'>
    <div className="col-md-6 form-group mh-100 mx-4 my-1 d-inline-block">
    <label htmlFor="exampleFormControlTextarea1" className='badge bg-warning text-wrap my-2 fs-6'>Enter Your Text :</label>
    <textarea
     className="form-control "
      id="inputTextArea" 
      rows="10"
      placeholder='Enter some text to transform:'
      value={text}
      onChange={handleChange}
      />
     {/* UpperCase Button */} 
      <button className='btn btn-success my-4 mx-2'onClick={toUpper} >ToUpperCase</button>
     
      {/* LowerCase Button */} 
      <button className='btn btn-success my-4 mx-2' onClick={toLower} >ToLowerCase</button>
      
      {/* Remove Extra Space Button */} 
      <button className='btn btn-success my-4 mx-2' onClick={removeSpaces} >Remove Extra Space</button>
      
      {/* Reset Button */} 
      <button className='btn btn-success my-4 mx-2' onClick={Reset} >Reset</button>
    
    </div>  


    {/* Preview Window */} 
    <div className='col-md-5  mx-3    '>
      <h4 className='text-center badge bg-danger text-wrap my-2  fs-6 ' >Transformed Text : </h4>
      <div className='   my-2 h-25 border border-tertiary-subtle' id='resultBox'></div>

      {/* Copy To clipBoard Button */} 
      <button className='btn btn-success my-4 mx-1 fs-6'>Copy To Clip  Board</button>
    </div>

   </div>
   <p>{`Total Characters :${text.length}`}</p>
   <p>{`Total Words : ${text.split(" ").length}`}</p>
</div>
  )
}
