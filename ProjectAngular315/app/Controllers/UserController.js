app.controller("userController", function ($scope, $http, $q, PhoneService) {


    //////////////////////////////////////////////////////////
    //               NEW XMLHttpRequest CODE                //
    /////////////////////////////////////////////////////////


    // Create a Database to store phoneBook
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.country = "";
    $scope.city = "";
    $scope.phoneHome = "";
    $scope.phoneCell = "";
    $scope.editMode = false; //Flag for editing. FALSE = not editing
    $scope.currIndex = "";  //ID of the current ID being edited
    $scope.phoneBook = []; // holds all Contacts

    // Connection to the GET Functions
    $scope.tempPhone = PhoneService.phoneData
    function fetchAllContacts() {
        PhoneService.phoneData().then(function (data) {
            $scope.tempPhone = data;
        }, function () {
            // Error
        })
    };
    fetchAllContacts();

    // Click event for the view
    $scope.phoneAddBtn = function () {
        console.log($scope.firstName, $scope.lastName, $scope.phoneHome, $scope.phoneCell, $scope.country, $scope.city);

        var objToPost = { firstName: $scope.firstName, lastName: $scope.lastName, phoneHome: $scope.phoneHome, phoneCell: $scope.phoneCell, country: $scope.country, city: $scope.city }

        PhoneService.doAddData(objToPost).then(function (data) {
            // notify user of success
            console.log("Success", data);
            fetchAllContacts();
        }, function () {
            // error
            console.log('doAddData Error');
        })
    };

    //Edit 
    // populate the input fields & components
    $scope.phoneEditBtn = function (index) {
        var currObj = $scope.tempPhone[index]
        console.log(index, currObj);
        $scope.editMode = true;
        $scope.currIndex = currObj.Id
        $scope.firstName = currObj.firstName;
        $scope.lastName = currObj.lastName;
        $scope.phoneHome = currObj.phoneHome;
        $scope.phoneCell = currObj.phoneCell;
        $scope.country = currObj.country;
        $scope.city = currObj.city;
        $scope.editMode = true;
    }

    // SAVE the new edits
    $scope.phoneSaveBtn = function () {
        var objToPost = { firstName: $scope.firstName, lastName: $scope.lastName, phoneHome: $scope.phoneHome, phoneCell: $scope.phoneCell, country: $scope.country, city: $scope.city }
        PhoneService.doSaveData(objToPost, $scope.currIndex).then(function () {
            console.log("UPDATE success");
            $scope.editMode = false;
        }, function () {
            console.log("ERROR")
        })
    }

    // Cancel edit
    $scope.phoneCancelBtn = function () {
        // Cancel Button
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.country = "";
        $scope.city = "";
        $scope.phoneHome = "";
        $scope.phoneCell = "";
        $scope.editMode = false;
    }

    // Delete

    $scope.phoneDeleteBtn = function (index) {
        var currObj = $scope.tempPhone[index]
        $scope.currIndex = $scope.tempPhone[index].Id
        console.log($scope.currIndex, currObj);
        PhoneService.doDeleteData($scope.currIndex).then(function () {
            fetchAllContacts();
        }, function () {
            console.log('error');
        })
    }
});



    //////////////////////////////////////////////////////////
    //                   END OF CODE                       //
    /////////////////////////////////////////////////////////

/* --------------------------------------------------------------- bootstrap UI */


/*


$scope.greeting = "Hello Todos!";
//
// DatePicker stuff...
$scope.today = function () {
    $scope.dt = new Date();
};
$scope.totoday = function () {
    return new Date();
};



$scope.today();

$scope.clear = function () {
    $scope.dt = null;
};

// Disable weekend selection
$scope.disabled = function (date, mode) {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
};

$scope.toggleMin = function () {
    $scope.minDate = $scope.minDate ? null : new Date();
};
$scope.toggleMin();

$scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
};

$scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
};

$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
$scope.format = $scope.formats[0];

//// rating stuf.


$scope.rate = 7;
$scope.max = 10;
$scope.isReadonly = false;

$scope.hoveringOver = function (value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
};

$scope.ratingStates = [
  { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
  { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
  { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
  { stateOn: 'glyphicon-heart' },
  { stateOff: 'glyphicon-off' }
];

*/

    
