import React from 'react'
import {
  arrayOf,
  shape,
  number,
  string
} from 'prop-types'

import {
  SideBarContainer,
  SideBarUserList,
  SideBarUser
} from './Sidebar.styles'

const Sidebar = ({ users }) => (
  <SideBarContainer>
    <SideBarUserList>
      {users.map(({ id, name }) => (
        <SideBarUser key={id}>{name}</SideBarUser>
      ))}
    </SideBarUserList>
  </SideBarContainer>
)

Sidebar.propTypes = {
  users: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired
  ).isRequired
}

export default Sidebar
