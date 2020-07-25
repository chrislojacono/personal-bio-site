const projects = [
  {
    title: "Adoption Website",
    screenshot: "/images/adoption.jpg",
    description: "A small design to test event listeners",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github, Event Listeners",
    available: true,
    url: "https://practical-heyrovsky-fba724.netlify.app/",
    githubUrl: "https://github.com/chrislojacono/pet-adoption",
  },
  {
    title: "Adoption Website",
    screenshot: "/images/adoption.jpg",
    description: "A small design to test event listeners",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github, Event Listeners",
    available: true,
    url: "https://practical-heyrovsky-fba724.netlify.app/",
    githubUrl: "https://github.com/chrislojacono/pet-adoption",
  },
  {
    title: "Adoption Website",
    screenshot: "/images/adoption.jpg",
    description: "A small design to test event listeners",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github, Event Listeners",
    available: true,
    url: "https://practical-heyrovsky-fba724.netlify.app/",
    githubUrl: "https://github.com/chrislojacono/pet-adoption",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
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

createProjectCards();
const init1 = () => {
  createProjectCards();
};
init1();
