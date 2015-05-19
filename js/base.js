 /*滚动页内跳转*/
 $(document).ready(function () {
     gundong_ref();
 });

 var myapp = angular.module('myapp', []);
 myapp.run(function ($rootScope) {});
 var gundong_ref = function () {
     $('a[href*=#zchq88-gundong-]').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var $target = $(this.hash);
             if ($target.length == 0) {
                 $target = $("iframe").contents().find(this.hash);
             }
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 if ($(this.hash).length == 0) {
                     targetOffset = targetOffset + $("iframe").offset().top;
                 }
                 $('html,body').animate({
                         scrollTop: targetOffset
                     },
                     1000);
                 return false;
             }
         }
     });
 }