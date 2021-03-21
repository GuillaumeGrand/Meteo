import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["02:00", "05:00", "08:00", "08:00", "08:00", "11:00", "14:00", "17:00", "20:00", "23:00"],
                datasets: [
                    {

                        data: [277.85,  276.81, 275.97,  279.08, 283.16, 275.97, 284.68, 282.2, 280.33, 279.12, 279.12, 279.12],
                        borderColor: "#FBD13C",
                        backgroundColor: "#FEF5D5"
                    }
                ]
            },
            options: {
              elements: {
        line: {
            tension: 0 // disables bezier curves
        }
	},
              responsive: true,
              maintainAspectRatio: false,
              legend: {
        display: false
    },
              scales: {
                  xAxes: [{
                      ticks: { display: true },
                      gridLines: {
                          display: false,
                          drawBorder: false
                      }
                  }],
                  yAxes: [{
                      ticks: { display: false,
                               suggestedMin: 50,
                               suggestedMax: 100
                       },
                      gridLines: {
                          display: false,
                          drawBorder: false
                      }
                  }]
              }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    height="120px"
                    width="410px"
                />
            </div>
        )
    }
}
