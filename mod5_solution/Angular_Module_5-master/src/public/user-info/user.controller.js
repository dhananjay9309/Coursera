(function () {
'use strict';

	angular.module('public')
	.controller('UserController', UserController);

	UserController.$inject = ['info', 'empty', 'UserInfoService'];
	function UserController(info, empty, UserInfoService) {
	  var $ctrl = this;
	  $ctrl.info = info;
	  $ctrl.empty = empty;	  

	  var getUserFavItem = function (){
	  	var promise = 
		UserInfoService.getUserFavItem(info.short_name);

		promise.then(function(response){
			$ctrl.fav = response.data;
		})
	   };

	   if (typeof info.first_name !== "undefined") {
	   	getUserFavItem();
	   } 

	};

})();



	
		
	

	
			

				