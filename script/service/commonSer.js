services.factory('HttpSer', ['$http', '$q',
    function ($http, $q) {
        return {
            do: function (api, args) {


              
                // return;

                //数字过长会科学技术,改成字符串
                for (var paramsI in args.base) {
                    if (typeof (args.base[paramsI]) == "number") {
                        args.base[paramsI] = args.base[paramsI] + "";
                    }
                }
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.post(api, args).success(function (data) {
                    deferred.resolve(data);
                }).error(function () {
                    deferred.reject();
                });
                return promise;
            }
        }
    }
]);