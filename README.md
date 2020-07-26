# Personal Bio Website
This is a website I made to display what I'm currently working on at NSS

#### Build Status
This is a project I will be working on throughout my whole time attending NSS

#### Code Style
This project currently contains HTML5, CSS3, Javascript ES6

#### Screenshots
![Screen Shot 2020-07-26 at 6 29 26 PM](https://user-images.githubusercontent.com/66916708/88492105-fa8ab280-cf6d-11ea-919c-193eb451e59c.png)

![Screen Shot 2020-07-26 at 6 33 02 PM](https://user-images.githubusercontent.com/66916708/88492188-7dac0880-cf6e-11ea-97b8-666c47008996.png)

#### Features
This page contains an array of current projects I'm working on/ have completed and will display them at the bottom of the page depending on if they are available

#### Code Snippet
```const createProjectCards = () => {
  domString = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += `<div class="projects">`;
      domString += `<div class="projects-title">`;
      domString += `<h3>${projects[i].title}</h3>`;
      domString += `</div>`;
      domString += `<div class="project-image">`;
      domString += `<img class="project-picture" src="${projects[i].screenshot}" alt="project picture">`;
      domString += `</div>`;
      domString += `<div class="project-description">`;
      domString += `<p>${projects[i].description}</p>`;
      domString += `</div>`;
      domString += `<div class="tech-used">`;
      domString += `<p class="tech-used">${projects[i].technologiesUsed}</p>`;
      domString += `</div>`;
      domString += '<div class="project-url">';
      domString += `<a class="url" href=${projects[i].url}> Check it out here!</a>`;
      domString += `</div>`;
      domString += `<div class="project-github">`
      domString += `<a class="github"href=${projects[i].githubUrl}> Github Link</a>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  }
  printToDom("projects-page", domString);
};

#### Link
https://chrislojacono.netlify.app/
