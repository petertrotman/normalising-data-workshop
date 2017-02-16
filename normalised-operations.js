const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/fake-meetup-data.json'));

// Retrieve authorName and commentBody for all comments in meetup 1
const meetup1Comments = data
  .meetups
  .find(meetup => meetup.id === 'meetup1')
  .comments
  .map(comment => ({ commentBody: comment.body, authorName: comment.author.name }));


