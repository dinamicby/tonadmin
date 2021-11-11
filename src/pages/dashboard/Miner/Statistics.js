// @flow
import React, {useState, useEffect} from 'react';
import { Card, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import Lottie from "lottie-react";
import diamondAnimation from "../../../assets/diamond.json";

import statsImg from '../../../assets/images/email-campaign.svg';
import StatisticsWidget from '../../../components/StatisticsWidget';
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { APICore } from '../../../helpers/api/apiCore';
const api = new APICore();

Moment.globalFormat = 'DD/MM/YYYY HH:mm';

const Statistics = (props): React$Element<React$FragmentType> => {
    const [price, setPrice] = useState(0);
    const [hash, setHash] = useState(null);
    const [income, setIncome] = useState(0);
    let statusdata = props.statusData
    let validatorEfficiency = statusdata ? statusdata.validatorEfficiency : null;
    useEffect(async () => {
      setIncome(localStorage.getItem('winning'))

      api.get(window.location.protocol + "//ton.swisscops.com/statistics/jsons/hashrate_1day.json").then(response => {
        let data = JSON.parse(response.data.replace(/[\n\r\t]/g,""));
        let maxHash = 0 ;
        for(let item of data.data){
           maxHash = (item[0] > maxHash) ? item[0] : maxHash;
        }
        setHash((maxHash/10**9).toFixed(0))
      })

      let price = await api.get("https://api.ton.sh/getPrice")
      setPrice(price.data.result)



    }, []);



    return (
        <>
        <Col xs={12} sm={6} md={3}>
          {!statusdata ?
            <Card className="tilebox-one">
              <Card.Body>
                <SkeletonTheme >
                    <Skeleton count={4} />
                </SkeletonTheme>
              </Card.Body>
            </Card>
            :
            <StatisticsWidget
                icon={`mdi mdi-pickaxe bg-white ${(statusdata.minerAddr && statusdata.powAddr) ? "text-success" : "text-warning"}`}
                description="Mining"
                title="Mining status"
                stats={(statusdata.minerAddr && statusdata.powAddr) ? "Mining" : "Not mining"}
                bgclassName={(statusdata.minerAddr && statusdata.powAddr) ? "bg-success" : "bg-warning"}
                textClass="text-white"></StatisticsWidget>
              }
          </Col>
          <Col xs={12} sm={6} md={3}>
              {!statusdata ?
                <Card className="tilebox-one">
                  <Card.Body>

                        <Skeleton count={4} />

                  </Card.Body>
                </Card>
                :
              <Card className="tilebox-one">
                  <Card.Body>
                      <i className="mdi mdi-console-network-outline float-end"></i>
                      <h6 className="text-uppercase mt-0">Ton price</h6>
                      <h2 className="my-2" id="active-users-count">
                          {price} $
                      </h2>
                      <p className="mb-0 text-muted">
                          <span className="text-nowrap">Fuelling the rocket!</span>
                      </p>
                  </Card.Body>
              </Card>
              }
            </Col>
            <Col xs={12} sm={6} md={3}>
            {!hash ?
              <Card className="tilebox-one">
                <Card.Body>
                      <Skeleton count={4} />
                </Card.Body>
              </Card>
              :

              <Card className="tilebox-one">
                  <Card.Body>
                      <i className=" mdi mdi-chart-timeline-variant float-end"></i>
                      <h6 className="text-uppercase mt-0">Network hashrate</h6>
                      <h2 className="my-2" id="active-users-count">
                          {hash ? hash : 0} Gh/s
                      </h2>
                      <p className="mb-0 text-muted">
                          <span className="text-nowrap">Today's max hashrate</span>
                      </p>
                  </Card.Body>
              </Card>
            }
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="tilebox-one">
                <Card.Body>
                    <h6 className="text-uppercase mt-0">Today's winning</h6>
                    <h2 className="my-2" id="active-users-count">
                        <div>
                            <span style={{float: 'left', fontSize: 28}}>{income ? income : '0'}</span>
                            <Lottie className="diamond" style={{width: 25, display: 'inline-block', marginLeft: 4}} animationData={diamondAnimation} />
                         </div>
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-nowrap">Lambo is so close..</span>
                    </p>
                </Card.Body>
            </Card>
          </Col>
        </>
    );
};

export default Statistics;
