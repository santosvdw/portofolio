import '../scss/projects.scss';
// import ProjectCard from './ProjectCard';


// GH user data

const githubUrl: string = 'https://api.github.com/users/santosvdw/repos'

const getGitHubUserData = async () => {
  const response = await fetch(githubUrl);
  const jsonData = await response.json();
  let projects: any = []
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].size > 5000) {
        projects = [...projects, jsonData[i]]
        Projects(jsonData[i])
      }
    }
};

getGitHubUserData()

export default function Projects(data: any) {
    console.log(data)
    return <section id='projects'></section>
}