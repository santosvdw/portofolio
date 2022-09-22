// Compontents
import OverlayRight from './components/OverlayLeft';
import OverlayLeft from './components/OverlayRight'
import Nav from './components/Nav'
import Header from './components/Header';
import Code from './components/Code';
import Projects from './components/Projects';
import Footer from './components/Footer';
//
import React from 'react';
import './scss/App.scss';
import './scss/typography.scss';

// GH user data

const githubUrl: string = 'https://api.github.com/users/santosvdw/repos'

const getGitHubUserData = async () => {
  const response = await fetch(githubUrl);
  const jsonData = await response.json();
  App(jsonData);
};

getGitHubUserData()

function App(userData: any) {
  console.log(userData)
  let projects: any = []
  for (let i=0;i<userData.length;i++) {
    if (userData[i].size > 5000) {
      console.log(userData[i])
      projects.push(userData[i])
    }
  }
  let project = projects.map((p: any) => p)
  console.log(project)
  return (
    <div className="App">
      <div className='wrapper'>
        <OverlayRight/>
        <main>
          <Nav />
          <Header />
          <Code />
          <Projects key='projects' data={project} />
        </main>
        <OverlayLeft/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
