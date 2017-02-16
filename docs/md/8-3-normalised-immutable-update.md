## Update Duplicate Immutable

Task: Return a new data object where the tagline of `user2` is changed to 'Dogs > Cats'

```JavaScript
const newData = {
  ...data,
  users: {
    ...users,
    user2: {
      ...data.users.user2,
      tagline: 'Dogs > Cats',
    },
  },
};
```
