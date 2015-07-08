(function(){
// dropdown for Types of visa & Types of accounts
// var app = angular.module('myApp', ['ngRoute']);
var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
	app.config(function($routeProvider, $locationProvider) {
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'template/dashboard.html',
				controller: 'homecontroller'
			})
			.when('/dashboard', {
				templateUrl: 'template/dashboard.html',
				controller: 'dashboardController'
			})
			.when('/ui', {
				templateUrl: 'template/ui.html',
				controller: 'uiController'
			})
			.when('/expense', {
				templateUrl: 'template/expense.html',
				controller: 'expenseController'
			})
			.when('/invoice', {
				templateUrl: 'template/invoice.html',
				controller: 'invoiceController'
			})
			.when('/recur', {
				templateUrl: 'template/recur.html',
				controller: 'recurController'
			})
			.when('/profile', {
				templateUrl: 'template/profile.html',
				controller: 'profileController'
			})
			.when('/settings', {
				templateUrl: 'template/settings.html',
				controller: 'settingsController'
			})
			.when('/login', {
				templateUrl: 'template/login.html',
				controller: 'loginController'
			})
			.when('/banks', {
				templateUrl: 'template/banks.html',
				controller: 'bankController'
			})
			.when('/loan', {
				templateUrl: 'template/loan.html',
				controller: 'loanController'
			})
			.when('/phonebook', {
				templateUrl: 'template/phonebook.html',
				controller: 'phonebookController'
			})
			.when('/employee', {
				templateUrl: 'template/employee.html',
				controller: 'employeeController'
			})
			.when('/note', {
				templateUrl: 'template/note.html',
				controller: 'noteController'
			})
			.when('/project', {
				templateUrl: 'template/project.html',
				controller: 'projectController'
			})
			.otherwise({
				redirectTo: 'template/dashboard.html'
			});
	});
	app.controller('loginController', function($scope){});
	app.controller('homecontroller', function($scope){
		/* paggination */
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.maxSize = 5;
		/* Nav menu */
		$scope.user = {
			firstname: "Basheer",
			lastname: "Shah",
			image: "img/basher.png",
			menu:[
				{page: "dashboard", title: "Dashboard", icon: "dashboard"},
				{page: "banks", title: "Banks", icon: "bank"},
				{page: "loan", title: "Loan", icon: "tags"},
				{page: "project", title: "Project", icon: "briefcase"},
				{page: "phonebook", title: "Phone book", icon: "book"},
				{page: "employee", title: "Employee", icon: "users"},
				{page: "expense", title: "Expenses", icon: "shopping-cart"},
				{page: "invoice", title: "Invoice", icon: "file-text-o"},
				{page: "recur", title: "Reccurring Bills", icon: "dashboard"},
				{page: "profile", title: "My Profile", icon: "user"},
				{page: "settings", title: "Settings", icon: "cogs"},
				{page: "login", title: "Login", icon: "lock"},
				{page: "ui", title: "UI", icon: "bookmark-o"}
			]
		};
		/* End menu */


		// Toggle sede menu
		$scope.menuStatus = false;
		$scope.toggleMenu = function(){
			$scope.menuStatus = $scope.menuStatus === false ? true : false;
		};
		$scope.users = [
			{ id: 1, firstname: 'Basheer', lastname: 'Basheer', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 206.98},
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
		/* Task widget */
		$scope.newTask = {};
		$scope.tasks = [
			{'name': 'I have to do this', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere asperiores at magni! Officia vero sunt, rerum tempore, deserunt illo expedita iure blanditiis deleniti doloremque molestias fuga quod nemo perferendis ipsam. ipsum dolor sit amet kili paari poyi', 'date': '2015-05-18T18:30:00.000Z', 'done': true},
			{'name': 'I have to do that', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corporis commodi voluptate suscipit ratione, ipsa sapiente vitae dolores, veritatis magnam modi reiciendis ullam, officiis inventore facere mollitia ipsam error quam? ipsum dolor sit amet kili paari poyi', 'date': '2014-06-24T18:30:00.000Z', 'done': false},
			{'name': 'He has to do those', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum fugit, dolore inventore minus, labore, voluptas blanditiis corrupti perspiciatis illum velit excepturi voluptates delectus odio assumenda earum maxime molestias minima. ipsum dolor sit amet kili paari poyi', 'date': '2015-07-12T18:30:00.000Z', 'done': true}
		];
		// New task
		$scope.addTask = function(){
			$scope.tasks.push({
				name: $scope.newTask.name,
				detail: $scope.newTask.detail,
				date: $scope.newTask.date,
				done: false
			});
			$scope.newTask = {};
		};
		// Delete task
		$scope.deleteTastk = function (taskIndex) {
			var confirmDelete = confirm("Do you really need to delete the task");
			if (confirmDelete) {
				$scope.tasks.splice(taskIndex, 1);
			}
		};
		/* End task */

		$scope.todolist = [
			{ id: 1, task: 'Some thing to do', asignedto: 1, done: false},
			{ id: 2, task: 'Nothing to do', asignedto: 3, done: true},
			{ id: 3, task: 'Meeting at 9 PM', asignedto: 1, done: false},
			{ id: 4, task: 'Whole cleaning home', asignedto: 5, done: true},
			{ id: 5, task: 'Verude oru rasam', asignedto: 2, done: false}
		];
		$scope.addtodo = function (newToDo) {
			// alert(newToDo);
			$scope.todolist.push({id: 3, task: newToDo, asignedto: $scope.currentuser, done: false});
			// $scope.todolist.push({id: 3, task: $scope.newtodo, asignedto: $scope.currentuser, done: false});
			$scope.newtodo = '';
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
	app.controller('profileController', function($scope){
		// $scope.tabMenu = {profile};
		$scope.menuItems = ["settings-profile","edit-profile","settings-purchase","settings-payment","settings-password"];
		$scope.selectedTab = $scope.menuItems[0];
		$scope.currentTab = function(switchTab){
			// alert(switchTab);
			$scope.selectedTab = switchTab;
		};
	});
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
	app.filter('pagination', function() {
	  return function(input, currentPage, pageSize) {
	    if(angular.isArray(input)) {
	      var start = (currentPage-1)*pageSize;
	      var end = currentPage*pageSize;
	      return input.slice(start, end);
	    }
	  };
	});
	
	app.controller('phonebookController', function($scope, $http){
		$scope.contactMode = {
			activeList : 0,
			editMode : false,
			newMode: false,
			titleList : ['Mr','Mrs','Dr']
		};

		$scope.dynamicField = function(buttonStatus, inputIndex){
			if (buttonStatus) {
				$scope.currentContact.contacts.push({"phone": ""});
			}else{
				$scope.currentContact.contacts.splice(inputIndex,1);
			}
		};
		$scope.removeField = function (argument) {
			$scope.inputs.splice(inputIndex,1);
		};

		$scope.currentContact = {};
		$scope.phoneContacts = {};

		$http.get("./js/phonebook.json")
			.success(function(response) {
				$scope.phoneContacts = response.phonebook;
				$scope.initialContact(0);
			});

		$scope.initialContact = function (contactIndex) {
			if (!contactIndex) {
				contactIndex = 0;
			}
			$scope.selectedContact = {};
			$scope.selectedContact = $scope.phoneContacts[contactIndex];
			$scope.contactMode.activeList = contactIndex;
			$scope.contactMode.editMode = false;
			$scope.contactMode.newMode = false;
		};

		// Take clicked item to the table
		// TODO show item from the json list intead of making new json
		$scope.getDeatils = function (detailsIndex){
			$scope.contactMode.editMode = false;
			$scope.selectedContact = $scope.phoneContacts[detailsIndex];
			$scope.contactMode.activeList = detailsIndex;
		};

		$scope.newContact = function (argument) {
			$scope.contactMode.editMode = true;
			$scope.contactMode.newMode = true;
			// Clear selected JSON list
			$scope.currentContact = {};
			$scope.currentContact.contacts = [{"phone": ""}];
			// Clear current add JSON lsit 
			// $scope.currentContact = {};
		};
		$scope.editContact = function () {
			var currentPersonId = $scope.contactMode.activeList;
			// alert(currentPersonId);
			$scope.contactMode.editMode = true;
			$scope.contactMode.newMode = false;
			// $scope.master= angular.copy(user);
			$scope.currentContact = angular.copy($scope.phoneContacts[currentPersonId]);
		};
		$scope.deleteContact = function (argument) {
			var currentPersonId = $scope.contactMode.activeList;
			var confirmDelete = confirm("Do you really need to delete " + $scope.phoneContacts[currentPersonId].firstname + " " + $scope.phoneContacts[currentPersonId].lastname);
			if (confirmDelete) {
				$scope.phoneContacts.splice(currentPersonId, 1);
				$scope.initialContact(0);
			}
		};

		$scope.addContact = function (argument) {
			if ($scope.contactMode.newMode){
				$scope.phoneContacts.push($scope.currentContact);
				$scope.initialContact($scope.phoneContacts.length - 1);
			}else{
				$scope.phoneContacts[$scope.contactMode.activeList] = angular.copy($scope.currentContact);
				$scope.initialContact($scope.contactMode.activeList);
			}
		};
	});
	app.controller('bankController', function($scope, $http, $log){
		// Accordion
		$scope.status = {
			isFirstOpen: true,
			oneAtATime: true,
			bankedit: false, 
			accountedit: false,
			particularedit: false
		};
		$scope.curBank = {};
		$scope.curAccount = {};
		$scope.curParticular= {};

		$scope.openDiv = 'banks';
		$scope.breadCrumbs = [];

		$scope.myAccount = {};
		// $scope.myStatement = {};
		$scope.openBank = function (){
			$scope.openDiv ='banks';
			$scope.breadCrumbs = [];
			$scope.myBank = {};
			$scope.myAccount = {};
			// $scope.myStatement = {};
		};
		$scope.openAccount = function (bank) {
			$scope.myAccount = {};
			$scope.openDiv = 'accounts';
			if (bank) {
				$scope.curBank = bank;
				$scope.breadCrumbs.push(
					{
						"target": "home", 
						"title": "Home"
					},{
						"target": "account",
						"title": $scope.curBank.name
					}
				);
			} else {
				$scope.breadCrumbs.splice(2, 1);				
			}
		};
		$scope.openStatement = function (account) {
			$scope.openDiv = 'selectedAcc';
			$scope.myAccount = account;
			$scope.breadCrumbs.push({"title": $scope.myAccount.name});
		};
		$scope.switchDiv = function (argument) {
			var targetDiv = argument.target.attributes["data-target"].value;
			if (targetDiv == "home") {
				$scope.openBank();
			} else if(targetDiv == "account"){
				$scope.openAccount();
			}
		};

		// Banks
		$scope.newbank = {};
		$scope.banks =[ 
			{
				"id": 1,
				"name":"PNB",
				"branchcode": "13-35-96",
				"ifsc": 989525621542,
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Manjeri',
				"address": "bank addres line 1 line2 Banks address line 2"
		  },{ 
				"id": 2,
				"name":"ICICI Banks",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": "Calicut",
				"address": "bank addres line 1 line2 Banks address line 2"
		  },{ 
				"id": 3,
				"name":"SBT",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Pandikkad',
				"address": "bank addres line 1 line2 Banks address line 2"
		  }
		];
		$scope.newBank = function () {
			$scope.newbank = {};
			$scope.status.bankedit = true;
		};
		$scope.addBank = function(){
			if ($scope.curBank.id) {
				angular.extend($scope.curBank,$scope.curBank,$scope.newbank);
				$scope.curBank = {};
			}else{
				$scope.newbank.id = $scope.banks.length+1;
				$scope.banks.push($scope.newbank);
			}
			$scope.newbank = {};
			$scope.status.bankedit = false;
		};
    $scope.editBank = function(thisBank) {
    	$scope.status.bankedit = true;
    	$scope.curBank = thisBank;
      $scope.newbank = angular.copy(thisBank);
    };
    $scope.deleteBank = function(item){
			var confirmDelete = confirm("Do you really need to delete " + item.name + "?");
			if (confirmDelete) {
				var bank = $scope.banks.indexOf(item);
				$scope.banks.splice(bank, 1);
			}
    };
    $scope.cancelBank = function () {
			$scope.status.bankedit = false;
			$scope.curBank = {};
    };

		// Accounts
    $scope.newaccount = {};
		$scope.accounts = [
			{
				"id": 1,
				"name": "Basheer Shah",
				"acnumber": 11223344,
				"type": "Savings account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			},{
				"id": 2,
				"name": "Shah Basheer",
				"acnumber": 11223344,
				"type": "Current account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			},{
				"id": 3,
				"name": "Basheer Shah",
				"acnumber": 11223344,
				"type": "Business account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			}
		];
		$scope.newAccount = function(){
			$scope.status.accountedit = true;
			$scope.newaccount = {};
		};
		$scope.addAccount = function(){
			if ($scope.curAccount.id) {
				angular.extend($scope.curAccount,$scope.curAccount,$scope.newaccount);
				$scope.curAccount = {};
			}else{
				$scope.newaccount.id = $scope.accounts.length+1;
				$scope.accounts.push($scope.newaccount);
			}
			$scope.newaccount = {};
			$scope.status.accountedit = false;
		};
    $scope.editAccount = function(thisAccount) {
			$scope.status.accountedit = true;
			$scope.curAccount = thisAccount;
			$scope.newaccount = angular.copy(thisAccount);
    };
		$scope.deleteAccount = function(item){
			var confirmDelete = confirm("Do you really need to delete " + item.name + "?");
			if (confirmDelete) {
				var account = $scope.accounts.indexOf(item);
				$scope.accounts.splice(account, 1);
			}
		};
    $scope.cancelAccount = function () {
			$scope.status.accountedit = false;
			$scope.curAccount = {};
    };

    // Chque
		// TODO edit, add & update
		$scope.cheques =  [
			{
			    "id": 1,
			    "accountno": 87867867,
			    "issuedate": "20-May-2015",
			    "from": 123456,
			    "to": 1234654,
			    "chequerecords": [
				    {
						    "id": 1,
						    "cheque_id": 2,
						    "number": 2222222,
						    "date": "21-Feb-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at, ad deserunt eveniet veritatis, modi voluptatum molestiae excepturi molestias amet asperiores doloribus dolorum aliquid, quaerat praesentium. Id ea, officia mollitia.",
						    "amount": 12000,
						    "deposit": 98521,
						    "balance": 56980
						}, {
						    "id": 2,
						    "cheque_id": 2,
						    "number": 44444444,
						    "date": "22-March-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquid ex numquam aperiam excepturi officia, nihil eum vero consectetur quaerat praesentium iure, iste fugit vel quidem consequatur illo veniam recusandae?",
						    "amount": 6000,
						    "deposit": 1520,
						    "balance": 48000
						}, {
						    "id": 3,
						    "cheque_id": 2,
						    "number": 66666666,
						    "date": "22-March-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, sapiente accusamus libero consequatur beatae enim animi ipsum incidunt voluptatum. Dolores deleniti dolorum omnis repellat quisquam, maxime ex pariatur eveniet necessitatibus.",
						    "amount": 6000,
						    "deposit": 1520,
						    "balance": 48000
						}, {
						    "id": 4,
						    "cheque_id": 2,
						    "number": 88888888,
						    "date": "22-March-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus mollitia nobis aspernatur possimus aut explicabo asperiores? Eveniet error aliquid qui in nihil assumenda officiis, distinctio commodi, enim at, facilis.",
						    "amount": 6000,
						    "deposit": 1520,
						    "balance": 48000
						}
					]
			}, {
			    "id": 2,
			    "accountno": 87867867,
			    "issuedate": "12-June-2015",
			    "from": 123657,
			    "to": 1234752,
			    "chequerecords": [
						{
						    "id": 5,
						    "cheque_id": 1,
						    "number": 66666666,
						    "date": "22-March-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, ipsum. Perspiciatis necessitatibus, officia maxime, itaque ad, impedit, qui sint voluptatibus aperiam cumque eos at quisquam quaerat quidem accusantium consectetur.",
						    "amount": 6000,
						    "deposit": 1520,
						    "balance": 48000
						}, {
						    "id": 6,
						    "cheque_id": 1,
						    "number": 88888888,
						    "date": "22-March-2015",
						    "favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore exercitationem ipsa accusantium deserunt laborum voluptates quis sint quia architecto ad voluptate illum cupiditate, harum ullam earum laboriosam ipsum, at assumenda.",
						    "amount": 6000,
						    "deposit": 1520,
						    "balance": 48000
						}
					]
			}
		];

		// Cards
		// TODO edit, add & update
		$scope.cards = [
			{
				"id": 1,
				"bankid": 999999,
				"type": "VISA",
				"no": "1234 5678 9012 3456",
				"from": "01/06",
				"expiry": "05/18",
				"cvv": 345,
				"name": "Kallayi Basheer Shah"
			},{
				"id": 2,
				"bankid": 888888,
				"type": "Master",
				"no": "3456 7890 1234 5678",
				"from": "06/12",
				"expiry": "07/16",
				"cvv": 678,
				"name": "Shah Basheer"
			},{
				"id": 3,
				"bankid": 777777,
				"type": "VISA",
				"no": "9012 3456 1234 5678",
				"from": "03/10",
				"expiry": "08/17",
				"cvv": 123,
				"name": "Basheer Shah Kallayi"
			}
		];

		// Particulars
		$scope.newparticular = {};
		$scope.particulars = [
			{
				"id": 1,
				"account_id": 1,
				"date": "12-Jan-2015",
				"particuler": "Lorem ipsum dolor sit amet Quia dolorum tenetur recusandae quos, eos reiciendis unessitatibus illum? Quasi, accusamus.",
				"cheque_no": 11111,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 2,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Adipisci aperiam, necessitatibus nesciunt a iste vitae tiis obcaecati quas saepe!",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 3,
				"account_id": 1,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Quo ut molestias recusandae odit nihil quisquam eum id ficiis corporis quidem.",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 4,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Dolore ullam, ut eum. Ut ea, error nemo. Totam cupiditaectus eaque?",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 5,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Ut magnam voluptates quis molestiae dolores odio, ipsa dem eos earum adipisci!",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 6,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Quae atque molestiae eos blanditiis harum est in quod eate omnis ducimus, vitae inventore.",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 7,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Blanditiis reprehenderit pariatur deserunt ullam sunt andis molestiae officiis. Labore recusandae corporis perspiciatis.",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 8,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Sapiente ducimus saepe fugit in, est inventore nulla ofm beatae voluptatibus debitis?",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 9,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Iste error ad iure quod, magni culpa similique placeat  at.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 10,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Accusantium debitis eius, sapiente ducimus. Esse adipisuta, facilis amet minus dicta.",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 11,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Possimus esse cum quis magni, consequuntur, odit? Illum veniam!",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 12,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Suscipit voluptates magnam facere, consequatur inventortione obcaecati possimus, non quam dicta.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 13,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Nostrum ea vero dolorum minima aut, nemo. Facilis quod ntore similique iste officia.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 14,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Adipisci perspiciatis temporibus enim, quidem possimus llitia consequuntur necessitatibus blanditiis similique iure!",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 15,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Enim ducimus molestias ipsum numquam necessitatibus remuga doloremque officiis expedita officia sed?",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 16,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Ad obcaecati a rerum, distinctio repudiandae sed quidemetur, ipsa eligendi.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 17,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Odit laboriosam eaque eveniet inventore dolore laudantiobis natus. Ratione, aspernatur.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 18,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Officia, repellendus voluptates reprehenderit tempore mxcepturi dolorum obcaecati tenetur nobis minus!",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 19,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Animi consequatur numquam eligendi tenetur magni sunt eum architecto, quod!",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 20,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Consectetur harum voluptates illum quisquam, commodi qucupiditate laboriosam possimus distinctio harum atque.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 21,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Incidunt nobis facilis accusantium dolor, corporis cumqollitia pariatur, fugiat omnis?",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 22,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Ipsum illum porro inventore possimus vel at libero assue quos, sint?",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 23,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Ducimus placeat reiciendis, molestias, quod veniam illorerum magni non saepe laboriosam dolor.",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 24,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Temporibus aperiam, fugiat eum ratione necessitatibus s ut nesciunt ducimus quod.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 25,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Quam, a laborum provident hic! Ab, delectus iste officitore, neque, rerum?",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 26,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Assumenda repellat dicta odio nesciunt accusamus nulla ariatur!",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 27,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Dolores tempora hic omnis numquam maxime culpa, deserunumenda, voluptatibus sed consequatur?",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 28,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Error vero consectetur animi repellat enim aut assumendum vero quasi!",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 29,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Sapiente nemo cupiditate amet repellat, id inventore seTotam, est!",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 30,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Possimus asperiores hic magnam voluptate dolore error sgnam illo consequatur molestiae!",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 31,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Dolor nostrum doloribus rerum cupiditate architecto quoiet voluptate! Aut, culpa odit sit.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 32,
				"account_id": 2,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Vel natus cum facilis facere eveniet dolorem. Tempora dstinctio est consequatur repudiandae!",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 33,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Quae eos eius, rem consequuntur voluptatem voluptas eumi, quas doloremque ipsum officia sed.",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 34,
				"account_id": 3,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Saepe quo voluptatum consequuntur quam ullam odio quod dunt molestias cupiditate accusamus tempore.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 35,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Molestiae iste, nesciunt optio laudantium voluptatum, et unde incidunt consequatur earum vel.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 36,
				"account_id": 3,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Alias modi, aliquid cum reiciendis architecto iure ipsu numquam voluptate!",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 37,
				"account_id": 3,
				"date": "22-February-2015",
				"particuler": "Lorem ipsum dolor sit amet Possimus explicabo ipsum, tempore a quod asperiores, quat atque reiciendis? Dolor, non.",
				"cheque_no": 222222,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 38,
				"account_id": 2,
				"date": "14-March-2015",
				"particuler": "Lorem ipsum dolor sit amet Rerum totam voluptas nam ad fuga quisquam quae, sunt no",
				"cheque_no": 33333,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 39,
				"account_id": 2,
				"date": "16-April-2015",
				"particuler": "Lorem ipsum dolor sit amet Saepe, iure laudantium accusantium nihil minima porro aoptio laborum illum quasi iure.",
				"cheque_no": 44444,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			},{
				"id": 40,
				"account_id": 2,
				"date": "30-May-2015",
				"particuler": "Lorem ipsum dolor sit amet Provident harum soluta rem rerum id vel fuga dolorum ni, vero.",
				"cheque_no": 55555,
				"withdraw": 126.01,
				"deposit": 236.00,
				"balance": 953.00
			}
		];
		$scope.addParticular = function(){
			if ($scope.curParticular.id) {
				angular.extend($scope.curParticular,$scope.curParticular,$scope.newparticular);
				$scope.curParticular = {};
			}else{
				$scope.newparticular.id = $scope.particulars.length+1;
				$scope.particulars.push($scope.newparticular);
			}
			$scope.curParticular = {};
			$scope.status.particularedit = false;
		};
		$scope.editParticular = function(thisParticular){
			$scope.status.particularedit = true;
			$scope.curParticular = thisParticular;
			$scope.newparticular = angular.copy(thisParticular);
		};
		$scope.deleteParticular = function(item){
			var confirmDelete = confirm("Do you really need to delete ?");
			if (confirmDelete) {
				var particular = $scope.particulars.indexOf(item);
				$scope.particulars.splice(particular, 1);
			}
		};
		$scope.cancelParticular = function () {
			$scope.status.particularedit = false;
			$scope.curParticular = {};
		};

		$scope.addCard = function(){
			alert("Hello mate");
		};
	});
	app.controller('loanController', function($scope){
		$scope.loanedit = false;
		$scope.curloan = {};
		$scope.emiedit = false;
		$scope.curemi = {};
		$scope.breadCrumbs = [];
		$scope.openDiv = null;
		$scope.openEmi = function (loan) {
			$scope.myEmi = {};
			$scope.openDiv = 'emi';
			$scope.myLoan = loan;
			$scope.breadCrumbs.push("home", $scope.myLoan.name);
		};
		$scope.switchDiv = function () {
			$scope.breadCrumbs = [];
			$scope.openDiv = null;
		};
		$scope.banks =[ 
			{
				"id": 1,
				"name":"PNB",
				"branchcode": "13-35-96",
				"ifsc": 989525621542,
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Manjeri',
				"address": {"line1": "bank addres line 1", "line2": "Banks address line 2"}
		  },{ 
				"id": 2,
				"name":"ICICI Banks",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Calicut',
				"address": {"line1": "bank addres line 1", "line2": "Banks address line 2"}
		  },{ 
				"id": 3,
				"name":"SBT",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Pandikkad',
				"address": {"line1": "bank addres line 1", "line2": "Banks address line 2"}
		  }
		];
		// Loans
		$scope.loans = [
			{
				"id": 1,
				"bank_id": 1,
				"name":"Bike Loan",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores, aut itaque accusantium laborum sapiente.",
				"amount": 10000,
				"paid": 5000,
				"balance": 5000,
				"date": "12-May-2015",
				"closedate":"20-March-2018",
				"interest": "12%",
			},{
				"id": 2,
				"bank_id": 3,
				"name":"Hosing loan",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores, aut itaque accusantium laborum sapiente.",
				"amount": 7000,
				"paid": 3000,
				"balance": 4000,
				"date": "12-May-2015",
				"closedate":"20-March-2018",
				"interest": "11%",
			},{
				"id": 3,
				"bank_id": 2,
				"name":"Vehicle Loan",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores, aut itaque accusantium laborum sapiente.",
				"amount": 50000,
				"paid": 1200,
				"balance": 38000,
				"date": "12-May-2015",
				"closedate":"20-March-2018",
				"interest": "9.5%",
			}
		];
		$scope.newloan = {};
		$scope.newLoan = function(){
			$scope.loanedit = true;
			$scope.newloan = {};
		};
		$scope.editLoan = function (thisloan) {
    	$scope.loanedit = true;
    	$scope.curloan = thisloan;
      $scope.newloan = angular.copy(thisloan);
		};
		$scope.addLoan = function(){
			if ($scope.curloan.id) {
				angular.extend($scope.curloan,$scope.curloan,$scope.newloan);
				$scope.curloan = {};
			}else{
				$scope.newloan.id = $scope.loans.length+1;
				$scope.loans.push($scope.newloan);
			}
			$scope.newloan = {};
			$scope.loanedit = false;
		};
		$scope.deleteLoan = function (item) {
			var confirmDelete = confirm("Do you really need to delete " + item.name + "?");
			if (confirmDelete) {
				var bank = $scope.loans.indexOf(item);
				$scope.loans.splice(bank, 1);
			}
		};
		$scope.cancelLoan = function () {
			$scope.loanedit = false;
			$scope.curloan = {};
		};
		// EMI
		$scope.emis = [
			{
				"id": 1,
				"loan_id": 1,
				"amount": 4500,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi exercitationem vel commodi soluta vero architecto deleniti eaque repellendus maxime velit laborum optio, ab porro eum blanditiis, placeat delectus error!",
				"date": "12-March-1999"
			},{
				"id": 2,
				"loan_id": 1,
				"amount": 900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nihil, sint eligendi voluptatem vel eos dolores quae nulla quasi amet, unde eaque! Perferendis, cumque. Eveniet sit, eligendi iste adipisci aspernatur?",
				"date": "01-May-2015"
			},{
				"id": 3,
				"loan_id": 2,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in labore tenetur expedita consectetur qui, quisquam quo ullam fuga et deleniti, maxime reprehenderit vel enim, quos laborum earum obcaecati unde.",
				"date": "03-February-2015"
			},{
				"id": 3,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error accusamus dolorum reiciendis, beatae dolores. Reiciendis perspiciatis velit voluptatum atque inventore error quidem, impedit architecto. Autem maxime inventore vitae provident quo.",
				"date": "03-February-2015"
			},{
				"id": 4,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem velit mollitia fuga, obcaecati aspernatur quasi officia iste. Quia cumque, modi placeat! Rem culpa magnam nihil ea quisquam sequi, necessitatibus voluptatum.",
				"date": "03-February-2015"
			},{
				"id": 5,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eveniet hic magnam consectetur libero dignissimos ratione et veniam itaque necessitatibus ut illo, molestias, enim? Repellendus quo beatae quidem sed quaerat.",
				"date": "03-February-2015"
			},{
				"id": 6,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla alias quisquam ducimus officia suscipit repudiandae, cumque delectus hic, quibusdam excepturi soluta vel sapiente, numquam repellendus ullam provident. Ullam, minus!",
				"date": "03-February-2015"
			},{
				"id": 7,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure enim numquam doloremque, id saepe minus ex. Asperiores rerum, praesentium adipisci, beatae quo distinctio accusantium, deserunt illum qui delectus cumque.",
				"date": "03-February-2015"
			},{
				"id": 8,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam blanditiis odit quae dolor, magnam possimus perferendis cum, voluptas quis distinctio! Neque ut corrupti quae nemo ipsam assumenda quis, laborum dolor.",
				"date": "03-February-2015"
			},{
				"id": 9,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam animi, mollitia modi reiciendis enim a voluptas distinctio eaque dolor et ullam, obcaecati necessitatibus? Non commodi modi rem nobis pariatur vero!",
				"date": "03-February-2015"
			},{
				"id": 10,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellendus excepturi aut doloribus earum aspernatur assumenda dolore quo sunt quia odio soluta, vel quidem ratione nisi, fuga culpa nam quisquam.",
				"date": "03-February-2015"
			},{
				"id": 11,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, minus cumque sit iure amet commodi dicta explicabo adipisci placeat eos sunt esse vel culpa, molestiae pariatur, aut tenetur cupiditate quibusdam!",
				"date": "03-February-2015"
			},{
				"id": 12,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum natus odit, impedit beatae repudiandae ullam, deserunt adipisci debitis, nihil recusandae minima illum officia consectetur placeat nulla. Laborum nemo labore excepturi.",
				"date": "03-February-2015"
			},{
				"id": 13,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, temporibus, doloribus voluptates voluptas magnam, iure eos quae facere fugiat itaque nesciunt a quam ducimus esse aliquid quas deleniti quisquam, dolor.",
				"date": "03-February-2015"
			},{
				"id": 14,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ea magni ut nihil? Magnam ex placeat, assumenda consectetur harum animi, sapiente culpa dolores quod, pariatur modi minus maiores quo repudiandae.",
				"date": "03-February-2015"
			},{
				"id": 15,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum veritatis quam eveniet natus tempore magnam dignissimos autem dolor ex accusantium sint id, ad, hic commodi sit alias, esse inventore.",
				"date": "03-February-2015"
			},{
				"id": 16,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas debitis asperiores enim, qui perferendis delectus nam. Quo aliquid consequatur error, nam iste, maiores laboriosam totam, cupiditate repellendus autem voluptas!",
				"date": "03-February-2015"
			},{
				"id": 17,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, doloremque! Eligendi molestias ipsum eaque, voluptates adipisci omnis corporis atque animi, minima itaque modi deleniti repellendus quas beatae pariatur non reiciendis!",
				"date": "03-February-2015"
			},{
				"id": 18,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut similique deserunt omnis molestiae expedita repellendus optio ratione, esse ullam at inventore laudantium eius distinctio dolorum, sapiente sint illo animi corrupti!",
				"date": "03-February-2015"
			},{
				"id": 19,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, et consequatur porro illum, placeat saepe voluptatem labore sit illo sequi officia. Incidunt esse quisquam, ex commodi, assumenda quae tempore iure!",
				"date": "03-February-2015"
			},{
				"id": 20,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem est hic non itaque illum saepe eveniet, doloremque minus ipsa nam rerum harum laudantium quos porro. Incidunt perspiciatis consequatur quae error?",
				"date": "03-February-2015"
			},{
				"id": 21,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore veritatis ipsam rem possimus nesciunt eius numquam at facere cupiditate voluptatum quod eveniet alias voluptatem, quibusdam quidem minima optio adipisci, doloremque.",
				"date": "03-February-2015"
			},{
				"id": 22,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempora, doloremque explicabo accusamus, provident labore voluptatibus quibusdam totam suscipit distinctio ea animi dolorum in reprehenderit unde? Illo, voluptatum dolores illum.",
				"date": "03-February-2015"
			},{
				"id": 23,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque praesentium qui nemo expedita autem velit aut repellendus, et, doloremque obcaecati vitae ad quasi maiores ab sit amet quis! Natus, harum!",
				"date": "03-February-2015"
			},{
				"id": 24,
				"loan_id": 3,
				"amount": 1900,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laudantium at cumque animi id perferendis rerum ipsum facilis temporibus quis iste laborum sunt rem corporis, commodi numquam eum totam voluptatum.",
				"date": "03-February-2015"
			}
		];
		$scope.newemi = {};
		$scope.newEmi = function(){
			$scope.emiedit = true;
			$scope.newemi = {};
		};
		$scope.editEmi = function (thisemi) {
    	$scope.emiedit = true;
    	$scope.curemi = thisemi;
      $scope.newemi = angular.copy(thisemi);
		};
		$scope.addEmi = function(){
			if ($scope.curemi.id) {
				angular.extend($scope.curemi,$scope.curemi,$scope.newemi);
				$scope.curemi = {};
			}else{
				$scope.newemi.id = $scope.emis.length+1;
				$scope.emis.push($scope.newemi);
			}
			$scope.newemi = {};
			$scope.emiedit = false;
		};
		$scope.deleteEmi = function (item) {
			var confirmDelete = confirm("Do you really need to delete ?");
			if (confirmDelete) {
				var bank = $scope.emis.indexOf(item);
				$scope.emis.splice(bank, 1);
			}
		};
		$scope.cancelEmi = function () {
			$scope.emiedit = false;
			$scope.curemi = {};
		};
	});
	app.controller('noteController', function(){});
	app.controller('employeeController', function(){});
	app.controller('projectController', function($scope){
		$scope.projectedit = true;
		$scope.projects = [
			{
				"id": 1,
				"name": "First project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approaxamount": 99900,
				"startdate": "12-Jan-1962",
				"enddate": "31-March-2015"
			},{
				"id": 2,
				"name": "Second project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approaxamount": 12300,
				"startdate": "12-Jan-1962",
				"enddate": "31-Feb-2015"
			},{
				"id": 3,
				"name": "Third project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approaxamount": 6500,
				"startdate": "12-July-1962",
				"enddate": "31-Jun-2015"
			},{
				"id": 4,
				"name": "Fourth project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approaxamount": 10000,
				"startdate": "12-Jan-1962",
				"enddate": "31-Dec-2015"
			},{
				"id": 5,
				"name": "Last project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approaxamount": 9500,
				"startdate": "12-Jan-1962",
				"enddate": "31-Dec-2015"
			}
		];
		$scope.newProject = function (argument) {
			$scope.projectedit = true;
		};
		$scope.cancelProject = function () {
			$scope.projectedit = false;
		};
	});
})();