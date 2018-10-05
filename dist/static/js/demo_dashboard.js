"use strict";

var demo_dashboard = {
    init: function(){
        
        
        // Dashboard Echarts radar chart
        
        var dashboardECradar = false;
        
        app._loading.show(document.getElementById("dashboard-budget-card"),{spinner: true});
            
        setTimeout(function(){
            if (!document.getElementById("dashboard-ec-radar")) return
            
            dashboardECradar = echarts.init(document.getElementById("dashboard-ec-radar"));

            var optionsECradar = {            
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: 10,
                    textStyle: {
                        fontSize: 11
                    }
                },
                legend: {
                    data: ["Allocated Budget", "Actual Spending"]
                },
                grid: {
                    top: '10px',
                    left: '0px',
                    bottom: '30px',
                    right: '0px'
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: 3,
                            padding: [3, 5]
                       }
                    },
                    indicator: [
                       { name: "Sales", max: 6500, color: '#91969a'},
                       { name: "Managers", max: 16000, color: '#91969a'},
                       { name: "IT", max: 30000, color: '#91969a'},
                       { name: "Support", max: 38000, color: '#91969a'},
                       { name: "Development", max: 52000, color: '#91969a'},
                       { name: "Marketing", max: 25000, color: '#91969a'}
                    ]
                },
                series: [{
                    name: "Budget vs spending",
                    type: "radar",                
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : "Allocated budget",
                            lineStyle: {color: "rgba(0, 138, 190, 1)"}
                        },
                         {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : "Actual spending",
                            lineStyle: {color: "rgba(255, 30, 30, 1)"}
                        }
                    ]
                }]
            };
        
        
            if (optionsECradar && typeof optionsECradar === "object") {
                dashboardECradar.setOption(optionsECradar, true);
            }
            
            app._loading.hide(document.getElementById("dashboard-budget-card"));
            
            window.addEventListener("resize", function(){
                dashboardECradar.resize();
            });    
            
        },1000);                
                
        // END dashboard Echarts radar chart
        
        
        
        // Dashboard Echarts line chart
        app._loading.show(document.getElementById("dashboard-orders-card"),{spinner: true});
            
        var dashboardECline = false;
        
        setTimeout(function(){
            if (!document.getElementById("dashboard-ec-line")) return
                
            dashboardECline = echarts.init(document.getElementById("dashboard-ec-line"));

            var optionECline = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: 10,
                    position: function (pt) {
                        return [pt[0], '10%'];
                    },
                    axisPointer: {
                        animation: false,
                        type: 'cross',
                        lineStyle: {
                            color: '#ff1e1e',
                            width: 1,
                            opacity: 0.5
                        },
                        label: {
                            backgroundColor: '#ff1e1e',
                            borderColor: 'rgba(0,0,0,0.3)',
                            shadowColor: '#ff1e1e'
                        },
                        crossStyle: {
                            color: '#ff1e1e'
                        }
                    },
                    textStyle: {
                        fontSize: 11
                    }
                },                                                    
                grid: {
                    top: '10px',
                    left: '35px',
                    bottom: '30px',
                    right: '16px'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['06/17','07/17','08/17','09/17','10/17','11/17','12/17','01/18','02/18','03/18','04/18','05/18'],
                    axisLine: { lineStyle: { color: '#91969a' } },                                                
                    splitLine: { show: true, lineStyle: {color: 'rgba(0,0,0,0.3)', opacity: 0.5} }                
                },
                yAxis: {
                    type: 'value',
                    axisLine: { lineStyle: { color: '#91969a' } },                                                
                    splitLine: { show: true, lineStyle: {color: 'rgba(0,0,0,0.3)', opacity: 0.5} },
                    boundaryGap: [0, '100%']
                },
                series: [
                    {
                        name:'Sales',
                        type:'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 138, 190, 1)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 138, 190, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0, 138, 190, 0.1)'
                                }])
                            }
                        },
                        data: ['43','47','58','54','63','38','33','39','45','50','48','58']
                    },
                    {
                        name:'Processed orders',
                        type:'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 30, 30, 1)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(255, 30, 30, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(255, 30, 30, 0.1)'
                                }])
                            }
                        },
                        data: ['40','42','55','49','52','34','29','34','39','48','45','52']
                    }
                ]
            };
        
            if (optionECline && typeof optionECline === "object") {
                dashboardECline.setOption(optionECline, true);
            }
            
            app._loading.hide(document.getElementById("dashboard-orders-card"));
            
            window.addEventListener("resize", function(){
                dashboardECline.resize();
            });
            
        },1000);        
        
        // END Dashboard Echarts line chart
        
        
        
        
        // select custom date range button
        var start = moment().subtract(29, "days");
        var end = moment();
        
        function cb(start, end) {
            $("#dashboard-rp-customrange").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));            
        }
        
        function cb1(start, end) {
            $("#dashboard-rp-customrange").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
            
            app._loading.show(document.getElementById("dashboard-orders-card"),{spinner: true});
            
            setTimeout(function(){
                app._loading.hide(document.getElementById("dashboard-orders-card"));
            },1000);
        }

        $("#dashboard-rp-customrange").daterangepicker({
            startDate: start,
            endDate: end,
            "drops": "down",
            "opens": "left",
            "alwaysShowCalendars": true,
            "ranges": {
                "Today": [moment(), moment()],
                "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            }
        }, cb1);
        
        cb(start, end);
        
        // end select custom date range button
        
        
        // rating        
        $(".dashboard_rating").raty({readOnly: true});
    }
};

document.addEventListener("DOMContentLoaded", function () {    
    demo_dashboard.init();
});