# Take-Home Challenge (Option 2)

## How to install / start:

- Create a `.env` file within the `server` directory with the value `ANTHROPIC_API_KEY=<key here>`
- Return to root directory of repo and run `./SETUP.sh`. It will install all dependencies for both client and server, and run the development server on both the front-end and back-end.

Some notes:

- I began with the back-end first and was able to build an API I'm pretty proud of! I considered the edge cases of an invalid URL (not Lever) and also a Lever job posting that's expired or not found.

- Unfortunately I did not have the time to integrate the streaming functionality.

- If I had more time I would have:

  - Implemented testing, for both front-end (UI testing with mocked API functions in Vitest) and back-end (route unit testing with Jest)
 
  - Added error handling to the front-end so the API error messages (invalid URL, invalid Lever posting) are appropriately displayed for the user

  - Added styling to the front-end to be responsive

  - Get familiar with SSE and implement the streaming functionality from the back-end to the front-end.

  - Used a non-naive approach to state management in the front-end. Currently, it's simple conditionals with `useState`, but I would have rather used something like `react-query` for a more robust solution

  - Attempted a deploy to a Digital Ocean Droplet

Thanks for the fun challenge!
