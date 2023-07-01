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
     //let regEx=new RegExp(word,'ig') => from stack overflow 
     //i ingnore , g for All
    const ReplaceWord=()=>{
     let word=document.getElementById("wordReplace").value ;
     let regEx=new RegExp(word,'i')
     let replacement = document.getElementById("replaceWith").value ;
     setText(text.replace(regEx,replacement));

     props.showAlert(`Replaced  " ${word} " with " ${replacement} " `);
    }
    /*ReplaceAll Word */
    const ReplaceAllWord=()=>{
      let word=document.getElementById("wordReplace").value ;
      let regEx=new RegExp(word,'ig') ;
      let replacement = document.getElementById("replaceWith").value ;
      
      setText(text.replace(regEx,replacement));
      props.showAlert(`Replaced All  " ${word} " with " ${replacement} " `);
     }
  /*To remove Special Characters */
  const removeAllSpecials=()=>{
    let newText= text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(newText);
    props.showAlert("Special Characters Removed") ;
    //showResult(lowText) ;
  }
/*const removeSpc =() =>{
  let word=document.getElementById("wordReplace").value ;
  let replacement = document.getElementById("replaceWith").value ;
  let template=` /[&\/\\${word}]/i,'${replacement}' ` ;
  let newText=text.replace(template);
  setText(newText);
    props.showAlert(`Special Characters${word} replace With ${replacement}` ) ;
}
const removeAllSpc =() =>{
  let word=document.getElementById("wordReplace").value ;
  let replacement = document.getElementById("replaceWith").value ;
  let template=` /[${word}]/ig,'${replacement}' ` ;
  console.log(template);
  let newText=text.replace(/[${word}]/ig,'${replacement}');
  console.log(newText);
  setText(newText);
    props.showAlert(`All Special Characters${word} replace With ${replacement}` ) ;
}*/



  return (

<div className='container '>
  <div className='row my-3'>
{/* ---------------------------------Text Area Div------------------------------------ */}
    <div className="col-md-6 form-group  shadow  bg-white rounded m-auto p-3 ">
    <label htmlFor="exampleFormControlTextarea1" className='badge bg-primary-subtle text-wrap my-2 fs-5 shadow'>Enter Your Text :</label>
    <textarea
     className="form-control shadow "
      id="inputTextArea" 
      rows="6"
      placeholder='Enter some text to transform:'
      value={text}
      onChange={handleChange}
      />

      <div className=' my-3'>
       {/* Copy To clipBoard Button */} 
  
      <button className='btn btn-secondary my-1 mx-1 fs-6 ' onClick={copyText} >Copy To ClipBoard</button>
  
    {/* Reset Button */} 
    <button className='btn btn-secondary my-1 mx-2' onClick={Reset} >Reset</button>

    </div>
<div className=' p-2  bg-white rounded  my-1  text-center fs-6'>
<p><strong>{`Total Characters :${text.length}`}</strong></p>
   <p><strong>{`Total Words : ${text.split(" ").length}`}</strong></p>
</div>

    </div>

{/* ---------------------------------buttons------------------------------------ */}

      <div className="col-md-6  shadow    bg-white rounded   ">

    <div className='d-lg-flex justify-content-between  '>

     {/* UpperCase Button */} 
     <div  >
      <button className='btn btn-secondary shadow my-1'onClick={toUpper} >ToUpperCase</button>
      </div>

     
      
      {/* LowerCase Button */} 
      <div >
      <button className='btn btn-secondary  shadow my-1' onClick={toLower} >ToLowerCase</button>
      </div>

      {/* Remove Extra Space Button */} 
      <div  >
      <button className='btn btn-secondary  my-1  ' onClick={removeSpaces} >RemoveSpaces</button>
      </div>
      
      </div>
      <div className='d-lg-flex justify-content-center '>
 {/* Remove Special Characters Button */} 
    <div >
      <button className='btn btn-secondary  my-1  ' onClick={removeAllSpecials} >Remove Special Characters</button>
      </div>
      </div>

      {/*------------Replace word--------------------------- */}
      <div className='my-4 ' >
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
        <div className='d-sm-flex justify-content-center'>
        <button className='btn btn-secondary    my-2 mx-2 shadow' onClick={ReplaceWord} >Replace Word</button>
        <button className='btn btn-secondary  my-2 mx-2 shadow' onClick={ReplaceAllWord}  >ReplaceAll Words</button>
    </div> 
  
    
   </div>
   <div className='d-flex justify-content-center p-3'>
   <p className='text-secondary'><strong>Need Help ?  Visit to About Page   </strong>
        </p>
        </div>
</div>
</div>
</div>
  )
}
