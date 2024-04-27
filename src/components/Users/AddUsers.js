import React, { useRef, useState, useContext } from 'react';
import Card from '../UI/Card';
import './AddUsers.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import AuthContext from '../../Context/AuthContext';

const AddUsers = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  const nameRef = useRef(null);
  const [error, setError] = useState();
  const [enteredUsername, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [clgName, setClgName] = useState('');

  const formSubmitHandeler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || clgName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age, and college (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });
      return;
    }
    const userData = {
      id: new Date().getTime(),
      username: enteredUsername,
      age: +enteredAge,
      clg: clgName,
    };

    props.onAddUser(userData);

    setEnteredAge('');
    setEnteredUserName('');
    setClgName('');
  };

  return (
    <>
      {isLoggedIn && (
        <>
          {error && <ErrorModal title={error.title} message={error.message} onClose={() => setError(null)} />}
          <Card>
            <form onSubmit={formSubmitHandeler} className='form'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' value={enteredUsername} onChange={(event) => setEnteredUserName(event.target.value)} ref={nameRef} />
              <label htmlFor='age'>Age</label>
              <input type='number' id='age' value={enteredAge} onChange={(event) => setEnteredAge(event.target.value)} />
              <label htmlFor='clgName'>College Name:</label>
              <input type='text' id='clgName' value={clgName} onChange={(event) => setClgName(event.target.value)} />
              <Button type='submit'>Add User</Button>
            </form>
          </Card>
        </>
      )}
    </>
  );
};

export default AddUsers;
