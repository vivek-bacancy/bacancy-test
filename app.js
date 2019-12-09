const findPostById = require('./services').findPost;

const inputPostId = parseInt(process.argv[2]); // convert string to int from process
findPostById(inputPostId);


