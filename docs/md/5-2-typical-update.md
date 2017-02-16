## Update in-place

Task: Change the word 'great' in the body of `comment2` in `meetup1` to 'brilliant'.

```JavaScript
const meetup  = meetups.find(m => m.id === 'meetup1');
const comment = meetup.comments[0];
comment.body  = comment.body.replace('great', 'brilliant');
console.log(comment.body);  // Yeah it will be brilliant!
```
