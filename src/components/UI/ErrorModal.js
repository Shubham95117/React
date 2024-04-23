import React from 'react'
import Card from './Card'
import Button from './Button'
import './ErrorModal.css'

const ErrorModal = (props) => {
  return (
 

    <div>
        <div className='backdrop'>
    <Card>
      <header className='modal_header'>
        <h2>{props.title}</h2>
      </header>
      <div className='modal_content'>
        <p>{props.message}</p>
      </div>
      <footer className='modal_action'>
        <Button className='modal_btn' onClick={props.onClose}>Okay</Button>
      </footer>
    </Card>
    </div>
    </div>
  )
}

export default ErrorModal
