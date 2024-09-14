# tempoai

Option 2

Build a frontend that takes a lever posting URL and displays the contents of the job posting in a nice view. The contents are then fed into an LLM API such as OpenAI which returns a predicted salary with an explanation of how it came to that conclusion. The LLM response should be streamed to the user.

This challenge is designed to help us see where your strengths lie, and what role would be the best fit for you at Tempo!

What we want to see:

- What tools you use and how you use them
- Trade-offs: Time vs perfection
- If you get stuck - do you know the right question to ask. You can text me any time - 4163050720.
- Send us a runnable github repo or codebase (zip file)

- Extra Bonus: Send a working deployed server or web app
- Extra Extra Bonus: Send a working chrome extension that shows the salary when browsing a lever posting

There is no strict time limit for this challenge, but we expect a good solution can be done in 2-3 hours. The more time you spend, the significantly higher the bar is for the quality that we expect, so aim for a faster solution that works end to end!

## Initial Notes

- User input: lever posting URL

  - edge cases:
    - maybe expired URL! as in, posting is not up anymore
    - not a Lever URL

api:

- url entered
- on predict salary click

  - fetch the posting
  - parse the html
    - div.posting-headline > h2 (role title)
    - div.location > span (location (multiple possible))
    - div.department (internships, engineering, etc.)
    - div.commitment (ft, pt, etc.)
    - div.workplaceTypes (remote, in-person, hybrid)
    -
  - restructure info and display (save it to an object to pass as props)

  - also send the data to chatGPT API with prompt
  - stream back response
