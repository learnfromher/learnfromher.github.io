var app = angular.module('app', []);

// Define the `PhoneController` controller on the `phonecatApp` module
app.controller('Controller', function Controller($scope) {
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

  $scope.algos = [
    {
      name: 'TBD',
      url: '#'
    }
  ];

  $scope.concepts = [
    {
      name: 'Recursion',
      url: '#'
    }, 
    {
      name: 'Parameters',
      url: '#'
    },
    {
      name: 'Hashing',
      url: '#'
    },
    {
      name: 'Regex',
      url: '#'
    }

  ];

  $scope.data_structures = [
    {
      name: 'Arrays',
      url: '#'
    },
    {
      name: 'Linked Lists',
      url: '#'
    },
    {
      name: 'HashMap',
      url: '#'
    },
    {
      name: 'TreeMap',
      url: '#'
    },
    {
      name: 'Trees',
      url: '#'
    },
    {
      name: 'Binary Search Trees',
      url: '#'
    },
    {
      name: 'Tries',
      url: '#'
    },
    {
      name: 'Heaps',
      url: '#'
    }
  ];

  $scope.hacking = [
    {
      name: 'Lego Robot',
      url: '#'
    },
    {
      name: 'Ardunio',
      url: '#'
    },
    {
      name: 'Raspberry Pi',
      url: '#'
    },
    {
      name: 'Makey Makey',
      url: '#'
    },
    {
      name: 'Myo',
      url: '#'
    }
  ];

  $scope.languages = [
    {
      name: 'Java',
      url: '#'
    },
    {
      name: 'C',
      url: '#'
    },
    {
      name: 'C++',
      url: '#'
    },
    {
      name: 'Perl',
      url: '#'
    },
    {
      name: 'Python',
      url: '#'
    }
  ];

  $scope.webs = [
    {
      name: 'HTML',
      url: '#'
    },
    {
      name: 'CSS',
      url: '#'
    },
    {
      name: 'JavaScript',
      url: '#'
    },
    {
      name: 'Angular',
      url: '#'
    },

  ];

});