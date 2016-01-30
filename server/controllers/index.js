var models = require('../models');
var utils = require('../helpers/utils.js');

module.exports = {

  mapInfo: {
    get: function (request, response) {},
    post: function (request, response) {
      var newLocations = request.body;
      models.mapInfo.post(newLocations, function (newMap) {
        models.location.get(newMap.dataValues.id, function (locations) {
          response.json({ locations });
        })
      })
    },
    put: function (request, response) {}
  },

  location: {
    get: function (request, response){
     var mapId = request.query.mapId;
     models.location.get(mapId, function (locations) {
        response.json({ locations });
     })
    },
    post: function (request, response){},
    put: function (request, response) {}
  },

  progress: {
    get: function (request, response) {
      var mapId = request.query.mapId;
      var userId = request.query.userId;
      models.location.get(mapId, function (locations) {
        models.progress.get(mapId, locations, userId, function (progresses) {
          var formattedProgress = utils.formatProgress(locations, progresses);
          response.status(200).send(formattedProgress);
        })
      })
    },
    post: function (request, response) {
    },
    put: function (request, response) {
      var progressId = request.body.progressId;
      models.progress.put(progressId, function (result) {
        if(result){
          response.sendStatus(200)
        }else{
          response.sendStatus(400)
        };
      })
    }
  },

  login: {
    get: function (request, response) {},
    post: function (request, response) {
      var username = request.body.username;
      var password = request.body.password;// need to bcrypt
      models.login.post(username, password, function (isUser) {
        // response.redirect('/app') // PROBABLY GOOD IDEA TO REDIRECT TO ROUTE APP (HOW?)
        if (isUser) {
          console.log("isUser: ", isUser)
         response.sendStatus(200);
        }else{
         response.sendStatus(400);
        };
      })
    },
    put: function (request, response) {}
  },

  signup: {
    get: function (request, response) {},
    post: function (request, response) {
      var username = request.body.username;
      var password = request.body.password; // need to bcrypt
      var email = request.body.email;
      models.signup.post(username, password, email, function (user) {
        if(!user){
          response.sendStatus(400);
        }else{
          response.sendStatus(200);
        };
      })
    },
    put: function (request, response) {}
  }



}
