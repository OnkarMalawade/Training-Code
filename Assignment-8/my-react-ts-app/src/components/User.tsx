import React from 'react'

type UserProps = {
    id: string
}
const User = (props: UserProps) => {
    console.log(props);
    
  return (
    <div>
      <h1>User : {props.id}</h1>
    </div>
  )
}

export default User
