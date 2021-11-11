// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { APICore } from '../../../helpers/api/apiCore';

// components
import HyperDatepicker from '../../../components/Datepicker';

import Statistics from './Statistics';
import HashrateChart from './HashrateChart';
import IncomeChart from './IncomeChart';

import Wallets from './Wallets';
import History from '../../AddressHistory';
const api = new APICore();


const MinerDashboardPage = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [status, setStatus] = useState(0);
    const [statusdata, setStatusdata] = useState(0);
    const [wallets, setWallets] = useState([]);

    let validatorAddress = localStorage.getItem('validatorAddress')
    //localStorage.setItem('validatorAddress', 'kf8uw5J61EpzZiONm7hcz23nQMn7BxIE7d1hiM2xHXALek9I')
    useEffect(async () => {
      //  send()
        getStatus()
    }, []);

    const getStatus = async () =>{
      setStatus(false)
      const result = await api.sendJRPC('/', 'status')

      if(result && !result.error && result.data &&  result.data.result !== "empty"){
        let data = result.data.result
          let unixTime = data.validatorStatus.unixtime;
          switch(true){
            case parseFloat(data.validatorEfficiency) > 90:
              data.validatorEfficiency =  <span className="text-success">{data.validatorEfficiency}%</span>
            case parseFloat(data.validatorEfficiency) > 50:
              data.validatorEfficiency = <span className="text-warning">{data.validatorEfficiency}%</span>
            case parseFloat(data.validatorEfficiency) > 0:
              data.validatorEfficiency = <span className="text-danger">{data.validatorEfficiency}%</span>
            default:
              data.validatorEfficiency = null
          }

          let minerAddr = await api.sendJRPC('/', 'get', ['minerAddr'])
          data.minerAddr = minerAddr.data.result
          let powAddr = await api.sendJRPC('/', 'get', ['powAddr'])
          data.powAddr = powAddr.data.result

          setStatusdata(data)
      }else{
          console.log("ERROR")
      }

    }

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <button className="btn btn-primary ms-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </button>
                            </form>
                        </div>
                        <h4 className="page-title" >Mining analytics</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                  <Statistics statusData={statusdata} wallets={wallets}/>
            </Row>
            <Row>
              <Col xs={12} >
                  {statusdata.minerAddr ?
                  <IncomeChart wallet={statusdata.minerAddr}/>
                  :
                  <IncomeChart/>
                  }
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                  <HashrateChart/>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>

              </Col>
              <Col lg={12}>
                  <Wallets changeWallets={setWallets} />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                  <History wallet={statusdata.minerAddr} />
              </Col>
            </Row>
        </>
    );
};

export default MinerDashboardPage;
