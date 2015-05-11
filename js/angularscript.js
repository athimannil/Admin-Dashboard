(function(){
// Angular
var app = angular.module('roomApp',['ngRoute']);
    app.config(function($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'dashboard.html',
                controller: 'homecontroller'
            })
            .when('/dashboard', {
                templateUrl: 'dashboard.html',
                controller: 'dashboardController'
            })
            .when('/ui', {
                templateUrl: 'ui.html',
                controller: 'uiController'
            })
            .when('/expense', {
                templateUrl: 'expense.html',
                controller: 'expenseController'
            })
            .when('/invoice', {
                templateUrl: 'invoice.html',
                controller: 'invoiceController'
            })
            .when('/recur', {
                templateUrl: 'recur.html',
                controller: 'recurController'
            })
            .when('/profile', {
                templateUrl: 'profile.html',
                controller: 'profileController'
            })
            .when('/settings', {
                templateUrl: 'settings.html',
                controller: 'settingsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	app.controller('homecontroller', function($scope){
		// Toggle sede menu
		$scope.menuStatus = true;
		$scope.toggleMenu = function(){
			$scope.menuStatus = $scope.menuStatus === false ? true : false;
		};
		$scope.users = [
			{ id: 1, firstname: 'Muhammed', lastname: 'Athimannil', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 206.98},
			{ id: 2, firstname: 'Roshan', lastname: 'Ismail', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 12.23},
			{ id: 3, firstname: 'Muhsin', lastname: 'Manniyil', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 302.12},
			{ id: 4, firstname: 'Mohasin', lastname: 'Moorkote', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 18.21},
			{ id: 5, firstname: 'Usharif', lastname: 'Kalathingal', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 85.85}
		];
		$scope.currentuser = 1;
		$scope.lastspend = 1320.90;

		$scope.items = [
		    { product: '1 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
		    { product: '2 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
		    { product: '3 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
		    { product: '4 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'pending'},
		    { product: '5 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
		    { product: '6 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'approved'},
		    { product: '7 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
		    { product: '8 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
		    { product: '9 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
		    { product: '10 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
		    { product: '10 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
		    { product: '11 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
		    { product: '12 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
		    { product: '13 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},	    
		    { product: '14 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
		    { product: '15 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
		    { product: '16 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
		    { product: '17 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'denied'},
		    { product: '18 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
		    { product: '19 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'approved'},
		    { product: '20 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
		    { product: '21 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
		    { product: '22 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
		    { product: '23 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
		    { product: '24 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
		    { product: '25 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
		    { product: '26 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
		    { product: '27 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},	    
		    { product: '28 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
		    { product: '29 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
		    { product: '30 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
		    { product: '31 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'approved'},
		    { product: '32 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
		    { product: '33 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'denied'},
		    { product: '34 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
		    { product: '35 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
		    { product: '36 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
		    { product: '37 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
		    { product: '38 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
		    { product: '39 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
		    { product: '40 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
		    { product: '42 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},
		    { product: '43 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'denied'},
		    { product: '44 mollit anim', date: '3-November-2014', rate: 45.00, member: 4, status: 'approved'}
		];
		$scope.editmode = false;
		$scope.deleteitem = function (delItem) {
		    $scope.items.splice(delItem, 1);
			// alert(delItem);
		};
		// limit page items
	    $scope.currentpage = 0;
	    $scope.pageSize = 10;
	    $scope.pagelist = function (start, end) {
	        var ret = [];
	    	start = $scope.totalpages();
	        if (!end) {
	            end = start;
	            start = 0;
	        }
	        for (var i = start; i < end; i++) {
	            ret.push(i);
	        }
	        return ret;
	    };
		$scope.prevlist = function () {
			if ($scope.currentpage > 0) {
				$scope.currentpage--;
			}
		};
		$scope.nextlist = function () {
			if($scope.currentpage <= ($scope.items.length/$scope.pageSize - 1)){
				$scope.currentpage++;
			}
		};
		$scope.showlist = function (argument) {
			$scope.currentpage = argument;
		};
		$scope.totalpages = function (argument) {
			return Math.ceil($scope.items.length/$scope.pageSize);
		};
		$scope.addtolist = function () {
			$scope.items.push({product: $scope.newitem.name, date: '03-Dec-2014', rate: $scope.newitem.price, member: $scope.currentuser, status: 'pending' });
			$scope.newitem = '';
			console.log(items);
		};
		// alternative for sum
	    $scope.sum = function(items, prop){
	        return items.reduce(function(a, b){
	            return a + b[prop];
	        }, 0);
	    };
	    // alternative for percentage
	    $scope.percentage = function (num1, num2) {
	    	var num = num1 / num2 * 100;
	    	return num.toFixed(2);
	    };
		$scope.totalamount = $scope.sum($scope.users, 'spent');
		$scope.addrecur = {fixed: true,
			recuringterm:[
				{term: 'Daily'}, 
				{term: 'Weekly'}, 
				{term: 'Monthly'}, 
				{term: 'Yearly'}
			]
		};
		$scope.addrecur.recurterm = $scope.addrecur.recuringterm[2];
		$scope.recurbills = [
			{id: 1, recurterm:'Yearly', fixed: true, type:'Rent deposit', amount: 1200, due: '12-12-2014'},
			{id: 2, recurterm:'Monthly', fixed: true, type:'Council Tax', amount: 321.80, due: '12-12-2014'},
			{id: 3, recurterm:'Monthly', fixed: false, type:'Electricity', amount: 112.20, due: '12-12-2014'},
			{id: 4, recurterm:'Monthly', fixed: false, type:'Gas', amount: 101, due: '12-12-2014'},
			{id: 5, recurterm:'Monthly', fixed: false, type:'Broadband', amount: 23.50, due: '12-12-2014'},
		];
		$scope.recurbill = function () {
			$scope.recurbills.push({recurterm: $scope.addrecur.recurterm, fixed: $scope.addrecur.fixed, type: $scope.addrecur.type, amount: $scope.addrecur.amount, due: $scope.addrecur.due});
			$scope.addrecur.type ='';
			$scope.addrecur.fixed = true;
			$scope.addrecur.amount = '';
			$scope.addrecur.due = '';
		};
	});
	app.controller('dashboardController', function($scope){
		$scope.todolist = [
			{ id: 1, task: 'Some thing to do', asignedto: 1, done: false},
			{ id: 2, task: 'Nothing to do', asignedto: 3, done: true},
			{ id: 3, task: 'Meeting at 9 PM', asignedto: 1, done: false},
			{ id: 4, task: 'Whole cleaning home', asignedto: 5, done: true},
			{ id: 5, task: 'Verude oru rasam', asignedto: 2, done: false}
		];
		$scope.addtodo = function (newToDo) {
			alert(newToDo);
		    $scope.todolist.push({id: 3, task: newToDo, asignedto: $scope.currentuser, done: false});
		    // $scope.todolist.push({id: 3, task: $scope.newtodo, asignedto: $scope.currentuser, done: false});
		    // $scope.newtodo = '';
		    console.log(newToDo);
		};
	});
	app.controller('expenseController', function($scope){});
	app.controller('invoiceController', function($scope){
		$scope.invoicebill = {
			id: 12, invoicefrom: '10-November-2014', invoicedate: '12-December-2014', status:'pending', rent: '1200',
			invoiceprice:[
				{item: 'Rent', price: 1200},
			    {item: 'Mess', price: 50.56},
			    {item: 'Broadband', price: 25.00},
			    {item: 'Electricity', price: 65.87},
			    {item: 'Gas', price: 55.80}
			],
			contribution: 148.62
		};
	});
	app.controller('recurController', function($scope){});
	app.controller('profileController', function($scope){});
	app.controller('settingsController', function($scope){});
	app.filter('percentage', ['$filter', function ($filter) {
		return function (input, decimals) {
			return $filter('number')(input * 100, decimals) + '%';
		};
	}]);
	app.filter('startFrom', function () {
	    return function (input, start) {
	        return input.slice(start);
	    };
	});
	app.filter('sum', function(){
		return function(items, prop){
	        return items.reduce(function(a, b){
	            return a + b[prop];
	        }, 0);
	    };
	});

})();