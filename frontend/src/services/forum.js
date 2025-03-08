import axios from 'axios';

const forumService = {
    getPosts: () => {
        return axios.get('/api/forum/posts');
    }
};

export default forumService;
