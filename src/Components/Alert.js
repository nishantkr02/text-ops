import React from 'react'

 function Alert(props) {
  return (
         
    props.alert && <div className="  alert alert-success alert-dismissible fade show m-auto d-flex justify-content-center  shadow w-75" role="alert">
       <strong> {props.alert.msg} </strong> 
        
        </div>  

    
  )
}
export default Alert ;
