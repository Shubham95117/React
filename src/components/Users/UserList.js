import React, { useContext } from 'react'
import './UserList.css'
import Card from '../UI/Card'
import AuthContext from '../../Context/AuthContext'
const UserList = (props) => {
  const obj = useContext(AuthContext);
  return (
    obj.isLoggedIn&& <Card>
      <ul className='ul'>
       {
          props.userData.map((data)=>{
              return(
              <>
                <li key={data.id}>{`Name:${data.username}  and Age:${data.age} and college is ${data.clg}`}</li>
              </>
              )
          })
       }
      </ul>
      </Card>
  )
}

export default UserList
