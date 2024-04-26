import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import ApiFetched from './components/body/ApiFetched';
import DatabaseData from './components/body/DatabaseData';

function App() {
  
  return (
    <>
    <ApiFetched/>
    <DatabaseData/>
    </>
  );
}

export default App;
