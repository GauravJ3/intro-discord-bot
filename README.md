# Intro-discord-bot

# TODO
- [ ] Setup eslint
- [ ] Refactor CONST variables to .env
       - [ ] Create a config object, load from .env
    - [ ] Refactor methods to use a local db like nedb
        - [ ] Listen for new users
            - [ ] Add to db with:
                - CodeOfConduct - false
                - Introduction - false
        - [ ] Listen for emoji reactions to message
            - Update db
        - [ ] Listen for messages in mainChat
            - Update db when a message recieved for new user with length > 40
   - [ ] ON startup
        - [ ] Add all users to the db
           - [ ] Include diaz
           - [ ] Include Intro Message
   
    - [ ] Send a message when a user joins the server.
       - [ ] Log in DB if welcome message has been sent
    - [ ] Send a message when a user is moved into the second group.
    - [ ] Move all users that have not yet posted a message into the "TeamRocket(useless)" role
    - [ ] Deploy!
    - [ ] Stream notify channel
        - [ ] Join this channel to be notified when CJ goes live
    - [ ] Listen for leave server
        - [ ] Remove reactions
    - [ ] Listen for role change
        - Remove from DB

# Resources
## Join a Bot to a server
  * Make a request in browser to 
    * [to-do] update a link
# Deploy on heroku 
  * <https://www.youtube.com/watch?v=24zueyPoHMQ>
  
# discord.js docs/examples
  * <https://discord.js.org/#/docs/main/stable/general/welcome>
  * <https://discordjs.guide/#/popular-topics/miscellaneous-examples>
