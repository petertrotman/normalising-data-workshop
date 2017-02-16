## Read

Task: Get the name of the author of the first comment for `meetup1`.

```JavaScript
const meetup     = meetups.find(m => m.id === 'meetup1');
const comment    = meetup.comments[0];
const author     = comment.author;
const authorName = author.name;
console.log(authorName);  // Jamie Sutherland
```
