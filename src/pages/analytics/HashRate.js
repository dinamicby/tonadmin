// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import Lottie from "lottie-react";
import stonksAnimation from "../../assets/stonks.json";

import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

class HashRate extends React.Component{
  constructor(props){
    super(props);

    const colors = ['#0088CC'];

    let apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        noData: {
          text: 'No Data'
        },
        chart: {
            height: 550,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
            width: 2,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: colors,
        xaxis: {
            type: 'datetime',
            trim: true,
            tickAmount: 20,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val/10**12 + 'T';
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };

    let apexBarChartData = [
        {
            name: 'Hashrate',
            data: [],
        },
    ];

    this.state = {
      apexBarChartData,
      apexBarChartOpts,
      loading: true,
      labelsArray: []
    }
  }



  componentDidMount(){

    this.updateChart('3month')

  }

  async updateChart(period){
    let chartData = []
    api.get(window.location.protocol + "//ton.swisscops.com/statistics/jsons/hashrate_"+period + '.json').then(response => {
      let data = JSON.parse(response.data.replace(/[\n\r\t]/g,""));
      let start = data.meta.start;
      let step = data.meta.step;
      for(let item of data.data){
        if(item[0]){
          chartData.push({'x': new Date(start * 1000), 'y' : item[0]})
        }
        start += step;
      }

      let apexBarChartData = [
          {
              name: 'Hashrate',
              data: chartData,
          },
      ];

      this.setState({apexBarChartData, isActiveChart: period, loading: false})
    })

  }



  render(){
    const {show, isActiveChart, loading} = this.state;
    return (
        <Card className="card-h-100" style={{minHeight: 600}}>
            <Card.Body>
                <ul className="nav float-end d-none d-lg-flex">
                    <li className="nav-item">
                        <button className={`nav-link ${isActiveChart == '1day' ? "active" : "text-muted"}`} onClick={() => this.updateChart('1day') }>
                            1d
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${isActiveChart == '1week' ? "active" : "text-muted"}`} onClick={() => this.updateChart('1week') } >
                            7d
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${isActiveChart == '1month' ? "active" : "text-muted"}`} onClick={() => this.updateChart('1month') } >
                            1m
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${isActiveChart == '3month' ? "active" : "text-muted"}`} onClick={() => this.updateChart('3month') } >
                            3m
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${isActiveChart == '6months' ? "active" : "text-muted"}`} onClick={() => this.updateChart('6months') } >
                            6m
                        </button>
                    </li>
                </ul>
                  {loading ?
                    <div style={{position: "absolute", left: "calc(50% - 50px)", top: "calc(50% - 50px)"}}>
                      <Lottie style={{width: 100, display: 'inline-block'}} animationData={stonksAnimation} />
                      {/*<Spinner color="light" type="grow" />*/}
                    </div>
                    :
                    <Chart
                        options={this.state.apexBarChartOpts}
                        series={this.state.apexBarChartData}
                        type="area"
                        className="apex-charts mt-3"
                        height={550}
                    />
                  }
            </Card.Body>
        </Card>
    );
  }
};

export default HashRate;
