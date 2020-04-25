(function () {
    'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

    $scope.checkIfTooMuch = function(){
        console.log($scope.inputtext);
        if ($scope.inputtext === undefined
            || $scope.inputtext.length === 0)
        {
            $scope.message =  "Please enter data first";
        }
        else {
            var InputItems = $scope.inputtext.split(",");
            var stripedList = [];
            console.log(InputItems);
            console.log(InputItems.length);

            for(var i=0, j= InputItems.length; i < j; i++)
            {
                if (InputItems[i].trim() !== "")
                {
                    console.log(InputItems[i]);
                    stripedList.push(InputItems[i]);
                }
            }
            console.log(stripedList);

            if (stripedList.length <= 3)
            {
                $scope.message =  "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }
        }

    };
}
})();