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

    // Fetch and display GitHub repositories
    fetchGitHubRepos();
});

function fetchGitHubRepos() {
    const username = 'heptuene123098'; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/$heptuene123098/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(repos => {
            displayRepos(repos);
        })
        .catch(error => console.error('Error fetching repos:', error));
}

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
        repoDescription.textContent = repo.description || 'No description provided';

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.textContent = 'View Repository';

        repoItem.appendChild(repoName);
        repoItem.appendChild(repoDescription);
        repoItem.appendChild(repoLink);
        projectsList.appendChild(repoItem);
    });

    projectsSection.appendChild(projectsList);
}