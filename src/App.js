import Navbar from "./Components/Navbar"
import TextBox from "./Components/TextBox";
import Alert from "./Components/Alert";
import { useState } from "react";
function App() {
  const [alert,setAlert]=useState(null);
  const setAlertText=(txt)=>{
    setAlert({ msg:txt});
    setTimeout(()=>{
      setAlert(null) ;
    },1500);
  }
  return (
    <div className="App">
      <Navbar />
      <Alert alert={alert} />
      <TextBox showAlert ={setAlertText} />
    </div>
  );
}

export default App;
