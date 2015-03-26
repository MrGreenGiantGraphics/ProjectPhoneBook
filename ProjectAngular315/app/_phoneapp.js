/*
  This is the version before updating to firebase. to use remove the 0 after the
  function for example " phoneCancelBtn0 " = " phoneCancelBtn "

*/

// Create a Database to store phoneBook
$scope.firstName = "";
$scope.lastName = "";
$scope.country = "";
$scope.city = "";
$scope.phoneHome = "";
$scope.phoneCell = "";
$scope.editMode = false; //Flag for editing. FALSE = not editing
$scope.currIndex = -1;  //ID of the current ID being edited
$scope.phoneBook = []; // holds all Contacts

$scope.phoneBook.push({
    firstName: "David", lastName: "Green", country: "USA",
    city: "Allentown", phoneHome: "619 882 5759", phoneCell: "011 76 205 3280"
});
$scope.phoneBook.push({
    firstName: "Tina", lastName: "Johnson", country: "USA",
    city: "East Stroudsburg", phoneHome: "973 508 5260", phoneCell: "570 420 4176"
});
$scope.phoneBook.push({
    firstName: "Jessica", lastName: "Green", country: "Sweden",
    city: "Malmo", phoneHome: "011 46 70 441 1605", phoneCell: "011 46 76 310 0094"
});


$scope.phoneBook.push({
    firstName: "Ralph", lastName: "Diaz", country: "USA",
    city: "Allentown", phoneHome: "610 428 3339", phoneCell: ""
});

// Add item to Array // take away 0 to run
$scope.phoneAddBtn0 = function () {
    $scope.phoneBook.push({ firstName: $scope.firstName, lastName: $scope.lastName, phoneHome: $scope.phoneHome, phoneCell: $scope.phoneCell, country: $scope.country, city: $scope.city });
    // local console - test
    console.log("id test: " + $scope.firstName);
}
// Edit item in the Array
$scope.phoneEditBtn0 = function (id) {
    console.log("id test: ", id, $scope.phoneBook[id]);
    var editPhone = $scope.phoneBook[id];
    $scope.firstName = editPhone.firstName;
    $scope.lastName = editPhone.lastName;
    $scope.phoneHome = editPhone.phoneHome;
    $scope.phoneCell = editPhone.phoneCell;
    $scope.country = editPhone.country;
    $scope.city = editPhone.city;
    $scope.editMode = true;
    $scope.currIndex = id;
    $scope.reset();
}
// Save item in the Array
$scope.phoneSaveBtn0 = function () {
    //
    $scope.phoneBook[$scope.currIndex] = { firstName: $scope.firstName, lastName: $scope.lastName, phoneHome: $scope.phoneHome, phoneCell: $scope.phoneCell, country: $scope.country, city: $scope.city };
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.country = "";
    $scope.city = "";
    $scope.phoneHome = "";
    $scope.phoneCell = "";
    $scope.editMode = false;
}

$scope.phoneCancelBtn0 = function () {
    // Cancel Button
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.country = "";
    $scope.city = "";
    $scope.phoneHome = "";
    $scope.phoneCell = "";
    $scope.editMode = false;
}


// Remove item from the Array
$scope.phoneDeleteBtn0 = function (id) {
    $scope.phoneBook.splice(id, 1);
    console.log("id test: ", id, $scope.phoneBook[id]);
}