import React from 'react'
import DashBoard from  "../components/dashboard/Main";
import useAuthState from "../hooks/useDocProtected";

function DashBoards() {
  const {doc} =  useAuthState()
  return (
    <DashBoard admin={doc}/>
  )
}

export default DashBoards;