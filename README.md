# Coverage Assessment

[Coverage Assessment live](http://coverageassessment.com/ "Coverage Assessment's Homepage")

Coverage Assessment (C.A.) is an insurance blogging platform, originally built using Ruby on Rails, Redux, React and HTML/CSS. I developed this personal project to solidify my understanding of Rails user authentication, the Redux cycle, database and state normalization, and component hierarchy in React.

I attempted to deploy C.A. on Digital Ocean and made many mistakes, which you can read all about [here](https://gist.github.com/jules-costa/e8376b21ef931bc0d8323f0ed053529c). TL;DR - Throughout the process I learned some fundamental lessons: Never operate as root. Always check your versions. Don't guess when it comes to git.

Ultimately, I reached the crux of all of the bugs I had encountered: *A single merge into master with unresolved conflicts.* Nasty! I decided to document my learnings, and create a completely new site using technologies that are better suited for my needs.

Because C.A. is a read-heavy site, I used a [Hugo](https://gohugo.io/) boilerplate and template to save a lot of time on configuration. I gained an introduction to Go, which is a very fast and powerful language that compiles quickly to machine code. I used [Netlify](https://www.netlify.com/) for continuous deployment, and linked the site to a custom domain.

**Visit [coverageassessment.com](http://www.coverageassessment.com) to see the most recent working version, or [view the repository](https://github.com/jules-costa/coverage-assessment-gohugo). Read all about my process for deploying a static Hugo site to Netlify [here](https://gist.github.com/jules-costa/b45c509863cf07360a142ea0707ac35d).**

The following features pertain to the original Coverage Assessment contained in this repository:

### Features

* Sign up or log in securely, using BCrypt password protection and authentication
* View a feed of posts, and click to read a full post
* Administrative users may create posts, and update or delete authored-posts
* Users may leave comments on posts, and remove authored-comments

#### Feed

The site's landing page is a feed of posts. Administrative users have the ability to write posts. Clicking the Coverage Assessment logo from anywhere in the site redirects the user to the main post feed.

#### Users

I utilized BCrypt's password salting and hashing capabilities to ensure users' password security. The users table stores: `email`, `first_name`, `last_name`, `password_digest` and `session_token`. The original password is never stored, and the `session_token` gives the logged-in user permission to navigate around the site. I created "Auth" and "Protected" routes using the React router to permit only authenticated users to interact with the site.
