import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {

    chartRef = React.createRef();


    componentDidMount(objet) {

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

    componentDidUpdate() {
      const myChartRef = this.chartRef.current.getContext("2d");
      const list = this.props.objet[0]["list"];
      const index = this.props.index;
      const array = list.slice(index, index + 9);
      const data = [];
      let comptloop = 0
      let day = ""

     for (let i of array) {
       comptloop ++
       if (i["dt_txt"].split(' ')[1] == "00:00:00") {
         day = i
         break;
       }
     }

 const index_ref = (index - 1) + comptloop
 const final_day = list.slice(index_ref, index_ref + 8);

  for (let i of final_day) {
    data.push(Math.ceil(i["main"]["temp"] -273.15))
  }

      new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: ["00:00","03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
              datasets: [
                  {

                      data: data,
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
                             suggestedMin: data[0] -10,
                             suggestedMax: data[0] +10
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
