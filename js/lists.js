var phonecatApp = angular.module('listApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('ListController', function PhoneListController($scope) {
  $scope.basics = [
  	{
  		name: 'Eclipse',
  		url: '/tutorials/basics/eclipse.html'
  	},
  	{
  		name: 'Command Line',
  		url: '/tutorials/basics/command_line.html'
  	},
  	{
  		name: '.bashrc',
  		url: '/tutorials/basics/bashrc.html'
  	},
  	{
  		name: 'Vim',
  		url: '/tutorials/basics/vim.html'
  	},
  	{
  		name: 'Github',
  		url: '/tutorials/basics/github.html'
  	}
  ];

  $scope.algo = [

  ];

  $scope.concepts = [

  ];

  $scope.data_structures = [

  ];

  $scope.hacking = [

  ];

  $scope.languages = [

  ];

  $scope.web = [

  ];
  
});