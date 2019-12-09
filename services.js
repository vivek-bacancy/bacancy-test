const axios = require('axios');

const getUsers = async () => {
    try {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        return users;
    } catch (err) {
        throw err;
    }
}

const getPosts = async () => {
    try {
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return posts;
    } catch (err) {
        throw err;
    }
}

const findPostById = async postId => {
    return Promise.all([getUsers(), getPosts()]).then(res => {
        const users = res[0].data;
        const posts = res[1].data;
    
        const output = posts.find(p => p.id === postId);
        if (output) {
            const foundUser = users.find(u => u.id === output.userId);
            if (foundUser) {
                console.log('user email id', foundUser.email);
                return foundUser.email;
            } else {
                console.log('USER NOT FOUND');
            }
        } else {
            console.log('NO POST');
            return 'NO POST';
        }
    }).catch(err => console.log('API error'));
};

module.exports.findPost = findPostById;
module.exports.getPosts = getPosts;
module.exports.getUsers = getUsers;
