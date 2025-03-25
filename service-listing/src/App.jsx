import React from 'react'
import ServiceCard from './components/ServiceCard'
import './App.css'

function App() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard
        title = "1. Web Development"
        description = "Full Stack Developer"
      />

      <ServiceCard
        title = "2. Graphic Designer"
        description = "Graphic designing apps"
        />
    </div>
  );
};

export default App;
