app.controller('HomeController', function ($scope, $http, $q, TodoService) {

    // Clearing the fields
    $scope.name = "";
    $scope.task = "";
    $scope.timeAdded = "";
    $scope.todos = [];
    $scope.editMode = false;

    // Create an Array
    $scope.todos.push({ 
        name: "Rick", task: "wash carS", timeAdded: "3/4/2015" });
    $scope.todos.push({ name: "David", task: "Celebrate Birthday", timeAdded: "6/4/2015" });
    $scope.todos.push({ name: "Tammy", task: "Eat Pizzas", timeAdded: "3/5/2015" });

    // PUSH to the Server
    $scope.FirebaseTestBtn = function () {
        $scope.todos.push({ 'name': $scope.name, 'task': $scope.task, 'timeAdded': $scope.timeAdded });
        // Write the data to the server

        var dataObj = { 'name': $scope.name, 'task': $scope.task, 'timeAdded': $scope.timeAdded };

        /*
        var dataObj = {
            name: "Rick", task: "wash carS", timeAdded: "3/4/2015" };
        */        

        // Alternative Post
        var res = $http.post('https://ninjaturtle.firebaseio.com/todos/.json', dataObj);
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

    // $scope.tempArr = TodoService.getTodos();

    TodoService.getTodos().then(function (data) {
        $scope.tempArr = data;
    }, function () {
        // Error
    })

    $scope.greeting = "Hello Todos";

});