import './App.css'
import AddPartner from './components/AddPartner'
import Dashboard from './components/Dashboard'
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <>
      <h1 className="title">
        C4C: Projects
      </h1>
      <AddPartner/>
      <Dashboard/>
    </>
  )
}

export default App
