import React, { useState } from 'react'
import Card from '../UI/Card';
import './AddUsers.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {
  const[error,setError]=useState();
     const [enteredUsername,setEnteredUserName]=useState('');

     const [enteredAge,setEnteredAge]=useState('');

     // creating list to display data
     
    const formSubmitHandeler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 ||enteredAge.trim().length===0){
          setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty values).'
          })
            return;
        }
        if(+enteredAge<1){
          setError({
            title:'Invalid age',
            message:'Please enter a valid age (>0).'
          })
            return;
        }
        const userData={
            id:new Date().getTime(),
            username:enteredUsername,
            age:+enteredAge,
        }

      //passing data to app
      props.onAddUser(userData);

        setEnteredAge('');
        setEnteredUserName('');
        console.log(userData);
    }
  return (<>
  {error&&<ErrorModal title={error.title} message={error.message} onClose={()=>setError(null)}/>}
    <Card>
    <form onSubmit={formSubmitHandeler} className='form'>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' value={enteredUsername} onChange={(event)=>setEnteredUserName(event.target.value)}/>
        <label htmlFor='age'>Age</label>
        <input type="number" id='age' value={enteredAge} onChange={(event)=>setEnteredAge(event.target.value)}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUsers
