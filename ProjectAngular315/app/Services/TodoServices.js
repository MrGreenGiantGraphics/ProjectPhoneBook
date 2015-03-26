app.factory('TodoService', function ($http, $q) {
    //
    var todos = [];
    // add a placeHolder todo

    todos.push({ name: "Rick", task: "wash car", timeAdded: "3/4/2015" });
    todos.push({ name: "David", task: "Celebrate Birthday", timeAdded: "6/4/2015" });
    todos.push({ name: "Tammy", task: "Eat Pizza", timeAdded: "3/5/2015" });

    // GET
    function getTodos() {
        //  later add ajax calls 
        var def = $q.defer(); // SET
        $http({
            url: 'https://ninjaturtle.firebaseio.com/todos/.json', method: 'GET'
        }).success(function (data) {
            // take action with the data
            for (var i in data) {
                console.log(data[i]);
                todos.push(data[i]);
            }
            def.resolve(data); // CONFIRM
        }).error(function () {

            // Error check
            console.log("Get Error");
            def.reject(); // DENY
        });
        return def.promise;
        //return todos;
    }
    return { getTodos: getTodos }
});