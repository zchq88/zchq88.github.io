var pymParent = new pym.Parent('right_frame', 'lesson1.html', {});

myapp.controller(
    "Nav",
    function ($scope, $http) {
        $scope.aside_nav_h4_click = function (index) {
            pymParent.iframe.src = $scope.naclinks[index].url + "?initialWidth=750&childId=right_frame";
            $scope.Snaclinks = index;
        };
        $scope.naclinks = [{
                title: "快速开始",
                id: "Nav1",
                url: "lesson1.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n1d1",
                        title: "Hello World!"
        },
                    {
                        href: "zchq88-gundong-n1d2",
                        title: "Hello AngularJS World!"
        },
                    {
                        href: "zchq88-gundong-n1d3",
                        title: "AngularJS应用的解析"
        }, ]
     },
            {
                title: "导言和准备",
                id: "Nav2",
                url: "lesson2.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n2d1",
                        title: "导言"
        },
                    {
                        href: "zchq88-gundong-n2d2",
                        title: "搭建学习环境"
        }, ]
     }];
        $scope.Snaclinks = 0;
        $scope.linksshow = function (index) {
            return $scope.Snaclinks == index
        };
    });