import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Formevent from './components/event/Formevent';
import Popevent from './components/event/Popevent';
import ServiceList from './components/services/ServiceList';

function App() {
  return (
    <main className="container">
      <Navbar/>
      <Formevent />       
      <ServiceList />
    </main>
  );
}

export default App;