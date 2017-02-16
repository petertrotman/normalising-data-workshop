## Update duplicate in-place

Task: Change the tagline of `user2` to be 'Dogs > Cats'

```JavaScript
const newTagline = 'Dogs > Cats';

for (const meetup of meetups) {
  if (meetup.host.id === 'user2') {
    meetup.host.tagline = newTagline;
  }

  for (const attendee of meetup.attendees) {
    if (attendee.id === 'user2') {
      attendee.tagline = newTagline;
    }
  }
}
```
