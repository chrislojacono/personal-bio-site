
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
    domString += `  <div class="projects">`;
    domString += `      <h3 class="project-title">${projects[i].title}</h3>`;
    domString += `      <img class="project-picture" href=${projects[i].screenshot} alt="project picture">`;
    domString += `      <p class="project-description">${projects[i].description}</p>`;
    domString += `      <p class="tech-used">${projects[i].technologiesUsed}</p>`;
    domString += `      <a class="url" href=${projects[i].url}> Check it out here!</a>`;
    domString += `      <a class="github"href=${projects[i].githubUrl}> Github Link</a>`;
    domString += `  </div>`
  }
//   if (projects.available === true) {
    printToDom("projectsPage", domString);
  
};




createProjectCards();
const init1 =() => {
    createProjectCards();
};
init1();
