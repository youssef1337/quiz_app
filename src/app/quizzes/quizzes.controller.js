angular
	.module('quizApp')
	.controller('quizzesController', quizzesController);

	function quizzesController($scope, $http, toastr, quizzesService, $stateParams) {
		var vm = this;
		vm.quizzes = [];

		quizzesService.getQuizzes($stateParams["id"])
		.then(function(success){
			vm.quizzes = success.data;
		}, function(error){
			toastr.error('Something went Wrong', 'ERROR!');
		});

	vm.addQuiz = function (){
		var data = {
			quiz:{
				title: vm.quiz.title,
				passing_score: vm.quiz.passing_score
			}
		};

		quizzesService.postQuiz($stateParams["id"], data)
		.then(function(success){
			vm.quizzes.push(success.data);
			vm.title = "";
			vm.passing_score = "";
		}, function(error){
			toastr.error('Something went Wrong')
		});

	};

}
