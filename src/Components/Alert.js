import React from 'react'

 function Alert(props) {
  return (
         
    props.alert && <div className="  alert alert-success alert-dismissible fade show  my-3 w-50 m-auto  " role="alert">
        <strong>Yayyy..! </strong>{props.alert.msg}
        
        </div>  

    
  )
}
export default Alert ;
