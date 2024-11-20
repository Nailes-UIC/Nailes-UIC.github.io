const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const projects = document.querySelectorAll('.project');

let currentProject = 0; 


function updateProjects() {
    projects.forEach((project, idx) => {
        project.classList.remove('active');
        if (idx === currentProject) {
            project.classList.add('active'); 
        }
    });


    const container = document.querySelector('.projects-container');
    container.style.transform = `translateX(-${currentProject * 100}%)`;
}


nextBtn.addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length; 
    updateProjects();
});


prevBtn.addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length; 
    updateProjects();
});


updateProjects();


