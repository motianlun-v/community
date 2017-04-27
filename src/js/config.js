/**
 * Created by Administrator on 2017/4/26.
 */

angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/community');
        $urlRouterProvider.when('/community','/community/introduce');
        $urlRouterProvider.when('/serve/activity','/serve/activity/summary');
        $stateProvider
            .state({ //首页
                name:'home',
                url:'/home',
                templateUrl:'pages/home.html'
            })

            .state({ //社区团体活动服务   page
                name:'community',
                url:'/community',
                templateUrl:'pages/community.html'
            })
                .state({ //活动介绍
                    name:'community.introduce',
                    url:'/introduce',
                    templateUrl:'pages/introduce.html'
                })
                .state({ //查看活动
                    name:'community.check',
                    url:'/check',
                    templateUrl:'pages/check.html'
                })
                    .state({ //具体活动
                        name:'community.activeOne',
                        url:'/activeOne',
                        templateUrl:'pages/activeOne.html'
                    })
                    //具体活动 end
                .state({ //活动总结
                    name:'community.summary',
                    url:'/summary',
                    templateUrl:'pages/summary.html'
                })
            //社区团体活动服务   page   end
            .state({   // 党组织活动服务
                name:'party',
                url:'/party',
                templateUrl:'pages/party.html'
            })
            .state({   // 居民自治活动服务
                name:'resident',
                url:'/resident',
                templateUrl:'pages/resident.html'
            })

        /*.state({  //邀请居民
         name:'serve.activity.invite',
         url:'/invite',
         templateUrl:'pages/invite.html',
         controller:function($scope,$http){
         $http.get('data/peopleList.json')
         .success(function(data){
         console.log(data)
         $scope.arr = data.list;
         })

         function init(){
         $scope.fcut = -1;
         $scope.lcut = -1;
         $scope.scut = -1;
         $scope.bcut = -1;
         }
         $scope.fn=function(param){
         if ($scope[param.substr(0,1)+'cut'] == 0) {
         init()
         $scope.item = '-' + param;
         $scope[param.substr(0,1)+'cut'] = 1;
         }else{
         init()
         $scope.item = param;
         $scope[param.substr(0,1)+'cut'] = 0;
         };
         }
         }
         })
         .state({   //居民报名
         name:'serve.activity.apply',
         url:'/apply',
         templateUrl:'pages/apply.html',
         controller:function($scope,$http){
         $http.get('data/peopleList.json')
         .success(function(data){
         console.log(data)
         $scope.arr = data.list;
         })

         function init(){
         $scope.fcut = -1;
         $scope.lcut = -1;
         $scope.scut = -1;
         $scope.bcut = -1;
         }
         $scope.fn=function(param){
         if ($scope[param.substr(0,1)+'cut'] == 0) {
         init()
         $scope.item = '-' + param;
         $scope[param.substr(0,1)+'cut'] = 1;
         }else{
         init()
         $scope.item = param;
         $scope[param.substr(0,1)+'cut'] = 0;
         };
         }
         }
         })
         .state({   //活动总结
         name:'serve.activity.summary',
         url:'/summary',
         templateUrl:'pages/summary.html'
         })*/
    })