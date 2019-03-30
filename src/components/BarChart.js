import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    
    // const svg = d3.select("body")
    // .append("svg")
    // .attr("width", 600)
    // .attr("height", 100);

    d3.select(this.svgEl).selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 100 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }

  render() {
    return (
      <div id='B'>
        <h2>BarChart</h2>
        <svg width={600} height={100} ref={el => this.svgEl = el}></svg>
      </div>
    );
  }
}

export default BarChart;
