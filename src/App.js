import React from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <div className="App">
      <div className='c1'><CurrentTime city='Sydney'/></div>
      <div className='c2'><CurrentTime city='New York'/></div>
      <div className='c3'><CurrentTime city='London'/></div>
      <div className='c4'><CurrentTime city='Seoul'/></div>
    </div>
  );
}

export default App;
