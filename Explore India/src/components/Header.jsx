import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/state'>States</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}


