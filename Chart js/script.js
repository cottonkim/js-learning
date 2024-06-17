let myChartOne = document.getElementById('chart-1').getContext('2d');
let myChartTwo = document.getElementById('chart-2').getContext('2d');
let myChartThree = document.getElementById('chart-3').getContext('2d');
let myChartFour = document.getElementById('chart-4').getContext('2d');

let myChart1 = new Chart(myChartOne, {
    // type 그래프의 종류
    type: 'bar', // pie, line, doughnut, polarArea
    data: {
        labels: ['사과', '바나나', '복숭아', '수박', '멜론'],
        datasets: [
            {
                label: '2019',
                data: [10, 100, 30, 140, 50],
                backgroundColor: ['rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(254, 119, 123, .9)',                
                hoverBackgroundColor: 'rgba(254, 119, 123, .7)',
                barThickness: 26,
                maxBarThickness: 20
            },
            {
                label: '2020',
                data: [40, 60, 20, 180, 20],
                backgroundColor: ['rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, .9)',
                hoverBorderWidth: 1,
                barThickness: 26,
                maxBarThickness : 20
            }            
        ]        
    },
    options: {
        title: {
            display: true,
            text: '2020년!',
            fontSize: 30,
            fontColor: 'red'
        },
        legend: {
            display: false,
            position: 'bottom',
        },
        tooltips: {
            enabled: false,
        },
        layout: {
            padding: {
            }
        },        
        scales: {
            // y: [{
            //     ticks: {
            //         // beginAtZero: true, 0에서 시작
            //         stepSize: 1,
            //         min: 0,
            //         max: 200,
            //         fontSize: 18
            //     }
            // }]
            y: {
                text: 'number',
                type: 'linear',
                min: 0,
                max: 200,
                stepSize: 10
            }
        }
    }
});

const myChartTwoXName = ['사과', '바나나', '복숭아', '수박', '멜론'];
let data2019 = {
    label: '2019',
    data: [10, 100, 30, 140, 50],
    backgroundColor: ['rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)'],
    borderWidth: 1,
    borderColor: 'rgba(254, 119, 123, .9)',
    hoverBackgroundColor: 'rgba(254, 119, 123, .7)',
    barThickness: 26,
    maxBarThickness: 20,
    borderDash: [4, 2], // 점선 만들기
    hoverRadius: 5
};
let data2020 = {
    label: '2020',
    data: [40, 60, 20, 180, 20],
    backgroundColor: ['rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)'],
    borderWidth: 1,
    borderColor: 'rgba(54, 162, 235, .9)',
    hoverBorderWidth: 1,
    barThickness: 26,
    maxBarThickness: 20,
    hoverRadius: 5
};
let config = {
    // type 그래프의 종류
    type: 'line', // pie, line, doughnut, polarArea
    data: {
        labels: myChartTwoXName,
        datasets: [
            data2019,
            data2020
        ]        
    },
    options: {
        // maintainAspectRatio: false, 스타일에 값 지정한 거에 딱 맞게 사이즈 조정
        title: {
            display: true,
            text: '2020년!',
            fontSize: 30,
            fontColor: 'red'
        },
        legend: {
            display: false,
            position: 'bottom',
        },
        tooltips: {
            enabled: false,
        },     
        scales: {
            y: {
                text: 'number',
                type: 'linear',
                min: 0,
                max: 200,
                stepSize: 10
            }
        }
    }
};

let myChart2 = new Chart(myChartTwo, config);

let myChart3 = new Chart(myChartThree, {
    // type 그래프의 종류
    type: 'bar', // pie, line, doughnut, polarArea
    data: {
        labels: ['사과', '바나나', '복숭아', '수박', '멜론'],
        datasets: [
            {
                label: '2019',
                data: [10, 100, 30, 140, 50],
                backgroundColor: ['rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(254, 119, 123, .9)',                
                hoverBackgroundColor: 'rgba(254, 119, 123, .7)',
                barThickness: 26,
                maxBarThickness: 20
            },
            {
                label: '2020',
                data: [40, 60, 20, 180, 20],
                backgroundColor: ['rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, .9)',
                hoverBorderWidth: 1,
                barThickness: 26,
                maxBarThickness : 20
            }            
        ]        
    },
    options: {
        title: {
            display: true,
            text: '2020년!',
            fontSize: 30,
            fontColor: 'red'
        },
        legend: {
            display: false,
            position: 'bottom',
        },
        tooltips: {
            enabled: false,
        },
        layout: {
            padding: {
            }
        },        
        scales: {
            x: {
                stacked: true // 값 겹쳐보이게 하기
            },
            y: {
                stacked: true,
                text: 'number',
                type: 'linear',
                min: 0,
                max: 200,
                stepSize: 10
            }
        }
    }
});

let myChart4 = new Chart(myChartFour, {
    // type 그래프의 종류
    type: 'doughnut', // pie, line, doughnut, polarArea
    data: {
        labels: ['사과', '바나나', '복숭아', '수박', '멜론'],
        datasets: [
            {
                data: [10, 100, 30, 140, 50],
                backgroundColor: ['rgba(254, 119, 123, 0.6)', 'rgba(258, 219, 123, 0.6)', 'rgba(154, 119, 223, 0.6)', 'rgba(354, 119, 323, 0.6)', 'rgba(054, 119, 123, 0.6)'],
                borderWidth: 1,
                // borderColor: 'rgba(254, 119, 123, .9)',                
                hoverBackgroundColor: ['rgba(254, 119, 123,1)', 'rgba(258, 219, 123,1)', 'rgba(154, 119, 223,1)', 'rgba(354, 119, 323,1)', 'rgba(054, 119, 123,1)'],
                barThickness: 26,
                maxBarThickness: 20
            },          
        ]        
    },
    options: {
        cutout:'60%', // 안의 원 자르기
        plugins: {
            title: {
                display: true,
                text: '2020년!',
                font: {
                    size: '24px',
                    color: '#333'
                }
            },
            legend: {
                display: true,
                position: 'top',
            },
        },        
        tooltips: {
            enabled: false,
        },      
        scale: {
            ticks: {
                beginAtZero: true,
                fixedStepSize: 50
            },
            x: {
                stacked: true // 값 겹쳐보이게 하기
            },
            y: {
                stacked: true,
                text: 'number',
                type: 'linear',
                min: 0,
                max: 200,
                stepSize: 10
            }
        }
    }
});