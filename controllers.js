
function HelloController($scope) {
	$scope.greeting = { text: 'Hello' };
}

function CartController($scope) {
	$scope.items = [
		{title: 'Paint pots', quantity: 8, price: 3.95},
		{title: 'Polka dots', quantity: 17, price: 12.95},
		{title: 'Pebbles', quantity: 5, price: 6.95}
	];

	$scope.bill = {};

	$scope.remove = function (index) {
		$scope.items.splice(index, 1);
	};

	var totalCart = function() {
		var total = 0;
		for (var i = 0, len = $scope.items.length; i < len; i++) {
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}

		$scope.bill.total = total;
		$scope.bill.discount = total > 100 ? 10 : 0;
		$scope.bill.subtotal = total - $scope.bill.discount;
		return total;
	};

	$scope.$watch('items', totalCart, true);
}

function StartUpController($scope) {
	$scope.computeNeeded = function () {
		$scope.needed = $scope.startingEstimate * 10;
	};

	//$scope.$watch('funding.startingEstimate', computeNeeded);
	$scope.requestFunding = function () {
		window.alert("Sorry, please get more customers first.");
	};

	$scope.reset = function () {
		$scope.startingEstimate = 0;
		return false;
	};
}
var students = [{name: 'Mary Contrary', id: '1'},
				{name: 'Jack Sprat', id: '2'},
				{name: 'Jill Hill', id: '3'}];


function StudentListController($scope) {
	$scope.students = students;
	$scope.insertTom = function () {
		$scope.students.splice(1, 0, {name: 'Tom Thumb', id: '4'});
	};
}

function DeathrayMenuController($scope) {
	$scope.menuState.show = false;
	$scope.toggleMenu = function () {
		$scope.menuState.show = !$scope.menuState.show;
	};
// death ray functions left as exercise to reader
	$scope.isError = false;
	$scope.isWarning = false;

	$scope.showError = function () {
		$scope.messageText = 'This is an error!';
		$scope.isError = true;
		$scope.isWarning = false;
	};

	$scope.showWarning = function () {
		$scope.messageText = 'Just a warning. Please carry on.';
		$scope.isWarning = true;
		$scope.isError = false;
	};
}
