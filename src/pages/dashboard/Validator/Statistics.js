// @flow
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
import Lottie from "lottie-react";
import diamondAnimation from "../../../assets/diamond.json";

import statsImg from '../../../assets/images/email-campaign.svg';
import StatisticsWidget from '../../../components/StatisticsWidget';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { APICore } from '../../../helpers/api/apiCore';
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

Moment.globalFormat = 'DD.MM.YYYY HH:mm';

const Statistics = (props): React$Element<React$FragmentType> => {
    const [validatorEfficiency, setValidatorEfficiency] = useState(null);

    let statusdata = props.statusData
    let income = JSON.parse(localStorage.getItem('WeeklyIncome'));
    let trendPerc = 0, trend;

    if(income){
      if(income[1] > income[2]){
        trendPerc = (income[1]/income[2] - 1) * 100;
         trend = { textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: trendPerc.toFixed(1) + ' %'}
      }else{
        trendPerc =(income[2]/income[1] - 1) * 100;
        trend = { textClass: 'text-danger', icon: 'mdi mdi-arrow-down-bold', value: trendPerc.toFixed(1) + ' %'}
      }
    }
    useEffect(async () => {
    
      setValidatorEfficiency(props.statusData.validatorEfficiency);
    }, []);


    return (
        <>
          {!statusdata ?
            <Card className="tilebox-one bg-success">
              <Card.Body>
                <SkeletonTheme className="bg-success" color="#0eb862" highlightColor="#0ed16e">
                    <Skeleton count={5} />
                </SkeletonTheme>
              </Card.Body>
            </Card>
            :
            <StatisticsWidget
                icon={`mdi mdi-vote-outline bg-white ${statusdata.electionId ? "text-success" : "text-warning"}`}
                description="Open"
                title="Election status"

                stats={statusdata.electionId ? "OPEN" : "CLOSED"}
                trend={{
                    textClass: 'badge badge-light-lighten',
                    icon: 'mdi mdi-clock',
                    value: 'End of elections: ',
                    time: <Moment unix >{statusdata.endElection}</Moment>,
                }}
                bgclassName={statusdata.electionId ? "bg-success" : "bg-warning"}
                textClass="text-white"></StatisticsWidget>

              }
              {!statusdata ?
                <Card className="tilebox-one">
                  <Card.Body>

                        <Skeleton count={5} />

                  </Card.Body>
                </Card>
                :
              <Card className="tilebox-one">
                  <Card.Body>
                      <i className="mdi mdi-console-network-outline float-end"></i>
                      <h6 className="text-uppercase mt-0">Active Validators</h6>
                      <h2 className="my-2" id="active-users-count">
                          {statusdata.onlineValidators}
                      </h2>
                      <p className="mb-0 text-muted">
                          <span className="text-nowrap">Total of {statusdata.totalValidators} </span>
                      </p>
                  </Card.Body>
              </Card>
              }

            <Card className="tilebox-one">
                <Card.Body>
                    <i className=" mdi mdi-chart-timeline-variant float-end"></i>
                    <h6 className="text-uppercase mt-0">Validator Efficiency</h6>
                    <h2 className="my-2" id="active-users-count">
                        {validatorEfficiency ? validatorEfficiency : 'N/A'}
                    </h2>
                    <p className="mb-0 text-muted">
                      {(!statusdata.validatorIndex || statusdata.validatorIndex == '-1') ?
                        <span className="text-nowrap">Not participating in validation</span>
                      :
                        <span className="text-nowrap">Validator index: {statusdata.validatorIndex}</span>
                      }
                    </p>
                </Card.Body>
            </Card>

            <StatisticsChartWidget
                description="Weekly income"
                title="Weekly income"
                stats={<div>
                          <span style={{float: 'left', fontSize: 28}}>{income ? income[1] : '0'}</span>
                          <Lottie style={{width: 25, display: 'inline-block', marginLeft: 4}} animationData={diamondAnimation} />
                       </div>}
                trend={trend}
                type="line"
                colors={['#0088cb']}
                data={income ? income[0].reverse() : null}></StatisticsChartWidget>

        </>
    );
};

export default Statistics;
