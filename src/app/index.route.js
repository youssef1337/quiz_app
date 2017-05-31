// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('alMakinah').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);

    $stateProvider

    // User routes

      .state('user', {
        abstract: true,
        template: '<ui-view>',
        resolve: {
          auth: ['AuthService', function (AuthService) {
            AuthService.authenticateUser()
          }]
        }
      })
      .state('sign_up', {
        url: '/sign_up',
        templateUrl: 'app/views/user/sign_up.html'
      })
      .state('sign_in', {
        url: '/sign_in',
        templateUrl: 'app/views/user/sign_in.html'
      })
      .state('user.topics', {
        url: '/topics',
        templateUrl: 'app/views/user/topics.html'
      })
      .state('user.topic', {
        abstract: true,
        templateUrl: 'app/views/user/topic.html'
      })
      .state('user.topic.quizzes', {
        url: '/topics/:topicId',
        templateUrl: 'app/views/user/quizzes.html'
      })
      .state('user.topic.quiz', {
        url: '/topics/:topicId/quizzes/:quizId',
        templateUrl: 'app/views/user/quiz.html'
      })

      // GameMaker routes

      .state('game_maker', {
        url: '/game_maker',
        abstract: true,
        template: '<ui-view>',
        resolve: {
          auth: ['AuthService', function (AuthService) {
            AuthService.authenticateGameMaker()
          }]
        }
      })
      .state('gm_sign_in', {
        url: '/game_maker/sign_in',
        templateUrl: 'app/views/game-maker/sign_in.html'
      })
      .state('game_maker.topics', {
        url: '/topics',
        templateUrl: 'app/views/game-maker/topics.html'
      })
      .state('game_maker.topic', {
        abstract: true,
        templateUrl: 'app/views/game-maker/topic.html'
      })
      .state('game_maker.topic.quizzes', {
        url: '/topics/:topicId',
        templateUrl: 'app/views/game-maker/quizzes.html'
      })
      .state('game_maker.topic.quiz', {
        url: '/topics/:topicId/quizzes/:quizId',
        templateUrl: 'app/views/game-maker/quiz.html'
      })
      .state('game_maker.topic.quiz.new_question', {
        templateUrl: 'app/views/game-maker/new.html'
      })

      // Error pages

      .state('401', {
        templateUrl: 'app/views/error-pages/401.html'
      })
      .state('403', {
        templateUrl: 'app/views/error-pages/403.html'
      });

    $urlRouterProvider.otherwise('/');
  });

}).call(this);
