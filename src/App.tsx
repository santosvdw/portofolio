import React from 'react';
import './scss/App.scss';
import './scss/typography.scss';

// Compontents
import OverlayRight from './components/OverlayLeft';
import OverlayLeft from './components/OverlayRight'
import Nav from './components/Nav'
import Header from './components/Header';
import Code from './components/Code';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <OverlayRight/>
        <main>
          <Nav />
          <Header />
          <Code />
          <Projects />
        </main>
        <OverlayLeft/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
