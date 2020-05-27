(function (){
	'use strict';

	angular.module('public')
	.service('UserInfoService', UserInfoService);

	UserInfoService.$inject = ['$http', 'ApiPath'];
	function UserInfoService($http, ApiPath) {
		var service = this;

		var userInfo = {};


		service.addUserInfo = function (user) {
			userInfo["first_name"]= user.first_name;
			userInfo["last_name"] = user.last_name;
			userInfo["email"] = user.email;
			userInfo["phone"] = user.phone;
			userInfo["short_name"] = user.short_name;	
		};

		service.getUserInfo = function () {
			return userInfo;
		};

		service.isEmpty = function () {
			if (typeof userInfo.first_name === "undefined") {
				return true;
			}else {
				return false;
			}
		};

		service.getUserFavItem = function(ItemShortName) {
			var response = $http({
				method: "GET",
				url: (ApiPath + '/menu_items/'+ ItemShortName + 
					'.json')
			});

			return response;
		};
	}

})();