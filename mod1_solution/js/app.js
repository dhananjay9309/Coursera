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
            $scope.fontColor = "red";
        }
        else {
            var InputItems = $scope.inputtext.split(",");
            var stripedList = [];


            for(var i=0, j= InputItems.length; i < j; i++)
            {
                if (InputItems[i].trim() !== "")
                {
                    $scope.fontColor = "green" ;
                    stripedList.push(InputItems[i]);
                }
            }


            if (stripedList.length <= 3)
            {
                $scope.message =  "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }
            

            


    };
    
    };
}
})();