import React, { Component } from 'react';

import BarChart from './components/BarChart'
import BubbleChart from './components/BubbleChart'
import MapChart from './components/MapChart'
import NewChart from './components/NewChart'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <BarChart />
        <BubbleChart />
        <MapChart />
        <NewChart />
      </div>
    );
  }
}

export default App;

// https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0
// https://frontendcharts.com/react-d3-integrate/
// https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98