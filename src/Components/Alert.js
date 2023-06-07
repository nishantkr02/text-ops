import React from 'react'

 function Alert(props) {
  return (
         
    props.alert && <div className="  alert alert-success alert-dismissible fade show  my-3 w-50 m-auto text-center shadow " role="alert">
        <strong> {props.alert.msg} </strong>
        
        </div>  

    
  )
}
export default Alert ;
