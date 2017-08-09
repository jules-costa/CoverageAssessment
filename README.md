# Coverage Assessment

[Coverage Assessment live](http://coverageassessment.com/ "Coverage Assessment's Homepage")

Coverage Assessment (CA) is an insurance blogging platform. It is built using Ruby on Rails, Redux, React and HTML/CSS. User passwords are protected using BCrypt. Coverage Assesment is a scalable project that I will continue to develop overtime.

## Features

* Sign up or log in securely, using BCrypt password protection and authentication
* View a feed of posts, and click to read a full post
* Administrative users may create posts, and update or delete authored-posts
* Users may leave comments on posts, and remove authored-comments

### Feed

The site's landing page is a feed of posts. Administrative users have the ability to write posts. Clicking the Ouija logo from anywhere in the site redirects the user to the main story feed.

### Users

I utilized BCrypt's password salting and hashing capabilities to ensure users' password security. The users table stores: `email`, `first_name`, `last_name`, `password_digest` and `session_token`. The original password is never stored, and the `session_token` gives the logged-in user permission to navigate around the site. I created "Auth" and "Protected" routes using the React router to permit only authenticated users to interact with the site.

## Future Development

I will be adding a "Comments" component that will allows users to voice their opinions and questions regarding a certain post. Users will also be able to reply to comments, which will promote discussion threads. There will also be an email form that will direct coverage related questions to the administrative user (my dad). LinkedIn OAuth2.0 will also be implemented down the road.
