import React from 'react'
import Router from 'next/router'
import ReactEcharts from 'echarts-for-react';



export default class extends React.Component {
    render () {
        return (
            <ReactEcharts
    option={this.getOption()} 
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
    onChartReady={this.onChartReadyCallback}
    onEvents={EventsDict} />
        )
    }
}
