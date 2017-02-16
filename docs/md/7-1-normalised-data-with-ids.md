<!-- .slide: class="lots-of-code" -->

#### Normalised data - by ID

```JSON
{
    "meetups": {
        "byId": {
            "meetup1": {
                "id": "meetup1",
                "name": "EdinburghJS",
                "host": "user1",
                "attendees": ["user1", "user2", "user3"],
                "comments": ["comment1", "comment2"]
            },
            "meetup2": {
                "id": "meetup2",
                "name": "Writing critical medical device firmware in JavaScript",
                "host": "user4",
                "attendees": ["user4"],
                "comments": ["comment3"]
            }
        },
        "allIds": ["meetup1", "meetup2"],
        "sortedIdsByDate": ["meetup2", "meetup1"]
    },
    "users": {
        "byId": {
            "user1": { "id": "user1", "name": "Jamie Sutherland", "tagline": "Web Application Developer" },
            "user2": { "id": "user2", "name": "Peter Trotman", "tagline": "Cats > Dogs" },
            "user3": { "id": "user3", "name": "Brendan Eich", "tagline": "I made a thing" },
            "user4": { "id": "user4", "name": "Boris Grishenko", "tagline": "Database engineer @ Gitlab" }
        },
        "allIds": ["user1", "user2", "user3", "user4"]
    },
    "comments": {
        "byId": {
            "comment1": { "id": "comment1", "author": "user1", "body": "Come to my awesome meetup!" },
            "comment2": { "id": "comment2", "author": "user2", "body": "Yeah it will be great!" },
            "comment3": { "id": "comment3", "author": "user3", "body": "Oh god please no" }
        },
        "allIds": ["comment1", "comment2", "comment3"]
    }
}
```
