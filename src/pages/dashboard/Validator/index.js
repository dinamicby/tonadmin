// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { APICore } from '../../../helpers/api/apiCore';

// components
import HyperDatepicker from '../../../components/Datepicker';

import Statistics from './Statistics';
import IncomeChart from './IncomeChart';

import Wallets from './Wallets';
import History from '../../AddressHistory';
const api = new APICore();


const ValidatorDashboardPage = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [status, setStatus] = useState(0);
    const [statusdata, setStatusdata] = useState(0);
    const [validatorAddress, setValidatorAddress] = useState(localStorage.getItem('validatorAddress'));

  //  localStorage.setItem('validatorAddress', 'kf8uw5J61EpzZiONm7hcz23nQMn7BxIE7d1hiM2xHXALek9I')
    useEffect(async () => {
      //  send()
        getStatus()

    }, []);

    const getStatus = async () =>{
      setStatus(false)
      const result = await api.sendJRPC('/', 'status')
      if(result && !result.error && result.data &&  result.data.result !== "empty"){
        let data = result.data.result
          setValidatorAddress(data.validatorWalletAddr)
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
          setStatusdata(data)

          /*  Object.keys(data).forEach(row => {
              tableData.push({
                  name: data[row].name,
                  status: data[row].status,
                  workchain: data[row].workchain,
                  balance: data[row].balance,
                  address: data[row].addr,
              })
            })*/

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
                        <h4 className="page-title" >Analytics</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={5} xl={4} xxl={3}>
                    <Statistics statusData={statusdata}/>
                </Col>

                <Col lg={7} xl={8} xxl={9} >
                    <IncomeChart validatorAddress={validatorAddress}/>
                </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xl={12} xxl={12}>
                  <Wallets />
              </Col>
            </Row>
            <Row>

            <Col lg={12}>
              <History wallet={validatorAddress} />
            </Col>

            </Row>
        </>
    );
};

export default ValidatorDashboardPage;
