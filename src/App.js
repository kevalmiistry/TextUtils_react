import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (messsage, type)=>{
    setAlert({
      messsage,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2a2e33'
      document.body.style.color = '#f4f4f4'
      showAlert('Dark mode is enabled!', 'success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#222'
      showAlert('Light mode is enabled!', 'success')
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm title="Enter your text" showAlert={showAlert} mode={mode} />}>
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
