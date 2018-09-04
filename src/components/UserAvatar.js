import React from 'react'
import UserContext from './UserContext'

const UserAvatar = ({ size }) => (
  <UserContext.Consumer>
    {user =>
      <img src={user.avatar}
           alt="user avatar"
           className={`user-avatar ${size || ''}`}
      />}
  </UserContext.Consumer>
)

export default UserAvatar
