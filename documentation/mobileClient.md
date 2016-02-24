<h6> Mobile Client Architecture <h6>

*Import Heroku%20Streetcred%20tests.json into Postman to see some sample server requests. You first need to run the login call, get a token, and insert that token into the header of each server call.*

*mobile_client/www/js/controllers contains all of the controllers for the mobile app.*

- LoginController deals with the login page
- SelectMap deals with the select map page
- MakerMap deals with the map view
- LocationInfo deals with the view that pops up when a user arrives in range of a location and taps the "Learn More" footer button.

*You should only need to touch the files in the www folder.*
