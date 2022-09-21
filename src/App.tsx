import React from 'react';
import './scss/App.scss';
import './scss/typography.scss';

// Compontents
import OverlayRight from './components/OverlayLeft';
import OverlayLeft from './components/OverlayRight'
import Nav from './components/Nav'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <OverlayRight/>
      <main>
        <Nav />
        <Header />
      </main>
      <OverlayLeft/>
    </div>
  );
}

export default App;
