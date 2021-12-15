import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  // useState for enabling light and dark mode
  const [mode, setMode] = useState('light');

  // switch text
  const [modeText, newModeText] = useState('Enable DarkMode');

  // for switch text color
  const [color, setColor] = useState('dark');

  // light and dark mode for about
  const [myStyle, myNewStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  // dark mode for textarea
  const darkTextArea = () => {
    let textArea = document.getElementById('myBox');
    textArea.style.backgroundColor = '#d0d0d0';
  }

  // Light mode for textarea
  const lightTextArea = () => {
    let textArea = document.getElementById('myBox');
    textArea.style.backgroundColor = '#fff';
  }



  // Alert work starts from here
  const [alert, setAlert] = useState({
    type: '',
    msg: ''
  });

  // dismiss alert after few secs
  const alertMethod = () => {
    setTimeout(() => {
      setAlert({
        type: '',
        msg: ''
      });
    }, 1500);
  }

  // method to enable light and dark mode
  const enableMode = () => {
    if (mode === 'light') {
      setMode('dark');
      newModeText('Enable LightMode');
      setColor('light');
      document.body.style.backgroundColor = 'rgb(9 9 29)';
      document.body.style.color = 'white';
      setAlert({
        type: 'success',
        msg: 'Dark Mode Enabled'
      });
      myNewStyle({
        backgroundColor: 'rgb(9 9 29)',
        color: 'white',
        border: '1px solid grey'
      }
      );
      darkTextArea();
      alertMethod();

    } else {
      setMode('light');
      newModeText('Enable DarkMode');
      setColor('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAlert({
        type: 'success',
        msg: 'Light Mode Enabled'
      });
      myNewStyle({
        backgroundColor: 'white',
        color: 'black'
      }
      );
      lightTextArea();
      alertMethod();
    }

  }
  // method to enable light and dark mode ends

  return (
    <div>
      <Navbar title='TextUtils' mode={mode} modeText={modeText} enableMode={enableMode} textColor={color} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading='Enter The Text To Analyze Bellow' alert={setAlert} alertHandler={alertMethod} />
      </div>
    </div>

  );
}

export default App;