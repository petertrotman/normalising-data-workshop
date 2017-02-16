## Read

Task: Get the name of the author of the first comment for `meetup1`.

```JavaScript
const meetup     = data.meetups['meetup1'];
const commentId  = meetup.comments[0];
const comment    = data.comments[commentId];
const authorId   = comment.author;
const author     = data.users[authorId];
const authorName = author.name;
console.log(authorName);  // Jamie Sutherland
```

