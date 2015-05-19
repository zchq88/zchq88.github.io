var pymParent = new pym.Parent('right_frame', 'lesson1.html', {});

myapp.controller(
    "Nav",
    function ($scope, $http) {
        $scope.aside_nav_h4_click = function (index) {
            pymParent.iframe.src = $scope.naclinks[index].url + "?initialWidth=750&childId=right_frame";
            $scope.Snaclinks = index;
            $('html,body').animate({scrollTop: 0},1000);
        };
        $scope.naclinks = [{
                title: "1快速开始",
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
                title: "2导言和准备",
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
     },
            {
                title: "3引导程序",
                id: "Nav3",
                url: "lesson3.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n3d1",
                        title: "开始"
        },
                    {
                        href: "zchq88-gundong-n3d2",
                        title: "代码在做什么呢？"
        },
                    {
                        href: "zchq88-gundong-n3d3",
                        title: "引导AngularJS应用？"
        },
                    {
                        href: "zchq88-gundong-n3d4",
                        title: "我工作目录中这些文件是干什么的？"
        },
                    {
                        href: "zchq88-gundong-n3d5",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n3d6",
                        title: "总结"
        }, ]
     }];
        $scope.Snaclinks = 0;
        $scope.linksshow = function (index) {
            return $scope.Snaclinks == index
        };
    });