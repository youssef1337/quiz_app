// Generated by CoffeeScript 1.10.0
(function() {
  angular.module("quizical")
  .factory('QuizzesService', function($http, ENV_VARS){
    var baseUrl = ENV_VARS.baseUrl + "topics/";

    return{
      getQuizzes: function(topicId){
        return $http.get(baseUrl + topicId + "/quizzes.json");
      },
      getQuiz: function(topicId, id){
        return $http.get(baseUrl + topicId + "/quizzes/" + id + ".json");
      },
      postQuiz: function(topicId, data){
        return $http.post(baseUrl + topicId + "/quizzes.json", data)
      },
      deleteQuiz: function(topicId, id){
        return $http.delete(baseUrl + topicId + "/quizzes/" + id + ".json");
      },
      editQuiz: function(topicId, id, data){
        return $http.put(baseUrl + topicId + "/quizzes/" + id + ".json", data)
      }

    }
  });

}).call(this);
