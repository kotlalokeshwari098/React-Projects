import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout(){
    return (
        <>
          <Header />
          <Outlet />
        </>
    )
}