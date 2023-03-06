// barchar start
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',],
    datasets: [{
      label: 'Last year',
      data: [54,67,41,55,62,45,55,73,60,76,48,79],
      backgroundColor: 'rgb(63,128,234)',
      maxBarThickness: 8,
      // borderWidth: 1
    }, {
      label: 'This year',
      data: [69,66,24,48,52,51,44,53,62,79,51,68],
      maxBarThickness: 8,
      backgroundColor: 'rgb(63,128,234,0.6)',
      borderRadius: '5',
      // borderWidth: 1
    }]
  },
  options: {
    plugins:{
      legend:{
        display:false,
      }
    },
    responsive:true,
    scales: {
      x: {
        stacked: true,
        grid:{
          lineWidth: 0,
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        drawBorder: false,
        drawOnChartArea:false,
        grid:{
          lineWidth: 0,
          drawTicks:false,
          borderWidth: 0,
          display:true,
        }
      }
    }
  }
});
// barchart end

// doughnut start
const week = document.getElementById('weekly-chart');

new Chart(week, {
  type: 'doughnut',
  data: {
    labels: ['Social','Search','Direct','Others'],
    datasets: [{
      data: [260,125,54,146],
      backgroundColor: ['rgb(63,128,234)','rgb(240,173,78)','rgb(217,83,79)','rgb(232,234,237)'],
      weight: 1,
      radius:'60%',
      cutout:'75%',
      offset: 10
    }]
  },
  options: {
    plugins:{
      legend:{
        display:false,
      }
    },
    responsive: true,
    scales: {
      x: {
        display:false,
      },
      y: { 
        display:false,
      }
    }
  }
});
// doughnut end

// radar start
const radar = document.getElementById('radar');

new Chart(radar, {
  type: 'radar',
  data: {
    labels: ['Technolgy','Sports','Media','Gaming','Arts'],
    datasets: [{
      data: [70,53,82,60,33],
      backgroundColor: 'rgb(63,128,234,0.3)',
      borderColor: 'rgb(63,128,234)',
    }]
  },
  options: {
    plugins:{
      legend:{
        display:false,
      }
    },
    responsive: true,
    scales: {
      x: {
        display:false,
      },
      y: { 
        display:false,
      }
    }
  }
});
// radar end