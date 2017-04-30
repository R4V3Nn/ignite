
var photoList=[
			{name:"img1",category:"web design"},
			{name:"img2",category:"web design"},
			{name:"img3",category:"web design"},
			{name:"img4",category:"web design"},
			{name:"img5",category:"photography"},
			{name:"img6",category:"photography"},
			{name:"img7",category:"photography"},
			{name:"img8",category:"photography"},
			{name:"img9",category:"photography"},
			{name:"img10",category:"graphic design"},
			{name:"img11",category:"graphic design"},
			{name:"img12",category:"graphic design"},

			];
var app=angular.module("myApp",[ 'ngRoute','smoothScroll']);
	app.config(function ($routeProvider,$locationProvider) {
            $routeProvider
                $routeProvider
                .when('/:orderId', {
                    templateUrl:'templates/news.html',
                    controller:'mainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
               });
        $locationProvider.html5Mode({
  		enabled: true
	});

	});

	app.controller('mainCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){


			$scope.local="home";
			$scope.nameRegex = /^[a-z]+$/i; 
			$scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
			$scope.messageRegex=/^.{20,}$/
			$scope.photos=photoList;
			$scope.category="all";
			$http.get("data.json").success(function (response) {
                    $scope.news = response; 
                     for(var i=0;i<$scope.news.length;i++){
            	$scope.news[i].date=new Date($scope.news[i].date);
            }
            	$scope.order_id = $routeParams.orderId;
               
            });
            $scope.submitHandler = function(isvalid) {
			if (isvalid ) {
				$scope.cook();
				alert('Form is Valid, sending data!)');
				
			}
			else {
				alert('Form is invalid!'); 
			}
			} 
		
		




	}]);
	app.filter('skipItems', function () { 
		
            return function (arr,category) {
            	var filtered = [];

			if(category!="all"){
                for (i = 0; i < arr.length; i++) {
                   
	                    if (arr[i].category == category) {

	                        filtered.push(arr[i]); 
	                    }
               		}
               		return filtered; 
                }

                return arr;
            }
        });
		app.directive('testDir', function () {
            return {
                restrict: 'A',
                templateUrl: 'templates/template1.html',
                scope: { },
                
                controller: function ($scope, $interval,$timeout) {
                    $scope.stats=[
                    	{name:"COMPLETED PROJECTS",count:"3054",class:"fa fa-shopping-basket"},
                    	{name:"CLICK PRESED",count:"7234873",class:"fa fa-mouse-pointer"},
                    	{name:"MAILS SENTED & RECIV",count:"4670",class:"fa fa-envelope-o"},
                    	{name:"JOKES TOLDS",count:"939",class:"fa fa-comment-o"},
                    ];
                    var interval=[];
                   startCounter = function (number,i) {
                    
                    		interval[i] = $interval(function () {
       							$scope.stats[i].count=+$scope.stats[i].count;
                            $scope.stats[i].count = +$scope.stats[i].count+ Math.round(number/100);
                            if($scope.stats[i].count>number){
                            	$interval.cancel(interval[i]);
                            	$scope.stats[i].count=number;
                            	
                            	
                            }
                        }, 20);
    
                    }
					var flag2=false;

					window.onscroll=function(){
						if(document.body.scrollTop>=document.getElementById("stats").offsetTop-document.documentElement.clientHeight){
							
							if(flag2){
								return;
							}
								flag2=true;
							
							  	for(var j=0;j<$scope.stats.length;j++){
				                    	startCounter($scope.stats[j].count,j);
				                    	$scope.stats[j].count=0;

				                    }
								}

							}          
                }
            }
        });
		app.directive('testDir2', function () {
            return {
                restrict: 'A',
                templateUrl: 'templates/template2.html',
                scope: { },
                controller: function ($scope, $interval) {
                    $scope.teams = [
                    {name:"John Doe",position:"Graphic Design",text:"Lorem Ipsum is simply dummy text of the printing  ",img:'team1'},
                    {name:"Jack Doe",position:"Photographer",text:"five centuries, but also the leap into electronic  ",img:'team2'},
                    {name:"Ivan Doe",position:"Developer",text:"It is a long established fact that a reader",img:'team3'},
                    {name:"Oleg Doe",position:"Team Lead",text:"Contrary to popular belief, Lorem Ipsum",img:'team4'},

                    ];
                   
                }
            }
        })
