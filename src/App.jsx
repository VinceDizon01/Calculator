import './App.css'
import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className="CalcDisplay">
      {dispValue}
    </div>
  )
}

function CalcButton({ label, buttonClassName = 'CalcButton', onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState('0')

  const onClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerText

    // Kapag CLR ang pinindot, i-reset sa '0'
    if (value === 'CLR') {
      setDisp('0')
      return
    }

    // Para sa ibang buttons, i-append o palitan ang initial '0'
    if (disp === '0') {
      setDisp(value)
    } else {
      setDisp(disp + value)
    }
  }

  return (
    <div className="App">
      <div className="Headers">
        Calculator of Vince Dizon -DA3A
      </div>
      <div className="Calculator">
        <CalcDisplay dispValue={disp} />
        <div className="CalcButtons">
          <CalcButton label={'7'} onClick={onClickHandler} />
          <CalcButton label={'8'} onClick={onClickHandler} />
          <CalcButton label={'9'} onClick={onClickHandler} />
          <CalcButton label={'÷'} onClick={onClickHandler} />
          <CalcButton label={'4'} onClick={onClickHandler} />
          <CalcButton label={'5'} onClick={onClickHandler} />
          <CalcButton label={'6'} onClick={onClickHandler} />
          <CalcButton label={'x'} onClick={onClickHandler} />
          <CalcButton label={'1'} onClick={onClickHandler} />
          <CalcButton label={'2'} onClick={onClickHandler} />
          <CalcButton label={'3'} onClick={onClickHandler} />
          <CalcButton label={'-'} onClick={onClickHandler} />
          <CalcButton label={'CLR'} onClick={onClickHandler} />
          <CalcButton label={'0'} onClick={onClickHandler} />
          <CalcButton label={'='} onClick={onClickHandler} />
          <CalcButton label={'+'} onClick={onClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default App