let myChart = document.getElementById('line-chart').getContext('2d');
let myLineChart = new Chart(myChart, {
    // type 그래프의 종류
    type: 'bar',
    data: {
        labels: ['학원', '연구원', '출판사', '미디어사', '위니브'],
        datasets: [
            {
                label: '2019',
                data: [10, 100, 30, 140, 50],
                backgroundColor: ['rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)', 'rgba(254, 119, 123, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(254, 119, 123, .9)',                
                hoverBackgroundColor: 'rgba(254, 119, 123, .7)',
                barThickness: 40,
                maxBarThickness: 20
            },
            {
                label: '2020',
                data: [40, 60, 20, 180, 20],
                backgroundColor: ['rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.4)'],
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, .9)',
                hoverBorderWidth: 1,
                barThickness: 40,
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