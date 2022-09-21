import React from 'react';
import './scss/App.scss';
import './scss/typography.scss';

// Compontents
import Overlays from './components/Overlays';
import Nav from './components/Nav'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Overlays />
      <Nav />
      <Header />
    </div>
  );
}

export default App;
