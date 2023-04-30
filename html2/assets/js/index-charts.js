'use strict';

/* Chart.js docs: https://www.chartjs.org/ */

window.chartColors = {
	green: '#75c181',
	gray: '#a9b5c9',
	text: '#252930',
	border: '#e7e9ed',
	orange: '#fd7e14',
	teal: '#17a2b8',
	Turquoise: '#61a0a8',
	Dark_Green:'#749f83',
	Purple:'#e498d1',
	Golden_Yellow:'#c9ab00',
	Yellow_Brown:'#ca8622',
	blue:'#35638f'
};

/* Random number generator for demo purpose */
var randomDataPoint = function(){ return Math.round(Math.random()*500000)};

//我的数据值
// let data = []


//Chart.js Line Chart Example 

var lineChartConfig = {
	type: 'line',

	data: {
		labels: ['species 1', 'species 2', 'species 3', 'species 4', 'species 5', 'species 6', 'species 7'],
		
		datasets: [{
			label: 'All SSRs',
			fill: false,
			backgroundColor: window.chartColors.green,
			borderColor: window.chartColors.green,
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
		}, {
			label: 'Perfect SSRs',
			borderDash:[5,3],
			backgroundColor: window.chartColors.orange,
			borderColor: window.chartColors.orange,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
			fill: false,
		},
		{
			label: 'Genetic Perfect SSRs',
		    borderDash: [3, 5],
			backgroundColor: window.chartColors.teal,
			borderColor: window.chartColors.teal,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
			fill: false,
		}]
	},
	options: {
		responsive: true,	
		aspectRatio: 1.5,
		
		legend: {
			display: true,
			position: 'bottom',
			align: 'end',
		},
		
		title: {
			display: true,
			text: 'SSR Classification By Species lineChart',
			
		}, 
		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,

            callbacks: {
	            //Ref: https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
                label: function(tooltipItem, data) {
	                if (parseInt(tooltipItem.value) >= 1000) {
                        return  tooltipItem.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
	                    return '$' + tooltipItem.value;
                    }
                }
            },

		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				
				}
			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return   value.toLocaleString();   //Ref: https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
		            }
		        },
			}]
		}
	}
};



// Chart.js Bar Chart Example 

var barChartConfig = {
	type: 'bar',

	data: {
		labels: ['species 2', 'species 2', 'species 3', 'species 4', 'species 5', 'species 6', 'species 7'],
		datasets: [{
			label: 'All SSRs',
			backgroundColor: window.chartColors.green,
			borderColor: window.chartColors.green,
			borderWidth: 1,
			maxBarThickness: 16,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		},{
			label: 'Perfect SSRs',
			backgroundColor: window.chartColors.orange,
			borderColor: window.chartColors.orange,
			borderWidth: 1,
			maxBarThickness: 16,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		},{
			label: 'Genetic Perfect SSRs',
			backgroundColor: window.chartColors.teal,
			borderColor: window.chartColors.teal,
			borderWidth: 1,
			maxBarThickness: 16,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		}]
	},
	options: {
		responsive: true,
		aspectRatio: 1.5,
		legend: {
			position: 'bottom',
			align: 'end',
		},
		title: {
			display: true,
			text: 'SSR Classification By Species BarChart'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,

		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},

			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.borders,
				},

				
			}]
		}
		
	}
}


// Pie Chart Demo

var pieChartConfig = {
	type: 'pie',
	data: {
		datasets: [{
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
			backgroundColor: [
				window.chartColors.green,
				window.chartColors.blue,
				window.chartColors.gray,
				window.chartColors.orange,
				window.chartColors.Purple,
				window.chartColors.Golden_Yellow,
				window.chartColors.Turquoise
			],
			label: 'Dataset 1'
		}],
		labels: [
			'species 1',
			'species 2',
			'species 3',
			'species 4',
			'species 5',
			'species 6',
			'species 7'
		]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			align: 'center',
		},

		tooltips: {
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			
			/* Display % in tooltip - https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages */
			callbacks: {
                label: function(tooltipItem, data) {
					//get the concerned dataset
					var dataset = data.datasets[tooltipItem.datasetIndex];
					//calculate the total of this data set
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
					});
					//get the current items value
					var currentValue = dataset.data[tooltipItem.index];
					//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
					var percentage = Math.floor(((currentValue/total) * 100)+0.5);
					
					return percentage + "%";
			    },
            },
			

		},
	}
};


// Doughnut Chart Demo


var doughnutChartConfig = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
			backgroundColor: [
				window.chartColors.green,
				window.chartColors.blue,
				window.chartColors.Yellow_Brown,
				window.chartColors.orange,
				window.chartColors.Purple,
				window.chartColors.Golden_Yellow,
				window.chartColors.Turquoise
			],
			label: 'Dataset 1'
		}],
		labels: [
			'species 1',
			'species 2',
			'species 3',
			'species 4',
			'species 5',
			'species 6',
			'species 7'
		]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			align: 'center',
		},

		tooltips: {
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			
			animation: {
				animateScale: true,
				animateRotate: true
			},
			
			/* Display % in tooltip - https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages */
			callbacks: {
                label: function(tooltipItem, data) {
					//get the concerned dataset
					var dataset = data.datasets[tooltipItem.datasetIndex];
					//calculate the total of this data set
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
					});
					//get the current items value
					var currentValue = dataset.data[tooltipItem.index];
					//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
					var percentage = Math.floor(((currentValue/total) * 100)+0.5);
					
					return percentage + "%";
			    },
            },
			

		},
	}
};





// Generate charts on load
window.addEventListener('load', function(){
	
	var lineChart = document.getElementById('canvas-linechart').getContext('2d');
	window.myLine = new Chart(lineChart, lineChartConfig);
	
	var barChart = document.getElementById('canvas-barchart').getContext('2d');
	window.myBar = new Chart(barChart, barChartConfig);
	
	var pieChart = document.getElementById('chart-pie').getContext('2d');
	window.myPie = new Chart(pieChart, pieChartConfig);

	var doughnutChart = document.getElementById('chart-doughnut').getContext('2d');
	window.myDoughnut = new Chart(doughnutChart, doughnutChartConfig);
});	
	
