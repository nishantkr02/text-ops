import React from 'react'

export default function About() {
  return (
    <div className='col-md-6 m-auto shadow-lg p-2'>

    <div className='container'>
      <img className='col-10 mx-5 p-2  my-2 ' src='https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png '/>
    </div>
<div className="accordion p-2 " id="accordionPanelsStayOpenExample">

  <div className="accordion-item text-center ">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
       About the App 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <p  className='border shadow-lg m-auto p-2  text-secondary '>
            This is a simple Text Editor App which Provides the users some basic yet Important Functionlaties .<br/>
            <strong >
            The Functionalities Includes : <br/><br/>
            - Delete A Word   <br/>
           
            - Convert To UpperCase . <br/>
            - Convert To LowerCase . <br/>
            - Remove all the Extra Spaces  . <br/>
            - Delete all occurance of a Word <br/>
            - Replace A Word With Another Word  <br/>
            - Replace all occurance of a Word with another  <br/>
            


            </strong>
        </p>
       
      </div>
    </div>
  </div>

  <div className="accordion-item text-center ">
    <h2 className="accordion-header " id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        User Guide 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <p  className='border shadow-lg m-auto p-2  text-secondary '>
      <strong > Now Let's See How to use some of the Basic  Functionalities Mentioned in the section above <br/>  </strong>
      <strong>Step 1: </strong> Enter Your Text Content in the text box Secion .<br/>
      <strong>Step 2: </strong> Now Choose the Operation you want to perfrom on yout text . <br/>
      <strong>Step 3: </strong>You Will get a prompt Stating that your desired operation has been Sucessfully Completed .<br/>
      <strong>Step 4: </strong>Finally Click on CopyToClipBoard Button to get your final result . <br/>
      <strong>Step 5: </strong> Click On the Reset Botton to Reset the consloe for re-use  .   
      <br/><br/> <br/><br/>
      <strong>Instructions For Replace And Delete Fetatures : </strong><br/><br/>
       <strong>Replace And ReplaceAll :</strong>To use this feature you have to give input to two text feilds named , Word and Replace With and then finally click on the desired button .<br/><br/>
       <strong>Delete And DeleteAll :</strong>To use this feature you have to give input to Only one of text feilds named Word and leave the ReplaceWith Feild Blank and then finally click on the desired button .<br/>
       <strong>After Completing the Operations perform step 4 and 5 </strong>


          
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item text-center ">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      A Message from the Developer
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <p  className='text-secondary p-3 shadow-lg'>
        <strong>Hi there .. ! <br/>
        I am Nishant . I hope You will find this App Useful <br/><br/>
         I am New to this world of the Web Developers ,
        <br/> still got A Long Way to Go ,so many new things to Learn and <br/> A long list of apps to build  .<br/>
        So If you have any suggestions , please do share it on my  
        <a href='https://github.com/nishantkr02'> GitHub </a> Page .

        </strong> 
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
