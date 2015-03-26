app.factory('PhoneService', function ($http, $q) {

    var phoneBook = [];


    //////////////////////////////////////////////////////////
    //               NEW XMLHttpRequest CODE                //
    /////////////////////////////////////////////////////////

    //GET
    function phoneData() {
        var def = $q.defer(); // SET        
        $http({
            url: 'https://folksfriendsfirebase.firebaseio.com/.json',
            method: 'GET'
        }).success(function (data) {
            if (data == 'null') {
                phoneBook.push({ firstName: "This is a test!" });

            } else {
                phoneBook = [];
                for (var i in data) {
                    data[i].Id = i;
                    console.log(i, data[i]);
                    phoneBook.push(data[i]);
                }
                //console.log("xdata", data.length, data);
                //console.log("xContacts", phoneBook.length);
            }


            def.resolve(phoneBook)
        }).error(function () {
            console.log("GET error");
            def.reject();
        });

        return def.promise; // return the PROMISE

    };
    // POST - AJAX function
    function addPhoneData(newData) {
        var def = $q.defer(); // POST PROMISE
        $http({
            url: 'https://folksfriendsfirebase.firebaseio.com/.json',
            method: 'POST',
            data: newData
        }).success(function (data) {
            console.log('POST Success', data);
            def.resolve(data);
        }).error(function () {
            console.log('POST Error');
            def.reject();
        });
        return def.promise;
    }


    // PUSH to the Server  // Alternative Post
    function FirebaseTestBtn() {
        $scope.phoneBook.push({ 'firstName': $scope.firstName, 'lastName': $scope.lastName, 'phoneHome': $scope.phoneHome, 'phoneCell': $scope.phoneCell, 'country': $scope.country, 'city': $scope.city });

        // Write the data to the server

        var dataObj = { 'firstName': $scope.firstName, 'lastName': $scope.lastName, 'phoneHome': $scope.phoneHome, 'phoneCell': $scope.phoneCell, 'country': $scope.country, 'city': $scope.city };

        var res = $http.post('https://folksfriendsfirebase.firebaseio.com/.json', dataObj);
        res.success(function (data, status, header, config) {
            $scope.message = data;
            console.log(" POST GOOD!", data)
            //Fetch all data again.

        });

        // Post check for errors
        res.error(function (data, status, header, config) {
            console.log("failure message: " + JSON.stringify({ data: data }));
        });
    };

    //'UPDATE' method
    function savePhoneData(objToSave, currIndex) {
        var def = $q.defer(); //Update promise
        $http({
            url: 'https://folksfriendsfirebase.firebaseio.com/' + currIndex + '/.json',
            method: 'PATCH',
            data: objToSave
        }).success(function (data) {
            def.resolve(data);
            console.log("Success", data)
        }).error(function () {
            def.reject();
            console.log("Error")
        })
        return def.promise;
    }
    // DELETE
    function deletePhoneData(currIndex) {
        var def = $q.defer();
        $http({
            url: 'https://folksfriendsfirebase.firebaseio.com/' + currIndex + '/.json',
            method: 'DELETE',
        }).success(function (data) {
            console.log('Delete Success', data);
            def.resolve(data);
        }).error(function () {
            console.log('Error');
            def.reject();
        })
        return def.promise;
    }

    // PUBLIC METHODS
    return {
        phoneData: phoneData,
        doAddData: addPhoneData,
        doSaveData: savePhoneData,
        doDeleteData: deletePhoneData,
        doAddFirebase: FirebaseTestBtn
    }
});