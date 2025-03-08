import axios from 'axios';

const projectsService = {
    getProjects: () => {
        return axios.get('/api/projects');
    }
};

export default projectsService;
