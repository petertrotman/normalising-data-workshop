## Update Immutable

Task: Return a new data object where word 'great' in the body of `comment2` in `meetup1` is changed to 'brilliant'.


```JavaScript
const newData = {
  ...data,
  comments: {
    ...comments,
    comment2: {
      ...data.comments.comment2
      body: data.comments.comment2.body.replace('great', 'brilliant'),
    },
  },
};
```
