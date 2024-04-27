import { useState } from 'react';
import AddUsers from './components/Users/AddUsers'
import UserList from './components/Users/UserList';
import Login from './pages/Login';
import AuthContext from './Context/AuthContext';
import Home from './pages/Home';
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
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
      <Login setIsLoggedIn={setIsLoggedIn} />
          <AddUsers onAddUser={addUserHandeler} />
          <UserList userData={userData} />
            <Home/>
            </AuthContext.Provider>
  );
}

export default App;





