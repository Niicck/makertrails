<h6> Database Architecture </h6>

*A copy of our database schema can be found in server/db/schema.xml. Load that data into http://ondras.zarovi.cz/sql/demo/ to view it.*

*When a user first selects a map on mobile, rows are created in the progresses table for each location on that map. The progress table keeps track of whether an individual user has ever reached a location. The 'visited' col in 'progresses' allows for color coordination of the markers on the mobile map view. 'Visited' is a boolean set to either 0 (never visited) or 1 (visited). The database does not track if the user is currently within range of a location. The scope variable 'collision' on the MakerMapController track that.*

*There is a glitch that does not allow for more than 6 locations to be made for a map on the desktop_client. When a user selects a map with more than 6 locations, the progress row creation does not sync. Not every location row gets a corresponding progress row in the database. We circumvented this issue by applying a limit of 6 locations on the map creation page.*
