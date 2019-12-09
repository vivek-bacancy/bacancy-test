var expect = require('chai').expect;
const findPost = require('../services').findPost;
const users = require('../services').getUsers;
const posts = require('../services').getPosts;

it('test: list post api', function (done) {
    posts().then(p => {
        expect(typeof (p)).to.equal('object');
        expect(p.data.length).to.not.equal(0)
        done();
    }).catch(err => {

    });
});


it('test: list users api', function (done) {
    users().then(u => {
        expect(typeof (u)).to.equal('object');
        expect(u.data.length).to.not.equal(0)
        done();
    }).catch(err => {
        
    });
});


it('Test: No Post Found', function (done) {
    findPost(5000).then(r => {
        expect(r).to.equal('NO POST');
        done();
    })
});

it('Test: Post with valid postId found', function (done) {
    findPost(38).then(r => {
        expect(r).to.equal('Julianne.OConner@kory.org');
        done();
    })
});