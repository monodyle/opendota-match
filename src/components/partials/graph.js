import { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Graph = ({ data, radiant_name, dire_name }) => {
  const _c = { radiant: '#6dc200', dire: '#c33334' }
  const options = {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
      height: '256px',
      borderColor: '#000',
      plotBorderColor: '#000',
    },
    title: {
      text: '',
    },
    tooltip: {
      formatter: function () {
        return `${this.y >= 0 ? radiant_name : dire_name} advantage at ${this.x} minutes: ${
          this.y >= 0 ? this.y : this.y * -1
        }`
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        data: data,
        color: _c.radiant,
        negativeColor: _c.dire,
        fillOpacity: 0.5,
        lineWidth: 4,
      },
    ],
    yAxis: [
      {
        title: {
          text: '',
        },
        gridLineColor: 'rgba(255 255 255 / 10%)',
      },
    ],
    xAxis: [
      {
        lineColor: 'rgba(255 255 255 / 10%)',
        tickColor: 'rgba(255 255 255 / 10%)',
      },
    ],
  }

  return (
    <div className='h-full ml-4'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default Graph
