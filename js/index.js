 /*滚动页内跳转*/
 $(document).ready(function () {
     $('a[href*=#zchq88-]').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({
                         scrollTop: targetOffset
                     },
                     1000);
                 return false;
             }
         }
     });
 });

 var myapp = angular.module('myapp', []);
 myapp.run(function ($rootScope) {});
 myapp.controller(
     "AsideNavController",
     function ($scope, $http) {
         $scope.naclinks = [{
             title: "目录",
             id: "AsideNav1",
             class: "am-in",
             childlinks: [
                 {
                     href: "#zchq88-div1",
                     title: "个人简介"
        },
                 {
                     href: "#zchq88-div2",
                     title: "个人经历"
        },
                 {
                     href: "#zchq88-div3",
                     title: "个人技能"
        }, ]
     }];
     });