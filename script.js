document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const makeVisible = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(makeVisible, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Manually add specified repositories
    const repos = [
        {
            name: "Sales Dashboard",
            description: "An interactive sales dashboard to visualize sales data.",
            url: "https://heptuene123098.github.io/Sales-dashboard/"
        },
        {
            name: "Rivers State Election",
            description: "A data visualization project on the Rivers State election.",
            url: "https://heptuene123098.github.io/Rivers-State-Election/"
        },
        {
            name: "Flood Prediction",
            description: "A project predicting flood risks using machine learning.",
            url: "https://heptuene123098.github.io/Flood-Prediction/"
        }
    ];

    displayRepos(repos);
});

function displayRepos(repos) {
    const projectsSection = document.getElementById('projects');
    const projectsList = document.createElement('div');
    projectsList.className = 'projects-list';

    repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'repo-item';

        const repoName = document.createElement('h3');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description;

        const repoLink = document.createElement('a');
        repoLink.href = repo.url;
        repoLink.target = '_blank';
        repoLink.textContent = 'View Project';

        repoItem.appendChild(repoName);
        repoItem.appendChild(repoDescription);
        repoItem.appendChild(repoLink);
        projectsList.appendChild(repoItem);
    });

    projectsSection.appendChild(projectsList);
}