import React, { Component } from 'react';
import CanvasJSReact from '../Media/graphs/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class GraphComponent extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: ""
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$"
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 20000 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
				]
			}]
		}
		return (
		<div className='graphi'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default GraphComponent;                