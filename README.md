# Take-Home Challenge (Option 2)

## How to install / start:

- Run `./SETUP.sh` and it will install all dependencies for both client and server, and run the development server on both the front-end and back-end.

Some notes:

- I began with the back-end first and was able to build an API I'm pretty proud of! I considered the edge cases of an invalid URL (not Lever) and also a Lever job posting that's expired or not found.

- Unfortunately I did not have the time to integrate the streaming functionality and the same level of care for edge cases in the front-end. If I had more time I would have:

  - Implemented testing, for both front-end (UI testing with mocked API functions in Vitest) and back-end (route unit testing with Jest)

  - Added styling to the front-end to be responsive

  - Implemented the streaming from back-end to front-end with the use of SSE.

  - Used a non-naive approach to state management in the front-end. Currently, it's simple conditionals with `useState`, but I would have rather used `react-query` so that I could manage the asynchronous code better

  - Attempted a deploy to a Digital Ocean Droplet

Thanks for the fun challenge!
