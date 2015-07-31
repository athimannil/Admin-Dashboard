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
			.when('/insure', {
				templateUrl: 'template/insure.html',
				controller: 'insureController'
			})
			.when('/expense', {
				templateUrl: 'template/expense.html',
				controller: 'expenseController'
			})
			.when('/income', {
				templateUrl: 'template/income.html',
				controller: 'incomeController'
			})
			.when('/cash', {
				templateUrl: 'template/cash.html',
				controller: 'cashController'
			})
			.when('/rent', {
				templateUrl: 'template/rent.html',
				controller: 'rentController'
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
				{page: "expense", title: "Expenses", icon: "credit-card"},
				{page: "income", title: "Income", icon: "puzzle-piece"},
				{page: "cash", title: "Cash", icon: "money"},
				{page: "insure", title: "Insurance", icon: "ambulance"},
				{page: "phonebook", title: "Phone book", icon: "book"},
				{page: "employee", title: "Employee", icon: "users"},
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

		$scope.editmode = false;
		$scope.deleteitem = function (delItem) {
			$scope.items.splice(delItem, 1);
			// alert(delItem);
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
		$scope.projectedit = false;
		$scope.curProject = {};
		$scope.newproject = {};
		$scope.wageedit = false;
		$scope.curwage = {};
		$scope.newwage = {};
		$scope.projects = [
			{
				"id": 1,
				"name": "First project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approxamount": 99900,
				"startdate": "12-Jan-1962",
				"enddate": "31-March-2015",
				"wages":[
					{
						"id": 1,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus quod velit molestiae aliquam accusantium possimus corporis voluptatibus ratione deserunt, facilis, magnam veritatis libero. Doloremque quas voluptatibus laudantium, nisi alias.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee": {
								"id":1,
								"title":"Mr.",
								"name":"maanu",
								"description":"wiring"
						}
					},{
						"id": 2,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vero modi, deserunt sed vel voluptatibus laborum dolores ad ea inventore, iste harum. Consequatur iste aliquid, eos ipsa ea enim sapiente!",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 3,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloribus dolor harum, odio odit iusto deserunt tempora et, atque, maxime a doloremque sequi praesentium provident laboriosam officia magnam error animi?",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 4,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam molestias ullam quas impedit dolore dolorum at, itaque repudiandae consequatur quod, nesciunt. Magnam esse numquam rerum alias iste, consequuntur? Hic!",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 5,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repudiandae quidem odio hic quasi molestiae eos explicabo illum, amet ipsam alias quae dolor veniam, quos sapiente nemo! Perspiciatis, voluptatum, incidunt.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 6,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus fugit sapiente quae totam voluptates nobis, culpa iste mollitia, quis sit tempore consectetur recusandae nesciunt magni optio ratione voluptate ab, quod.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 7,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente itaque, aspernatur ratione nihil accusantium placeat fugit odio beatae exercitationem quod, voluptate illo error magni ullam blanditiis, hic maxime reiciendis obcaecati!",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 8,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus accusantium perferendis nam velit voluptas ut sapiente adipisci, sed et in voluptate aut autem repudiandae harum minima unde reiciendis fugit. Quia?",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 9,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nobis nulla sint itaque facilis fugit veniam nesciunt hic, quo dolorem necessitatibus ad, repellendus, tempore suscipit fugiat! Sapiente dignissimos sunt, officia.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 10,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae nesciunt molestiae necessitatibus quis veniam consectetur repudiandae, blanditiis quia natus unde est totam id at temporibus, porro deleniti suscipit ipsa.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					},{
						"id": 11,
						"name": "Basheer Shah",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quo tempora debitis reiciendis quasi illo voluptatibus. Nemo dolores, ea quam modi ut, mollitia ducimus minus recusandae veniam illum, asperiores, natus.",
						"amount": "852.00",
						"date": "12-Jan-2015",
						"employee_id": {}
					}
				]
			},{
				"id": 2,
				"name": "Second project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approxamount": 12300,
				"startdate": "12-Jan-1962",
				"enddate": "31-Feb-2015",
				"wages":[]
			},{
				"id": 3,
				"name": "Third project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approxamount": 6500,
				"startdate": "12-July-1962",
				"enddate": "31-Jun-2015",
				"wages":[]
			},{
				"id": 4,
				"name": "Fourth project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approxamount": 10000,
				"startdate": "12-Jan-1962",
				"enddate": "31-Dec-2015",
				"wages":[]
			},{
				"id": 5,
				"name": "Last project",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aliquam accusamus similique quos culpa, provident sequi blanditiis temporibus cupiditate voluptatem animi officia mollitia corrupti eum sed commodi alias rem facilis!",
				"approxamount": 9500,
				"startdate": "12-Jan-1962",
				"enddate": "31-Dec-2015",
				"wages":[]
			}
		];
		$scope.employees = [
			{
				"id": 1,
				"tite": "Interdum LLP",
				"name": "maanu",
				"description": "P.O. Box 781, 6782 Dui. St."
			},
			{
				"id": 2,
				"tite": "Consequat Corporation",
				"name": "Charles Mercer",
				"description": "Ap #680-660 Condimentum St."
			},
			{
				"id": 3,
				"tite": "Eu Euismod Industries",
				"name": "Sean Carey",
				"description": "P.O. Box 851, 3477 Nulla. Ave"
			},
			{
				"id": 4,
				"tite": "Id Blandit At Inc.",
				"name": "Garth Durham",
				"description": "Ap #895-1919 Et Av."
			},
			{
				"id": 5,
				"tite": "Elit Pede Malesuada Corporation",
				"name": "Bevis Mcbride",
				"description": "4143 Tincidunt Street"
			},
			{
				"id": 6,
				"tite": "Sodales Corporation",
				"name": "Fitzgerald Lamb",
				"description": "263 Quis Avenue"
			},
			{
				"id": 7,
				"tite": "Eu Sem Pellentesque Limited",
				"name": "Cadman White",
				"description": "Ap #407-4424 Elit, Road"
			},
			{
				"id": 8,
				"tite": "Non Luctus Foundation",
				"name": "Declan Henson",
				"description": "1892 A Av."
			},
			{
				"id": 9,
				"tite": "Dignissim Pharetra Nam Industries",
				"name": "Tarik Rhodes",
				"description": "1734 Ac Ave"
			},
			{
				"id": 10,
				"tite": "Nam Tempor Diam Associates",
				"name": "Dorian Schneider",
				"description": "976-5331 Molestie. Street"
			},
			{
				"id": 11,
				"tite": "Magna Nec Institute",
				"name": "Hakeem Pierce",
				"description": "806-3934 Sit St."
			},
			{
				"id": 12,
				"tite": "Conubia Associates",
				"name": "Len York",
				"description": "388-9283 In Avenue"
			},
			{
				"id": 13,
				"tite": "Vitae Diam Proin Consulting",
				"name": "Marvin Mccarty",
				"description": "Ap #973-1807 Nisi St."
			},
			{
				"id": 14,
				"tite": "Nibh Associates",
				"name": "Reese Eaton",
				"description": "528-2457 Amet Road"
			},
			{
				"id": 15,
				"tite": "Donec Tempus LLP",
				"name": "Devin Marsh",
				"description": "5115 In Av."
			},
			{
				"id": 16,
				"tite": "Enim LLC",
				"name": "Colorado Haynes",
				"description": "P.O. Box 244, 6431 Amet, St."
			}
		];
		$scope.initialProject = function (projectIndex) {
			$scope.projectedit = false;
			$scope.curProject = $scope.projects[projectIndex];
		};
		$scope.openProject = function(thisProject){
			$scope.projectedit = false;
			$scope.curProject = thisProject;
		};
		$scope.newProject = function (argument) {
			$scope.projectedit = true;
			$scope.curProject = {};
			$scope.newproject = {};
		};
		$scope.editProject = function (thisproject) {
			$scope.projectedit = true;
			$scope.curProject = thisproject;
			$scope.newproject = angular.copy(thisproject);
		};
		$scope.addProject = function () {
			if ($scope.curProject.id) {
				angular.extend($scope.curProject,$scope.curProject,$scope.newproject);
				$scope.initialProject($scope.projects.indexOf($scope.curProject));
			}else{
				$scope.newproject.id = $scope.projects.length+1;
				$scope.projects.push($scope.newproject);
				$scope.initialProject($scope.projects.indexOf($scope.newproject));
			}
			$scope.newproject = {};
			$scope.projectedit = false;
		};
		$scope.deleteProject = function (item) {
			var confirmDelete = confirm("Do you really need to delete the " + item.name + " ?");
			if (confirmDelete) {
				var wage = $scope.projects.indexOf(item);
				$scope.projects.splice(wage, 1);
				$scope.initialProject(0);
			}
		};
		$scope.cancelProject = function () {
			$scope.projectedit = false;
			$scope.newproject = {};
			$scope.initialProject(0);
		};


		// Wage part
		$scope.newWage = function (argument) {
			$scope.wageedit = true;
			$scope.newwage = {};
		};
		$scope.editWage = function (thiswage) {
			$scope.wageedit = true;
			$scope.curwage = thiswage;
			$scope.newwage = angular.copy(thiswage);
		};
		$scope.addWage = function () {
			var curIndex = $scope.projects.indexOf($scope.curProject);
			if ($scope.curwage.id) {
				angular.extend($scope.curwage,$scope.curwage,$scope.newwage);
				$scope.curwage = {};
			}else{
				$scope.newwage.id = $scope.projects[curIndex].wages.length+1;
				$scope.projects[curIndex].wages.push($scope.newwage);
			}
			$scope.newwage = {};
			$scope.wageedit = false;
		};
		$scope.deleteWage = function (item) {
			var curIndex = $scope.projects.indexOf($scope.curProject);
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var wage = $scope.projects[curIndex].wages.indexOf(item);
				$scope.projects[curIndex].wages.splice(wage, 1);
			}
		};
		$scope.cancelWage = function () {
			$scope.wageedit = false;
			$scope.curwage = {};
		};

		$scope.expenseedit = false;
		$scope.newexpense = {};
		$scope.curExpense = {};
		$scope.expenses = [
			{
				"id": 1,
				"name": "Warren Phillips",
				"amount": "37.47",
				"date": "12/11/2015",
				"description": "blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan"
			}, {
				"id": 2,
				"name": "Declan Ayala",
				"amount": "29.18",
				"date": "12/17/2014",
				"description": "Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras"
			}, {
				"id": 3,
				"name": "Ivana Bell",
				"amount": "88.53",
				"date": "11/20/2014",
				"description": "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla."
			}, {
				"id": 4,
				"name": "Brennan Noel",
				"amount": "17.76",
				"date": "02/06/2015",
				"description": "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis"
			}, {
				"id": 5,
				"name": "Thomas Tran",
				"amount": "29.59",
				"date": "08/20/2014",
				"description": "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare."
			}, {
				"id": 6,
				"name": "Tucker Bolton",
				"amount": "66.69",
				"date": "12/09/2014",
				"description": "et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum."
			}, {
				"id": 7,
				"name": "Medge Mullen",
				"amount": "23.78",
				"date": "10/17/2015",
				"description": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et"
			}, {
				"id": 8,
				"name": "Morgan Merritt",
				"amount": "54.09",
				"date": "04/10/2016",
				"description": "Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et,"
			}, {
				"id": 9,
				"name": "Janna Casey",
				"amount": "22.61",
				"date": "08/05/2015",
				"description": "eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum"
			}, {
				"id": 10,
				"name": "Buffy Best",
				"amount": "59.98",
				"date": "05/06/2015",
				"description": "lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna."
			}, {
				"id": 11,
				"name": "Brielle Newman",
				"amount": "52.26",
				"date": "04/16/2016",
				"description": "placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis."
			}, {
				"id": 12,
				"name": "Julie James",
				"amount": "6.38",
				"date": "08/15/2014",
				"description": "placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque"
			}, {
				"id": 13,
				"name": "Shaine Barnett",
				"amount": "0.04",
				"date": "09/29/2014",
				"description": "laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed"
			}, {
				"id": 14,
				"name": "Genevieve Underwood",
				"amount": "50.71",
				"date": "09/24/2015",
				"description": "consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper"
			}, {
				"id": 15,
				"name": "Adam Villarreal",
				"amount": "18.48",
				"date": "04/06/2016",
				"description": "nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris"
			}
		];
		$scope.newExpense = function (argument) {
			$scope.expenseedit = true;
			$scope.newexpense = {};
		};
		$scope.editExpense = function (thisExpense) {
				$scope.expenseedit = true;
				$scope.curExpense =  thisExpense;
				$scope.newexpense = angular.copy(thisExpense);
		};
		$scope.addExpense = function () {
			if ($scope.curExpense.id) {
				angular.extend($scope.curExpense, $scope.curExpense, $scope.newexpense);
			} else{
				$scope.newexpense.id = $scope.expenses.length + 1;
				$scope.expenses.push($scope.newexpense);
			}
			$scope.expenseedit = false;
			$scope.newexpense = {};
		};
		$scope.deleteExpense = function (item) {
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var curIndex = $scope.expenses.indexOf(item);
				$scope.expenses.splice(curIndex, 1);
			}
		};
		$scope.cancelExpense = function () {
			$scope.expenseedit = false;
			$scope.newexpense = {};
		};
	});
	app.controller('insureController', function($scope){
		$scope.insureedit = false;
		$scope.newinsure = {};
		$scope.curinsure = {};
		$scope.insures = [
			{
				"id": 1,
				"name": "Tempor Erat Limited",
				"term": "luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae",
				"description": "orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec",
				"amount": "7.99",
				"nominee": "Carolyn Mooney",
				"premiumamount": "8.90",
				"date": "10/26/2014",
				"agentname": "Tyler",
				"agentphone": "0321 001 4068"
			},
			{
				"id": 2,
				"name": "Dolor Tempus Incorporated",
				"term": "vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor",
				"description": "est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin",
				"amount": "1.63",
				"nominee": "Lesley Mcmillan",
				"premiumamount": "1.80",
				"date": "02/21/2015",
				"agentname": "Lamar",
				"agentphone": "(018792) 75588"
			},
			{
				"id": 3,
				"name": "Elit Pharetra Limited",
				"term": "Nulla tempor augue",
				"description": "Integer in",
				"amount": "7.49",
				"nominee": "Brooke Hinton",
				"premiumamount": "2.08",
				"date": "11/21/2014",
				"agentname": "Harlan",
				"agentphone": "07624 619629"
			},
			{
				"id": 4,
				"name": "Sit Amet Incorporated",
				"term": "nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede",
				"description": "torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor",
				"amount": "3.45",
				"nominee": "Anjolie Greene",
				"premiumamount": "3.64",
				"date": "12/07/2014",
				"agentname": "Eagan",
				"agentphone": "0800 564723"
			},
			{
				"id": 5,
				"name": "Risus Odio Auctor Consulting",
				"term": "ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas",
				"description": "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
				"amount": "2.03",
				"nominee": "Anne Wilder",
				"premiumamount": "0.09",
				"date": "02/04/2015",
				"agentname": "Moses",
				"agentphone": "0800 1111"
			},
			{
				"id": 6,
				"name": "Hendrerit Donec Foundation",
				"term": "elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
				"description": "pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel,",
				"amount": "2.62",
				"nominee": "Daphne Holden",
				"premiumamount": "1.11",
				"date": "06/22/2015",
				"agentname": "Tad",
				"agentphone": "07641 895244"
			},
			{
				"id": 7,
				"name": "Nascetur Ridiculus LLC",
				"term": "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis",
				"description": "senectus et netus et",
				"amount": "5.66",
				"nominee": "Hedwig Page",
				"premiumamount": "8.71",
				"date": "06/16/2016",
				"agentname": "Odysseus",
				"agentphone": "(0110) 748 0865"
			},
			{
				"id": 8,
				"name": "Sit Amet Incorporated",
				"term": "quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
				"description": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui,",
				"amount": "6.13",
				"nominee": "Beverly Kemp",
				"premiumamount": "0.92",
				"date": "09/30/2014",
				"agentname": "Basil",
				"agentphone": "0819 696 3637"
			},
			{
				"id": 9,
				"name": "Augue Eu Tellus Institute",
				"term": "eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at,",
				"description": "diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque.",
				"amount": "4.61",
				"nominee": "Claire Suarez",
				"premiumamount": "8.54",
				"date": "05/15/2015",
				"agentname": "Garth",
				"agentphone": "0845 46 42"
			},
			{
				"id": 10,
				"name": "Egestas Sed Pharetra LLP",
				"term": "scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci.",
				"description": "eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
				"amount": "0.57",
				"nominee": "Jaquelyn Sexton",
				"premiumamount": "3.18",
				"date": "12/09/2015",
				"agentname": "Michael",
				"agentphone": "(0111) 185 3115"
			},
			{
				"id": 11,
				"name": "Cum Company",
				"term": "Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
				"description": "at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et",
				"amount": "0.52",
				"nominee": "Adara Steele",
				"premiumamount": "9.40",
				"date": "08/22/2014",
				"agentname": "Fulton",
				"agentphone": "0500 642659"
			},
			{
				"id": 12,
				"name": "Non Ante Bibendum Corp.",
				"term": "tincidunt. Donec vitae erat vel pede",
				"description": "enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum",
				"amount": "2.25",
				"nominee": "Lisandra Carpenter",
				"premiumamount": "4.72",
				"date": "11/26/2015",
				"agentname": "August",
				"agentphone": "07624 039818"
			},
			{
				"id": 13,
				"name": "Morbi Neque Tellus Inc.",
				"term": "ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis",
				"description": "luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class",
				"amount": "1.69",
				"nominee": "Scarlet Mcdonald",
				"premiumamount": "6.01",
				"date": "03/04/2016",
				"agentname": "Timon",
				"agentphone": "0800 292 7433"
			},
			{
				"id": 14,
				"name": "Volutpat Nulla Facilisis LLC",
				"term": "Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus",
				"description": "Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit",
				"amount": "9.00",
				"nominee": "Lana Cameron",
				"premiumamount": "0.47",
				"date": "02/25/2015",
				"agentname": "Raja",
				"agentphone": "055 2778 4618"
			},
			{
				"id": 15,
				"name": "Eget Metus Company",
				"term": "vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
				"description": "orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec",
				"amount": "1.83",
				"nominee": "Kevyn Chandler",
				"premiumamount": "6.36",
				"date": "05/12/2015",
				"agentname": "Basil",
				"agentphone": "0342 128 3837"
			}
		];
		$scope.newInsure = function () {
			$scope.insureedit = true;
			$scope.newinsure = {};
		};
		$scope.editInsure = function (thisInsure) {
			$scope.insureedit = true;
			$scope.curinsure = thisInsure;
			$scope.newinsure = angular.copy($scope.curinsure);
		};
		$scope.addInsure = function () {
			if ($scope.newinsure.id) {
				angular.extend($scope.curinsure, $scope.curinsure, $scope.newinsure);
				$scope.curinsure = {};
			}
			$scope.insureedit = false;
		};
		$scope.cancelInsure = function () {
			$scope.insureedit = false;
		};
	});
	app.controller('expenseController', function($scope){
		$scope.expenseedit = false;
		$scope.newexpense = {};
		$scope.curExpense = {};
		$scope.expenses = [
			{
				"id": 1,
				"name": "Warren Phillips",
				"amount": "37.47",
				"date": "12/11/2015",
				"description": "blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan"
			}, {
				"id": 2,
				"name": "Declan Ayala",
				"amount": "29.18",
				"date": "12/17/2014",
				"description": "Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras"
			}, {
				"id": 3,
				"name": "Ivana Bell",
				"amount": "88.53",
				"date": "11/20/2014",
				"description": "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla."
			}, {
				"id": 4,
				"name": "Brennan Noel",
				"amount": "17.76",
				"date": "02/06/2015",
				"description": "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis"
			}, {
				"id": 5,
				"name": "Thomas Tran",
				"amount": "29.59",
				"date": "08/20/2014",
				"description": "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare."
			}, {
				"id": 6,
				"name": "Tucker Bolton",
				"amount": "66.69",
				"date": "12/09/2014",
				"description": "et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum."
			}, {
				"id": 7,
				"name": "Medge Mullen",
				"amount": "23.78",
				"date": "10/17/2015",
				"description": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et"
			}, {
				"id": 8,
				"name": "Morgan Merritt",
				"amount": "54.09",
				"date": "04/10/2016",
				"description": "Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et,"
			}, {
				"id": 9,
				"name": "Janna Casey",
				"amount": "22.61",
				"date": "08/05/2015",
				"description": "eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum"
			}, {
				"id": 10,
				"name": "Buffy Best",
				"amount": "59.98",
				"date": "05/06/2015",
				"description": "lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna."
			}, {
				"id": 11,
				"name": "Brielle Newman",
				"amount": "52.26",
				"date": "04/16/2016",
				"description": "placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis."
			}, {
				"id": 12,
				"name": "Julie James",
				"amount": "6.38",
				"date": "08/15/2014",
				"description": "placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque"
			}, {
				"id": 13,
				"name": "Shaine Barnett",
				"amount": "0.04",
				"date": "09/29/2014",
				"description": "laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed"
			}, {
				"id": 14,
				"name": "Genevieve Underwood",
				"amount": "50.71",
				"date": "09/24/2015",
				"description": "consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper"
			}, {
				"id": 15,
				"name": "Adam Villarreal",
				"amount": "18.48",
				"date": "04/06/2016",
				"description": "nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris"
			}
		];
		$scope.newExpense = function (argument) {
			$scope.expenseedit = true;
			$scope.newexpense = {};
		};
		$scope.editExpense = function (thisExpense) {
			$scope.expenseedit = true;
			$scope.curExpense =  thisExpense;
			$scope.newexpense = angular.copy(thisExpense);
		};
		$scope.addExpense = function () {
			if ($scope.curExpense.id) {
				angular.extend($scope.curExpense, $scope.curExpense, $scope.newexpense);
			} else{
				$scope.newexpense.id = $scope.expenses.length + 1;
				$scope.expenses.push($scope.newexpense);
			}
			$scope.expenseedit = false;
			$scope.newexpense = {};
		};
		$scope.deleteExpense = function (item) {
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var curIndex = $scope.expenses.indexOf(item);
				$scope.expenses.splice(curIndex, 1);
			}
		};
		$scope.cancelExpense = function () {
			$scope.expenseedit = false;
			$scope.newexpense = {};
		};
	});
	app.controller('incomeController', function($scope){
		$scope.incomeedit = false;
		$scope.newincome = {};
		$scope.curIncome = {};
		$scope.incomes = [
			{
				"id": 1,
				"name": "Warren Phillips",
				"amount": "37.47",
				"date": "12/11/2015",
				"description": "blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan"
			}, {
				"id": 2,
				"name": "Declan Ayala",
				"amount": "29.18",
				"date": "12/17/2014",
				"description": "Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras"
			}, {
				"id": 3,
				"name": "Ivana Bell",
				"amount": "88.53",
				"date": "11/20/2014",
				"description": "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla."
			}, {
				"id": 4,
				"name": "Brennan Noel",
				"amount": "17.76",
				"date": "02/06/2015",
				"description": "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis"
			}, {
				"id": 5,
				"name": "Thomas Tran",
				"amount": "29.59",
				"date": "08/20/2014",
				"description": "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare."
			}, {
				"id": 6,
				"name": "Tucker Bolton",
				"amount": "66.69",
				"date": "12/09/2014",
				"description": "et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum."
			}, {
				"id": 7,
				"name": "Medge Mullen",
				"amount": "23.78",
				"date": "10/17/2015",
				"description": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et"
			}, {
				"id": 8,
				"name": "Morgan Merritt",
				"amount": "54.09",
				"date": "04/10/2016",
				"description": "Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et,"
			}, {
				"id": 9,
				"name": "Janna Casey",
				"amount": "22.61",
				"date": "08/05/2015",
				"description": "eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum"
			}, {
				"id": 10,
				"name": "Buffy Best",
				"amount": "59.98",
				"date": "05/06/2015",
				"description": "lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna."
			}, {
				"id": 11,
				"name": "Brielle Newman",
				"amount": "52.26",
				"date": "04/16/2016",
				"description": "placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis."
			}, {
				"id": 12,
				"name": "Julie James",
				"amount": "6.38",
				"date": "08/15/2014",
				"description": "placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque"
			}, {
				"id": 13,
				"name": "Shaine Barnett",
				"amount": "0.04",
				"date": "09/29/2014",
				"description": "laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed"
			}, {
				"id": 14,
				"name": "Genevieve Underwood",
				"amount": "50.71",
				"date": "09/24/2015",
				"description": "consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper"
			}, {
				"id": 15,
				"name": "Adam Villarreal",
				"amount": "18.48",
				"date": "04/06/2016",
				"description": "nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris"
			}
		];
		$scope.newIncome = function (argument) {
			$scope.incomeedit = true;
			$scope.newincome = {};
		};
		$scope.editIncome = function (thisIncome) {
			$scope.incomeedit = true;
			$scope.curIncome =  thisIncome;
			$scope.newincome = angular.copy(thisIncome);
		};
		$scope.addIncome = function () {
			if ($scope.curIncome.id) {
				angular.extend($scope.curIncome, $scope.curIncome, $scope.newincome);
			} else{
				$scope.newincome.id = $scope.incomes.length + 1;
				$scope.incomes.push($scope.newincome);
			}
			$scope.incomeedit = false;
			$scope.newincome = {};
		};
		$scope.deleteIncome = function (item) {
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var curIndex = $scope.incomes.indexOf(item);
				$scope.incomes.splice(curIndex, 1);
			}
		};
		$scope.cancelIncome = function () {
			$scope.incomeedit = false;
			$scope.newincome = {};
		};
	});
	app.controller('cashController', function($scope){
		// Debit part
		$scope.debitedit = false;
		$scope.newdebit = {};
		$scope.curDebit = {};
		$scope.cashdebits = [
			{
			    "id": 1,
			    "amount": "87 259",
			    "date": "11-30-2014",
			    "description": "at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare,"
			}, {
			    "id": 2,
			    "amount": "39 467",
			    "date": "03-31-2015",
			    "description": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec"
			}, {
			    "id": 3,
			    "amount": "19 932",
			    "date": "07-01-2015",
			    "description": "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi"
			}, {
			    "id": 4,
			    "amount": "64 077",
			    "date": "10-20-2015",
			    "description": "pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget"
			}, {
			    "id": 5,
			    "amount": "56 845",
			    "date": "11-01-2015",
			    "description": "volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et"
			}, {
			    "id": 6,
			    "amount": "94 624",
			    "date": "03-06-2015",
			    "description": "lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames"
			}, {
			    "id": 7,
			    "amount": "9 758",
			    "date": "10-12-2015",
			    "description": "Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae"
			}, {
			    "id": 8,
			    "amount": "91 228",
			    "date": "11-26-2015",
			    "description": "sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt"
			}, {
			    "id": 9,
			    "amount": "49 978",
			    "date": "04-30-2015",
			    "description": "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit"
			}, {
			    "id": 10,
			    "amount": "61 396",
			    "date": "10-08-2014",
			    "description": "blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia."
			}, {
			    "id": 11,
			    "amount": "73 303",
			    "date": "07-03-2015",
			    "description": "ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis"
			}, {
			    "id": 12,
			    "amount": "89 901",
			    "date": "05-11-2015",
			    "description": "sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris"
			}, {
			    "id": 13,
			    "amount": "48 481",
			    "date": "01-04-2016",
			    "description": "tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque"
			}
		];
		$scope.newDebit = function () {
			$scope.debitedit = true;
			$scope.newdebit = {};
		};
		$scope.editDebit = function (thisDebit) {
			$scope.debitedit = true;
			$scope.curDebit =  thisDebit;
			$scope.newdebit = angular.copy(thisDebit);
		};
		$scope.addDebit = function () {
			if ($scope.curDebit.id) {
				angular.extend($scope.curDebit, $scope.curDebit, $scope.newdebit);
			} else{
				$scope.newdebit.id = $scope.cashdebits.length + 1;
				$scope.cashdebits.push($scope.newdebit);
			}
			$scope.debitedit = false;
			$scope.newdebit = {};
		};
		$scope.deleteDebit = function (item) {
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var curIndex = $scope.cashdebits.indexOf(item);
				$scope.cashdebits.splice(curIndex, 1);
			}
		};
		$scope.cancelDebit = function () {
			$scope.debitedit = false;
			$scope.newdebit = {};
		};
		// Credit part
		$scope.creditedit = false;
		$scope.newcredit = {};
		$scope.curCredit = {};
		$scope.cashcredits = [
			{
			    "id": 1,
			    "amount": "87 259",
			    "date": "11-30-2014",
			    "description": "at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare,"
			}, {
			    "id": 2,
			    "amount": "39 467",
			    "date": "03-31-2015",
			    "description": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec"
			}, {
			    "id": 3,
			    "amount": "19 932",
			    "date": "07-01-2015",
			    "description": "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi"
			}, {
			    "id": 4,
			    "amount": "64 077",
			    "date": "10-20-2015",
			    "description": "pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget"
			}, {
			    "id": 5,
			    "amount": "56 845",
			    "date": "11-01-2015",
			    "description": "volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et"
			}, {
			    "id": 6,
			    "amount": "94 624",
			    "date": "03-06-2015",
			    "description": "lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames"
			}, {
			    "id": 7,
			    "amount": "9 758",
			    "date": "10-12-2015",
			    "description": "Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae"
			}, {
			    "id": 8,
			    "amount": "91 228",
			    "date": "11-26-2015",
			    "description": "sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt"
			}, {
			    "id": 9,
			    "amount": "49 978",
			    "date": "04-30-2015",
			    "description": "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit"
			}, {
			    "id": 10,
			    "amount": "61 396",
			    "date": "10-08-2014",
			    "description": "blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia."
			}, {
			    "id": 11,
			    "amount": "73 303",
			    "date": "07-03-2015",
			    "description": "ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis"
			}, {
			    "id": 12,
			    "amount": "89 901",
			    "date": "05-11-2015",
			    "description": "sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris"
			}, {
			    "id": 13,
			    "amount": "48 481",
			    "date": "01-04-2016",
			    "description": "tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque"
			}
		];
		$scope.newCredit = function () {
			$scope.creditedit = true;
			$scope.newcredit = {};
		};
		$scope.editCredit = function (thisCredit) {
			$scope.creditedit = true;
			$scope.curCredit =  thisCredit;
			$scope.newcredit = angular.copy(thisCredit);
		};
		$scope.addCredit = function () {
			if ($scope.curCredit.id) {
				angular.extend($scope.curCredit, $scope.curCredit, $scope.newcredit);
			} else{
				$scope.newcredit.id = $scope.cashcredits.length + 1;
				$scope.cashcredits.push($scope.newcredit);
			}
			$scope.creditedit = false;
			$scope.newcredit = {};
		};
		$scope.deleteCredit = function (item) {
			var confirmDelete = confirm("Do you really need to delete the item ?");
			if (confirmDelete) {
				var curIndex = $scope.cashcredits.indexOf(item);
				$scope.cashcredits.splice(curIndex, 1);
			}
		};
		$scope.cancelCredit = function () {
			$scope.creditedit = false;
			$scope.newcredit = {};
		};
	});
})();
