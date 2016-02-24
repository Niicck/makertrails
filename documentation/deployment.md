<h5> How deployment works </h5>

*The mobile and the desktop clients are deployed differently. The desktop client (and server) are deployed on heroku, the mobile view is deployed on ionic, and the database is deployed on mysqlcluster6.*

<h6> Desktop Client and Server </h6>

*Before deploying changes to the desktop_client and server folders, you need to make a few changes.*

1. Make sure the Urls in the desktop_client/factories point to your heroku deployment and not localhost.
2. Add mobile_client to .gitignore. Only the desktop gets deployed to heroku.
3. Make sure the sequelize connection in your database (server/db/db.js) is pointed to your remotely deployed server.

*When the server is synced with an empty database, it will automatically run (server/test/buildMap.js) to add test data.*

<h6> Mobile Client </h6>

*To deploy a change in ionic, follow these steps within the terminal:*

  - cd mobile_client
  - ionic build
  - ionic upload

*Ionic does not upload a server, only the mobile_client folder. The mobile client connects to the server you deploy on heroku. The server you deploy on heroku connects to your deployed database.*
