// @flow
import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import TonWeb from "tonweb";
import { Card } from 'react-bootstrap';
import Lottie from "lottie-react";
import stonksAnimation from "../../../assets/stonks.json";


import { APICore } from '../../../helpers/api/apiCore';
import Spinner from '../../../components/Spinner';

const api = new APICore();
const tonweb = new TonWeb()
const Address = tonweb.utils.Address;

const IncomeChart = (props): React$Element<React$FragmentType> => {
    const [loading, setLoading] = useState(true);


    let apexBarChartOpts = {
        annotations: {
          xaxis:[
          ]
        },
        noData: {
          text: 'No data'
        },
        chart: {
            height: 600,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: {
                show: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#0088CC'],
        xaxis: {
            type: 'datetime',
            trim: true,
            tickAmount: 20,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + " TONS";
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
            name: 'Balance',
            data: [],
        },
    ];

    const [chartOpts, setChartOpts] = useState(apexBarChartOpts)
    const [chartData, setChartData] = useState(apexBarChartData)


    const updateChart = async () => {
      let validatorAddress = props.validatorAddress;

      let txs = localStorage.getItem('earnings@' + validatorAddress)
      // localStorage.removeItem('earnings@' + validatorAddress)

      if(txs && JSON.parse(txs) && JSON.parse(txs).length > 0){
        txs = JSON.parse(txs)
        let newtxs = await tonweb.getTransactions(validatorAddress, 400, null, null, txs[0].transaction_id.lt);
        if(newtxs.length > 0 ){
          txs = newtxs.concat(txs);
        }
      }else{

        let lt = null, txhash = null;
        txs = [];
        do {
           txs = txs.concat(await tonweb.getTransactions(validatorAddress, 400, lt, txhash))
           if(txs.length > 0){
             lt = Number(txs[txs.length-1].transaction_id.lt)
             txhash = tonweb.utils.bytesToHex(tonweb.utils.base64ToBytes(txs[txs.length-1].transaction_id.hash))
           }else{
             break;
             setLoading(false)
           }
        } while (txs[0].utime < (Math.floor(Date.now() / 1000) - 2628000) )
      }
      if(txs.length > 0){
        let txDataArray = []

        for(let tx of txs){
          if((tx.out_msgs && tx.out_msgs[0] && tx.out_msgs[0].destination == "Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF" && tx.out_msgs[0].value/10**9 > 15) || (tx && tx.in_msg.source == "Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF" && tx.in_msg.value/10**9 > 15) ){
            txDataArray.push(tx)
          }
        }
        buildChart(txDataArray);
        localStorage.setItem('earnings@' + validatorAddress, JSON.stringify(txDataArray))
      }else{
        setLoading(false)
      }
    }

    const buildChart = async (txs) => {
        let chartData = []
        let apexBarChartOpts = chartOpts
        if(txs){
          let tableData = []
          txs = txs
          let income = 0;
          let i = 0;
          let weeklyIncome = 0, lastWeekIncome = 0, weeklyArray = [];
          for(let txrow in txs){
            let tx = txs[txrow];

            // Skip the last placed stake that did not return from elector
            if(tx && tx.in_msg.source == "Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF" && tx.in_msg.value/10**9 > 10000 ){
              i++
              income = tx.in_msg.value/10**9;
            }

            if(tx.out_msgs && tx.out_msgs[0] && tx.out_msgs[0].destination == "Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF" && tx.out_msgs[0].value/10**9 > 10000 && i != 0){

              let profit = income - tx.out_msgs[0].value/10**9

              if(profit < 0){
                continue;
              }
              let annotation;
              if(profit >= tx.out_msgs[0].value/10**9){
                profit = profit - tx.out_msgs[0].value/10**9
                annotation = 'Returned 2 stakes'
              }
              if(profit < 10000){
                if(tx.utime > (Math.floor(Date.now() / 1000) - 604800) ){
                  weeklyArray.push(parseInt(profit))
                  weeklyIncome += profit
                }
                if(tx.utime > (Math.floor(Date.now() / 1000) - (604800*2)) && tx.utime < (Math.floor(Date.now() / 1000) - 604800)){
                  lastWeekIncome += profit
                }
                chartData.push({'x': new Date(tx.utime * 1000), 'y' : profit.toFixed(0)})
                if(annotation){
                  if(!apexBarChartOpts.annotations){
                    apexBarChartOpts.annotations = {}
                    apexBarChartOpts.annotations.xaxis = []
                  }
                  apexBarChartOpts.annotations.xaxis.push(
                    {
                        x: new Date(tx.utime * 1000).getTime(),
                        borderColor: '#0acf97',
                        label: {
                            borderColor: '#0acf97',
                            style: {
                                color: '#fff',
                                background: '#0acf97',
                            },
                            text: annotation,
                        },
                    }
                  )
                }
              }
              if(profit < 300000){
                  income = 0;
              }
            }


          }
          localStorage.setItem('WeeklyIncome', JSON.stringify([weeklyArray, parseInt(weeklyIncome), parseInt(lastWeekIncome)]))
          let apexBarChartData = [
              {
                  name: 'Earnings',
                  data: chartData.reverse(),
              },
          ];

          setChartData(apexBarChartData)
          setChartOpts(apexBarChartOpts)
          setLoading(false)

      }else{
        setLoading(false)
      }
    }
    useEffect(() => {
      if(props.validatorAddress && loading){
        updateChart()
      }
    }, [props.validatorAddress]);


    return (
        <Card className="card-h-100">
            <Card.Body>

                <h4 className="header-title mb-3">Validator Earnings</h4>
                {loading ?
                  <div style={{position: "absolute", left: "calc(50% - 50px)", top: "calc(50% - 50px)"}}>
                    <Lottie style={{width: 100, display: 'inline-block'}} animationData={stonksAnimation} />
                    {/*<Spinner color="light" type="grow" />*/}
                  </div>
                  :
                  <Chart
                      options={chartOpts}
                      series={chartData}
                      type="area"
                      className="apex-charts mt-3"
                      height={550}
                  />
                }


            </Card.Body>
        </Card>
    );

};

export default IncomeChart;
