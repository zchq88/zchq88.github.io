myapp.controller(
    "Nav",
    function ($scope, $http) {
        $scope.aside_nav_h4_click = function (index) {
            pymParent.iframe.src = $scope.naclinks[index].url + "?initialWidth=750&childId=right_frame";
            $scope.Snaclinks = index;
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        };
        var pymParent = new pym.Parent('right_frame', 'lesson1.html', {});
        pymChildclick = function (index) {
            var clickid = "#lesson" + index;
            $(clickid).click();
        }
        pymParent.onMessage('href', pymChildclick)
        $scope.naclinks = [{
                title: "1 快速开始",
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
                title: "2 导言和准备",
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
                title: "3 引导程序",
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
     },
            {
                title: "4 静态模板",
                id: "Nav4",
                url: "lesson4.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n4d1",
                        title: "静态模板"
        },
                    {
                        href: "zchq88-gundong-n4d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n4d3",
                        title: "总结"
        }, ]
     },
            {
                title: "5 AngularJS 模板",
                id: "Nav5",
                url: "lesson5.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n5d1",
                        title: "AngularJS 模板"
        },
                    {
                        href: "zchq88-gundong-n5d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n5d3",
                        title: "总结"
        }, ]
     },
            {
                title: "6 迭代器过滤排序",
                id: "Nav6",
                url: "lesson6.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n6d1",
                        title: "迭代器过滤排序"
        },
                    {
                        href: "zchq88-gundong-n6d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n6d3",
                        title: "总结"
        }, ]
     },
            {
                title: "7 双向绑定",
                id: "Nav7",
                url: "lesson7.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n7d1",
                        title: "双向绑定"
        },
                    {
                        href: "zchq88-gundong-n7d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n7d3",
                        title: "总结"
        }, ]
     },
            {
                title: "8 XHR和依赖注入",
                id: "Nav8",
                url: "lesson8.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n8d1",
                        title: "XHR和依赖注入"
        },
                    {
                        href: "zchq88-gundong-n8d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n8d3",
                        title: "总结"
        }, ]
     },
            {
                title: "9 链接与图片模板",
                id: "Nav9",
                url: "lesson9.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n9d1",
                        title: "链接与图片模板"
        },
                    {
                        href: "zchq88-gundong-n9d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n9d3",
                        title: "总结"
        }, ]
     },
            {
                title: "10 路由与多视图",
                id: "Nav10",
                url: "lesson10.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n10d1",
                        title: "路由与多视图"
        },
                    {
                        href: "zchq88-gundong-n10d2",
                        title: "多视图，路由和布局模板"
        },
                    {
                        href: "zchq88-gundong-n10d3",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n10d4",
                        title: "总结"
        }, ]
     },
            {
                title: "11 更多模板",
                id: "Nav11",
                url: "lesson11.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n11d1",
                        title: "更多模板"
        },
                    {
                        href: "zchq88-gundong-n11d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n11d3",
                        title: "总结"
        }, ]
     },
            {
                title: "12 过滤器",
                id: "Nav12",
                url: "lesson12.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n12d1",
                        title: "过滤器"
        },
                    {
                        href: "zchq88-gundong-n12d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n12d3",
                        title: "总结"
        }, ]
     },
            {
                title: "13 事件处理器",
                id: "Nav13",
                url: "lesson13.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n13d1",
                        title: "事件处理器"
        },
                    {
                        href: "zchq88-gundong-n13d2",
                        title: "练习"
        },
                    {
                        href: "zchq88-gundong-n13d3",
                        title: "总结"
        }, ]
     },
            {
                title: "14 REST 和定制服务",
                id: "Nav14",
                url: "lesson14.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n14d1",
                        title: "REST 和定制服务"
        },
                    {
                        href: "zchq88-gundong-n14d2",
                        title: "总结"
        }, ]
     },
            {
                title: "15 动画操作",
                id: "Nav15",
                url: "lesson15.html",
                childlinks: [
                    {
                        href: "zchq88-gundong-n15d1",
                        title: "动画操作"
        },
                {
                        href: "zchq88-gundong-n15d2",
                        title: "依赖关系"
        },
                {
                        href: "zchq88-gundong-n15d3",
                        title: "在 ngAnimate 下动画是如何工作的"
        },
                {
                        href: "zchq88-gundong-n15d4",
                        title: "模板"
        },
                {
                        href: "zchq88-gundong-n15d5",
                        title: "模块与动画"
        },
                {
                        href: "zchq88-gundong-n15d6",
                        title: "用 CSS 过渡动画实现动画的 ngRepeat"
        },
                {
                        href: "zchq88-gundong-n15d7",
                        title: "用 CSS 关键帧动画实现动画的 ngView"
        },
                {
                        href: "zchq88-gundong-n15d8",
                        title: "用JavaScript 实现动画的 ngClass"
        },
                {
                        href: "zchq88-gundong-n15d9",
                        title: "总结"
        },]
     }];
        $scope.Snaclinks = 0;
        $scope.linksshow = function (index) {
            return $scope.Snaclinks == index
        };
    });