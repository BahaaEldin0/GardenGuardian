import React, { useState, useEffect } from 'react';
import { SimpleGauge } from "react-gauges";
import Dashboard from './Dashboard';

const SensorGauge = ({ value, label,minLimit, maxLimit, barColor, barBaseColor, labelTeemplate  }) => {
  return (
    <div>
            <SimpleGauge value={value} minLimit={minLimit} maxLimit={maxLimit} barColor={barColor} barBaseColor={barBaseColor} labelTemplate={value+labelTeemplate}/>

    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
