import { useState } from 'react';
import AddUsers from './components/Users/AddUsers'
import UserList from './components/Users/UserList';
function App() {
  const[userData,setUserData]=useState([]);
const addUserHandeler=(formData)=>{
  console.log(formData);
  setUserData((prevState)=>{
    return[...userData,formData]
  })
  console.log(userData)
}
  return (
    <div>  
      <AddUsers onAddUser={addUserHandeler}/>
      <UserList userData={userData}/>
    </div>
  );
}

export default App;
