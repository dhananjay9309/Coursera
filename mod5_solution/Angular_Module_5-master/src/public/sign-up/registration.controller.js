(function() {
	'use strict';

	angular.module('public')
	.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['UserInfoService'];

	function RegistrationController(UserInfoService) {
		var reg = this;

		reg.user = {
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			short_name: ""
		}

		reg.getUserFavItem = function (shortName){
				if(shortName === "") {
					reg.emptySN = true;
				} else {
					var promise = 
					UserInfoService.getUserFavItem(shortName);
					promise.then(function(response){
						if(response.length === 0) {
							reg.emptySN = true;
						} else {
							reg.emptySN = false;
							reg.favorite = response.data;
							UserInfoService.addUserInfo(reg.user);
						}
					})
					.catch(function(error){
						reg.emptySN = true;
						console.log(error);
					});
				}
		};
		
	}
})();