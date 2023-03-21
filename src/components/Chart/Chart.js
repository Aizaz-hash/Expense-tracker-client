import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart =(props) =>{


    const chartPointValues = props.chartPoints.map(chartPoint => chartPoint.value);

    //spread operator ... will pass 12 argustment in paramerter instead of an aray
    const totalMaxValue  = Math.max(...chartPointValues)

    return(
        <div className="chart">

            {props.chartPoints.map(singleChartPoint => 
                <ChartBar 
                    key={singleChartPoint.label} 
                    value = {singleChartPoint.value} 
                    maxValue = {totalMaxValue} 
                    label = {singleChartPoint.label}
                />)
            }
        </div>
    )


};

export default Chart