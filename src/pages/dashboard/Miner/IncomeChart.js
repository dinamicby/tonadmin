// @flow
import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import TonWeb from "tonweb";
import { Card } from 'react-bootstrap';
import Lottie from "lottie-react";
import stonksAnimation from "../../../assets/stonks.json";


import { APICore } from '../../../helpers/api/apiCore';
import Spinner from '../../../components/Spinner';
import { known_accounts } from '../../../constants/known_accounts';


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
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#0088CC', '#d3e6f5'],
        xaxis: {
            type: 'string',
            trim: true,
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
                    return val + " TONS";
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'solid',
            opacity: 0.5,
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.65,
                opacityTo: 0.2,
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
      let address = props.wallet;
      let txs = localStorage.getItem('mining@' + address)


      // localStorage.removeItem('earnings@' + address)

      if(txs && JSON.parse(txs) && JSON.parse(txs).length > 0){
        txs = JSON.parse(txs)

          let newtxs = await tonweb.getTransactions(address, 400, null, null, txs[0].transaction_id.lt);



        if(newtxs.length > 0 ){
          txs = newtxs.concat(txs);
        }
      }else{
        let lt = null, txhash = null;
        txs = [];
        do {
            let newtxs

               newtxs = await tonweb.getTransactions(address, 400, lt, txhash)


           txs = txs.concat(newtxs)
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
          if(known_accounts[tx.in_msg.source]){
            txDataArray.push(tx)
          }
        }
          console.log('build')
        console.log(txDataArray)
        buildChart(txDataArray);
        localStorage.setItem('mining@' + address, JSON.stringify(txDataArray))
      }
    }

    Date.prototype.getMonthName = function(lang) {
        lang = lang && (lang in Date.locale) ? lang : 'en';
        return Date.locale[lang].month_names[this.getMonth()];
    };

    Date.prototype.getMonthNameShort = function(lang) {
        lang = lang && (lang in Date.locale) ? lang : 'en';
        return Date.locale[lang].month_names_short[this.getMonth()];
    };

    Date.locale = {
        en: {
           month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
           month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };



    const buildChart = async (txs) => {
        let chartData = []
        let apexBarChartOpts = chartOpts
        if(txs){
          let tableData = []
          txs = txs
          let income = 0;
          let i = 0;
          let weeklyIncome = 0, lastWeekIncome = 0, weeklyArray = [];
          let yesterday = 0;
          let value = 0;

          for(let txrow in txs){
            let tx = txs[txrow];
            if(known_accounts[tx.in_msg.source] && txs[parseInt(txrow)+1]){
              if(new Date(tx.utime * 1000).getUTCDate() == yesterday || yesterday == 0){
                value += (tx.in_msg.value / 10**9)
              //console.log(value)
              }else{
                value = 100
              }


              if(txs[parseInt(txrow)+1] && new Date(txs[parseInt(txrow)+1].utime * 1000).getUTCDate() != new Date(tx.utime * 1000).getUTCDate()){
                if(tx.utime < (Math.floor(Date.now() / 1000) )){
                  var today = new Date(tx.utime * 1000);
                  var date = today.getDate()+' '+(today.getMonthNameShort());
                  chartData.push({'x': date, 'y' : value })
                  if(today.getDate() == new Date().getDate() && today.getMonth() == new Date().getMonth()){
                    localStorage.setItem('winning', value)
                  }
                }

              }
              yesterday = new Date(tx.utime * 1000).getUTCDate()

            }
          }

          //localStorage.setItem('WeeklyIncome', JSON.stringify([weeklyArray, parseInt(weeklyIncome), parseInt(lastWeekIncome)]))
          let apexBarChartData = [
              {
                  name: 'Earnings',
                  data: chartData.reverse(),
              },
          ];


          setChartData(apexBarChartData)
          setChartOpts(apexBarChartOpts)
          setLoading(false)

      }
    }
    useEffect(() => {

      if(props.wallet && loading){

        updateChart()
      }
    }, [props.wallet, loading]);


    return (
        <Card className="card-h-400" style={{minHeight: 400}}>
            <Card.Body>

                <h4 className="header-title mb-3">Mining Earnings</h4>
                {loading ?
                  <div style={{position: "absolute", left: "calc(50% - 50px)", top: "calc(50% - 50px)"}}>
                    <Lottie style={{width: 100, display: 'inline-block'}} animationData={stonksAnimation} />
                  </div>
                  :
                  <Chart
                      options={chartOpts}
                      series={chartData}
                      type="bar"
                      className="apex-charts mt-3"
                      height={550}
                  />
                }


            </Card.Body>
        </Card>
    );

};

export default IncomeChart;
