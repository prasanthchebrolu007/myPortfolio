"use strict";
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        link: "https://github.com/username/project1"
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        link: "https://github.com/username/project2"
    }
];
const projectList = document.getElementById('project-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(projectItem);
});
