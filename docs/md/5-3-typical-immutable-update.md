<!-- .slide: class="lots-of-code" -->
## Update Immutable

Task: Return a new meetups object where word 'great' in the body of `comment2` in `meetup1` is changed to 'brilliant'.

```JavaScript
const meetupIndex  = meetups.findIndex(m => m.id === 'meetup1');
const meetup       = meetups[meetupIndex];
const commentIndex = meetup.comments.findIndex(c => c.id === 'comment2');
const comment      = meetup.comments[commentIndex];

const newComment   = {
  ...comment,
  body: comment.body.replace('great', 'brilliant')
};

const newMeetup    = {
  ...meetup,
  comments: [
    ...meetup.comments.slice(0, commentIndex),
    newComment,
    ...meetup.comments.slice(commentIndex + 1),
  ],
};

const newMeetups   = [
  ...meetups.slice(0, meetupIndex),
  newMeetup,
  ...meetups.slice(meetupIndex + 1),
];
```

