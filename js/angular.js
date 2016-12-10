var app = angular.module('app', []);

// Define the `PhoneController` controller on the `phonecatApp` module
app.controller('Controller', function Controller($scope) {
  $scope.headers = [
    {
      name: 'Home',
      url: '/index.html'
    },
    {
      name: 'Basics',
      url: '/menus/basics.html'
    },
    {
      name: 'Concepts',
      url: '/menus/concepts.html'
    },
    {
      name: 'Data Structures',
      url: '/menus/data_structures.html'
    },
    {
      name: 'Languages',
      url: '/menus/languages.html'
    },
    {
      name: 'Web',
      url: '/menus/web.html'
    },
    {
      name: 'Hacking',
      url: '/menus/hacking.html'
    },
    {
      name: 'Algo',
      url: '/menus/algo.html'
    },
    {
      name: 'Contact',
      url: '/contact.html'
    }
  ];

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
      url: '/tutorials/concepts/recursion.html'
    }, 
    {
      name: 'Parameters',
      url: '/tutorials/concepts/parameters.html'
    },
    {
      name: 'Hashing',
      url: '/tutorials/concepts/hashing.html'
    },
    {
      name: 'Regex',
      url: '/tutorials/concepts/regex.html'
    }

  ];

  $scope.data_structures = [
    {
      name: 'Arrays',
      url: '/tutorials/data_structures/arrays.html'
    },
    {
      name: 'Linked Lists',
      url: '/tutorials/data_structures/linked_lists.html'
    },
    {
      name: 'ArrayLists',
      url: ''
    },
    {
      name: 'Stacks',
      url: ''
    },
    {
      name: 'Queues',
      url: ''
    },
    {
      name: 'HashMap',
      url: '/tutorials/data_structures/hash_map.html'
    },
    {
      name: 'TreeMap',
      url: '/tutorials/data_structures/tree_map.html'
    },
    {
      name: 'Trees',
      url: '/tutorials/data_structures/trees.html'
    },
    {
      name: 'Binary Search Trees',
      url: '/tutorials/data_structures/binary_search_trees.html'
    },
    {
      name: 'Tries',
      url: '/tutorials/data_structures/tries.html'
    },
    {
      name: 'Heaps',
      url: '/tutorials/data_structures/heaps.html'
    }
  ];

  $scope.hacking = [
    {
      name: 'Lego Robot',
      url: '/tutorials/hacking/lego_robot.html'
    },
    {
      name: 'Ardunio',
      url: '/tutorials/hacking/ardunio.html'
    },
    {
      name: 'Raspberry Pi',
      url: '/tutorials/hacking/raspberry_pi.html'
    },
    {
      name: 'Makey Makey',
      url: '/tutorials/hacking/makey_makey.html'
    },
    {
      name: 'Myo',
      url: '/tutorials/hacking/myo.html'
    }
  ];

  $scope.languages = [
    {
      name: 'Java',
      url: '/tutorials/languages/java.html'
    },
    {
      name: 'C',
      url: '/tutorials/languages/c.html'
    },
    {
      name: 'C++',
      url: '/tutorials/languages/c_plus_plus.html'
    },
    {
      name: 'Perl',
      url: '/tutorials/languages/perl.html'
    },
    {
      name: 'Python',
      url: '/tutorials/languages/python.html'
    }
  ];

  $scope.webs = [
    {
      name: 'HTML',
      url: '/tutorials/web/html.html'
    },
    {
      name: 'CSS',
      url: '/tutorials/web/css.html'
    },
    {
      name: 'JavaScript',
      url: '/tutorials/web/java_script.html'
    },
    {
      name: 'Angular',
      url: '/tutorials/web/angular.html'
    },

  ];

});