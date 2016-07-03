'use strict'

var app = angular.module('app', [
	'ngRoute',
	'ngAnimate'
]);

app.controller('MainCtrl', function($scope){
	$scope.message = 'Controller loaded!';

});

app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'public/views/home.html',
				controller: 'HomeCrtl'
			})
			.when('/sobre', {
				templateUrl: 'public/views/sobre.html',
				controller: 'SobreCtrl'
			})
			.otherwise({
				redirectTo: '/home'
			});
}]);

app.controller('HomeCrtl', function($scope){
	$scope.disciplinas = [
		{
			disciplina: "Computação Gráfica",
			curso: "DCC/UFRJ",
			semestres: [
				{
					semestre: "2010.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2010-2-P1.jpg"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2010-2-P2.jpg"
						},{
							titulo: "P3",
							href: "public/resources/files/CG/2010-2-P3.jpg"
						}
					]
				},
				{
					semestre: "2011.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2011-2-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2011-2-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2011-2-P3.pdf"
						}
					]
				},
				{
					semestre: "2012.1",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2012-1-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2012-1-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2012-1-P3.pdf"
						}
					]
				},
				{
					semestre: "2012.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2012-2-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2012-2-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2012-2-P3.pdf"
						}
					]
				},
				{
					semestre: "2013.1",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2013-1-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2013-1-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2013-1-P3.pdf"
						}
					]
				},
				{
					semestre: "2013.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2013-2-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2013-2-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2013-2-P3.pdf"
						}
					]
				},
				{
					semestre: "2014.1",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2014-1-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2014-1-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2014-1-P3.pdf"
						}
					]
				},
				{
					semestre: "2014.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2014-2-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2014-2-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2014-2-P3.pdf"
						}
					]
				},
				{
					semestre: "2015.1",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2015-1-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2015-1-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2015-1-P3.pdf"
						}
					]
				},
				{
					semestre: "2015.2",
					expanded: false,
					provas: [
						{
							titulo: "P1",
							href: "public/resources/files/CG/2015-2-P1.pdf"
						},
						{
							titulo: "P2",
							href: "public/resources/files/CG/2015-2-P2.pdf"
						},
						{
							titulo: "P3",
							href: "public/resources/files/CG/2015-2-P3.pdf"
						}
					]
				}
			]
		}
	];
})