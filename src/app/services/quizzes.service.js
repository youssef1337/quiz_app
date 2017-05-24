angular
	.module('quizApp')
	.factory('quizzesService', function($http, ENV_VARS){
		var base_url = ENV_VARS.base_url + "topics/";

		return{
			getQuizzes: function(topicId){
				return $http.get(base_url + topicId + "/quizzes.json");
			},
			getQuiz: function(topicId, id){
				return $http.get(base_url + topicId + "/quizzes/" + id + ".json");
			},
			postQuiz: function(topicId, data){
				return $http.post(base_url + topicId + "/quizzes.json", data)
			}
		}
	});