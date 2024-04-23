import React from 'react'
import './UserList.css'
import Card from '../UI/Card'
const UserList = (props) => {
  return (
    <Card>
    <ul className='ul'>
     {
        props.userData.map((data)=>{
            return(
            <>
              <li key={data.id}>{`Name:${data.username}  and Age:${data.age}.`}</li>
            </>
            )
        })
     }
    </ul>
    </Card>
  )
}

export default UserList
