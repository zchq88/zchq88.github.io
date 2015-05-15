// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('skill-chart'));
        window.onresize = myChart.resize;
        var labelTop = {
            normal: {
                label: {
                    show: true,
                    position: 'center',
                    formatter: '{b}',
                    textStyle: {
                        baseline: 'bottom'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        var labelFromatter = {
            normal: {
                label: {
                    formatter: function (params) {
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline: 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal: {
                color: '#ccc',
                label: {
                    show: true,
                    position: 'center'
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];
        option = {
            legend: {
                x: 'center',
                y: 'center',
                data: [
            'c', 'c#', 'android', 'html5', 'css less',
            'js', 'angular.js', 'nodejs', 'R语言', '其他'
        ]
            },
            title: {
                text: '职业技能',
                subtext: '比较常用的技能自我评价',
                x: 'center'
            },
            series: [
                {
                    type: 'pie',
                    center: ['10%', '30%'],
                    radius: radius,
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 70,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'c',
                            value: 30,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['30%', '30%'],
                    radius: radius,
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 30,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'c#',
                            value: 70,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['50%', '30%'],
                    radius: radius,
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 70,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'android',
                            value: 30,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['70%', '30%'],
                    radius: radius,
                    x: '60%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 20,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'html5',
                            value: 80,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['90%', '30%'],
                    radius: radius,
                    x: '80%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 50,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'css less',
                            value: 50,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['10%', '70%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 40,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'js',
                            value: 60,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['30%', '70%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 70,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'angular.js',
                            value: 30,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['50%', '70%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 70,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'nodejs',
                            value: 30,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['70%', '70%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '60%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 90,
                            itemStyle: labelBottom
                                },
                        {
                            name: 'R语言',
                            value: 10,
                            itemStyle: labelTop
                                }
            ]
        },
                {
                    type: 'pie',
                    center: ['90%', '70%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '80%', // for funnel
                    itemStyle: labelFromatter,
                    data: [
                        {
                            name: 'other',
                            value: 80,
                            itemStyle: labelBottom
                                },
                        {
                            name: '其他',
                            value: 20,
                            itemStyle: labelTop
                                }
            ]
        }
    ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);