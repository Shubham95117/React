import { useState } from 'react';
import AddUsers from './components/Users/AddUsers'
import UserList from './components/Users/UserList';
import Login from './pages/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <Login setIsLoggedIn={setIsLoggedIn} />
            {isLoggedIn && (
                <div>
                    <AddUsers onAddUser={addUserHandeler} />
                    <UserList userData={userData} />
                </div>
            )}
    </div>
  );
}

export default App;
