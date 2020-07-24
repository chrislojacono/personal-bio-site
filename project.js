
const projects = [
  {
    title:"Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux",
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux",
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux",
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
    domString = "";
  for(let i = 0; i < projects.length; i++) {
    domString += `<div class="projects">`;
    domString += `<div class="projects-title">`
    domString += `<h3>${projects[i].title}</h3>`;
    domString += `</div>`
    domString += `<div class="project-image">`
    domString += `<div class="project-image">`
    domString += `<img class="project-picture" href=${projects[i].screenshot} alt="project picture">`;
    domString += `</div>`
    domString += `<div class="project-description"`
    domString += `<p>${projects[i].description}</p>`;
    domString += `</div>`
    domString += `<div class="tech-used"`
    domString += `<p class="tech-used">${projects[i].technologiesUsed}</p>`;
    domString += `</div>`
    domString += '<div class="project-title">'
    domString += `<a class="url" href=${projects[i].url}> Check it out here!</a>`;
    domString += `<a class="github"href=${projects[i].githubUrl}> Github Link</a>`;
    domString += `</div>`
    domString += `  </div>`
  }
//   if (projects[i].available === true) {
    printToDom("projectsPage", domString);
  
};




createProjectCards();
const init1 =() => {
    createProjectCards();
};
init1();
