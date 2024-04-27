import React from 'react'
import Button from '../UI/Button'

const Input = (props) => {
  return (
    <div>
        <form onSubmit={props.formSubmitHandeler} className='form'>
              <label htmlFor='username'>{props.labelName}</label>
              <input type='text' id='username' value={props.enteredUsername} onChange={(event) => props.setEnteredUserName(event.target.value)} ref={props.nameRef} />
              <label htmlFor='age'>Age</label>
              <input type='number' id='age' value={props.enteredAge} onChange={(event) => props.setEnteredAge(event.target.value)} />
              <label htmlFor='clgName'>College Name:</label>
              <input type='text' id='clgName' value={props.clgName} onChange={(event) => props.setClgName(event.target.value)} />
              <Button type='submit'>Add User</Button>
            </form>
    </div>
  )
}

export default Input
