angular
  .module('quizApp')
  .factory('questionsService', function ($http, $stateParams, ENV_VARS) {
    var baseUrl = ENV_VARS.baseUrl + 'topics/' + $stateParams.topicId + '/quizzes/' + $stateParams.quizId;
    var submitQuizUrl = ENV_VARS.baseUrl + 'user_answers.json'

    return {
      getQuestions: function () {
        return $http.get(baseUrl + '/questions.json');
      },
      addQuestion: function (data) {
        return $http.post(baseUrl + '/questions.json', data);
      },
      editQuestion: function (id, data) {
        return $http.patch(baseUrl + '/questions/' + id + '.json', data);
      },
      deleteQuestion: function (id) {
        return $http.delete(baseUrl + '/questions/' + id + '.json');
      },
      submitQuiz: function (data) {
        return $http.post(submitQuizUrl, data);
      }
    };
  });
