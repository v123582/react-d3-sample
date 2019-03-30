import React, {Component} from 'react';
import * as d3 from "d3";

function getData() {
  let numItems = 20 + Math.floor(20 * Math.random())
  let data = []
  for(let i=0; i<numItems; i++) {
    data.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random(),
      colour: i % 5
    })
  }
  return data
}

let colours = ['#2176ae', '#57b8ff', '#b66d0d', '#fbb13c', '#fe6847']


class BubbleChart extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      data: getData()
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.updateStyleAndAttrs = this.updateChart.bind(this)
  }
  
  handleClick() {
    this.setState({
      data: getData()
    })
  }
  
  componentDidMount() {
    this.updateChart()
  }

  componentDidUpdate() {
    this.updateChart()
  }
  
  updateChart() {
    let maxRadius = 40
    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 300])
    let yScale = d3.scaleLinear().domain([0, 1]).range([0, 300])
    let rScale = d3.scaleLinear().domain([0, 1]).range([0, maxRadius])


    let update = d3.select(this.svgEl).selectAll("circle").data(this.state.data);
    update.enter().append("circle");
    update.exit().remove();


    d3.select(this.svgEl).selectAll("circle")
      .attr('cx', 0.5 * 300)
      .attr('cy', 0.5 * 300)
      .style('fill', '#fff')
      .transition()
      .duration(1000)
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', d => rScale(d.r))
      .style('fill', d => colours[d.colour])
    
  }

  render() {

    let maxRadius = 40
    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 300])
    let yScale = d3.scaleLinear().domain([0, 1]).range([0, 300])
    let rScale = d3.scaleLinear().domain([0, 1]).range([0, maxRadius])

    let points = this.state.data.map((d,i) => 
      <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={rScale(d.r)} fill={colours[d.colour]} 
    />)

    return (
      <div>
        <h2>BubbleChart</h2>
        <svg width={300} height={300} ref={el => this.svgEl = el}></svg>
        <svg width={300} height={300}>{points}</svg>
        <div><button onClick={this.handleClick}>Update</button></div>
      </div>
    );
  }
}

export default BubbleChart;
