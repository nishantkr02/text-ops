import Navbar from "./Components/Navbar"
import TextBox from "./Components/TextBox";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom"
  
import { useState } from "react";
function App() {
  const [alert,setAlert]=useState(null);
  const setAlertText=(txt)=>{
    setAlert({ msg:txt});
    setTimeout(()=>{
      setAlert(null) ;
    },2000);
  }
  return (
    <div className="App">
      <Navbar />
      <Alert alert={alert} />
      <Routes>
     <Route path="/" element={<TextBox showAlert={setAlertText} />} />
      <Route path="/About" element={<About />} />
     </Routes>
     
    </div>
  );
}

export default App;
