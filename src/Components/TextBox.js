import React from 'react' ;
import { useState } from 'react';

export default function TextBox(props) {
   const [text,setText]=useState("");
    const handleChange=(evt)=>{
        console.log("Change Happend ");
        setText(evt.target.value);
    }
    /* Result box 
    const showResult =(str)=>{
      let box= document.getElementById("resultBox") ;
      box.innerText=str;
      box.style.wordWrap="break-word";
      box.style.overflow ="scroll";
      setText("")
    }*/
    /*To UpperCase Button */
    const toUpper=()=>{
        var upText =text.toUpperCase();
        setText(upText);
        //showResult(upText) ;
        props.showAlert("Converted To UpperCase") ;
    }
    /*To LowerCase Button */
    const toLower=()=>{
      let lowText=text.toLowerCase();
      setText(lowText);
      props.showAlert("Converted To LowerCase") ;
      //showResult(lowText) ;
    }
    /*Remove Spaces  */
    const removeSpaces=()=>{
      var rsText =text.split(/[ ]+/);
      var ftext=rsText.join(" ")
      setText(ftext);
      props.showAlert("Extra Spaces Removed") ;
      //showResult(ftext) ;
    }


    /*Reset Button */
    const Reset=()=>{
      setText("");
      props.showAlert("Reset Complete.Enter New Texts") ;
      document.getElementById("wordReplace").value =" " ;
     document.getElementById("replaceWith").value =" " ;
      /*showResult("") ;
      let inputBox= document.getElementById("inputTextArea") ;
      inputBox.innerText=" " ;*/
    }

     //Copy To clipBoard 
     const copyText =()=>{
      var ctext = document.getElementById("inputTextArea").value;
      navigator.clipboard.writeText(ctext) ;
      props.showAlert("Copied To ClipBoard ");

     }
    
     

     /*Replace Word */
    const ReplaceWord=()=>{
     let word=document.getElementById("wordReplace").value ;
     let replacement = document.getElementById("replaceWith").value ;
     console.log(word,replacement)
     setText(text.replace(word,replacement));
    }
    /*ReplaceAll Word */
    const ReplaceAllWord=()=>{
      let word=document.getElementById("wordReplace").value ;
      let replacement = document.getElementById("replaceWith").value ;
    
      setText(text.replaceAll(word,replacement));
     }




  return (

<div className='container '>
  <div className='row my-3'>
{/* ---------------------------------Text Area Div------------------------------------ */}
    <div className="col-md-6 form-group  shadow p-3 bg-white rounded m-auto  ">
    <label htmlFor="exampleFormControlTextarea1" className='badge bg-primary-subtle text-wrap my-2 fs-5 shadow'>Enter Your Text :</label>
    <textarea
     className="form-control shadow "
      id="inputTextArea" 
      rows="6"
      placeholder='Enter some text to transform:'
      value={text}
      onChange={handleChange}
      />

       {/* Copy To clipBoard Button */} 
      <button className='btn btn-secondary my-1 mx-1 fs-6 ' onClick={copyText} >Copy To ClipBoard</button>
    {/* Reset Button */} 
    <button className='btn btn-secondary my-1 mx-2' onClick={Reset} >Reset</button>

<div className='shadow-sm p-1 mb-5   bg-white rounded  my-1  text-center fs-6'>
<p><strong>{`Total Characters :${text.length}`}</strong></p>
   <p><strong>{`Total Words : ${text.split(" ").length}`}</strong></p>
</div>

    </div>

{/* ---------------------------------buttons------------------------------------ */}

      <div className="col-md-6 form-group shadow p-2    bg-white rounded  my-1 m-auto ">
     {/* UpperCase Button */} 
      <button className='btn btn-secondary shadow my-2 mx-2'onClick={toUpper} >ToUpperCase</button>
     
      {/* LowerCase Button */} 
      <button className='btn btn-secondary  shadow m-auto' onClick={toLower} >ToLowerCase</button>
      
      {/* Remove Extra Space Button */} 
      <button className='btn btn-secondary  my-2 mx-2' onClick={removeSpaces} >Remove Extra Space</button>
      {/*------------Replace word--------------------------- */}
          <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" >Word</span>
          </div>
          <input type="text" className="form-control shadow" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="wordReplace" />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" >Replace With</span>
          </div>
          <input type="text" className="form-control shadow" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="replaceWith" />
        </div>
      
        <button className='btn btn-secondary    my-2 mx-2 shadow' onClick={ReplaceWord} >Replace</button>
        <button className='btn btn-secondary  my-2 mx-2 shadow' onClick={ReplaceAllWord}  >Replace All</button>
        <p className=' p-2 fs-6'><strong>Note: The Replace and ReplaceAll buttons can also be used as Delete and DeleteAll Buttons
          Just leave the ReplaceWith Feild Blank . </strong>
        </p>
    </div>  

   </div>
   
</div>
  )
}
