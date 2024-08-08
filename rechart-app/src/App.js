import React from "react";
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';


function App() {
  return (
    <div className="App">
      <h1>Visualizacon de datos</h1>
      <div className="recharts-wrapper">
        <h2>Grafico de lieas</h2>
        <LineChartComponent />
      </div>
      <div className="recharts-wrapper">
        <h2>Grafico de barras</h2>
        <BarChartComponent />
      </div>
    </div>
  );
}

export default App;
