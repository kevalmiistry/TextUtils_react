import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
let styles  = {}
  // const [caseState, setcaseState] = useState('Convert to Upper Case')
  const [caseState, setcaseState] = useState({
    caseKey: 'UPPER',
    caseText: 'Convert to Upper Case'
  })

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }

  const handleUpClick = ()=>{
    const newTxt = text.toUpperCase()
    setText(newTxt)
  }
  
  const handleLowClick = ()=>{
    const newTxt = text.toLowerCase()
    setText(newTxt)
  }

  const handleClearClick = ()=>{
    setText('')
    
    if(text === ''){
      props.showAlert('There is no text!', 'warning')
    }else{
      props.showAlert('All text Cleared!', 'success')
    }

  }

  const handleCopyState = ()=>{
    let newTxt = text
    navigator.clipboard.writeText(text)

    if(text === ''){
      props.showAlert('There is no text!', 'warning')
    }else{
      props.showAlert('All text Copied!', 'success')
    }
  }

  // const handleTheClick = ()=>{
  //   if(caseUpLow === 'UPPER'){
  //     setcaseState('Convert to Lower Case')
  //     handleUpClick()
  //     caseUpLow="LOWER"
  //   }else if(caseUpLow === 'LOWER'){
  //     setcaseState('Convert to Upper Case')
  //     handleLowClick()
  //     caseUpLow='UPPER'
  //   }
  // }
  // Both Worksm ;)

  const handleCaseState = ()=>{
    if(caseState.caseKey === 'UPPER'){
      handleUpClick()
      setcaseState({caseKey: 'LOWER', caseText: 'Convert to Lower Case'})

      if(text === ''){
        props.showAlert('There is no text!', 'warning')
      }else{
        props.showAlert('Coverted to Upper case!', 'success')
      }

    }else if(caseState.caseKey === 'LOWER'){
      handleLowClick()
      setcaseState({caseKey: 'UPPER', caseText: 'Convert to Upper Case'})
      
      if(text === ''){
        props.showAlert('There is no text!', 'warning')
      }else{
        props.showAlert('Coverted to Lower case!', 'success')
      }

    }
  }
  if(props.mode === 'dark'){
    styles = {
      backgroundColor: '#212426',
      color: '#f4f4f4'
    }
  }else{
    styles = {
      backgroundColor: '#fff',
      color: '#222'
    }
  }
  return (
    <div className="container" >
      <div className="mb-3 my-3">
        <h1>{props.title}</h1>
        <textarea style={styles} className="form-control" value={text} onChange={handleOnChange} id="Textarea1" rows="9"></textarea>
        {/* <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick}>Convert to Lower case</button> */}
        <button className="btn btn-primary my-2 me-3" onClick={handleClearClick}>Clear</button>

        {/* <button className="btn btn-primary my-2 me-3" onClick={handleTheClick}>{caseState +' '+ caseUpLow}</button> */}
        {/* Both Works ;) */}
        <button className="btn btn-primary my-2 me-3" onClick={handleCaseState}>{caseState.caseText}</button>
        <button className="btn btn-primary my-2 me-3" onClick={handleCopyState}>Copy</button>
      </div>
      <div className="container">
        <h3>Text Summary</h3>
        <span className='mx-4'><b>Words:</b> {text.split(' ').length}</span><br />
        <span className='mx-4'><b>Characters:</b> {text.length}</span>

        <h3>Time required to read</h3>
        <span>{0.008 * parseInt(text.split(' ').length)} minutes</span>

        <h3 className='my-2'>Text Preview</h3>
        <span className='mx-4'>{text}</span>
      </div>
    </div>
  )
}
