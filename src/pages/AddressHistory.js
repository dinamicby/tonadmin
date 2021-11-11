// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Moment from 'react-moment';
import TonWeb from "tonweb"

// components

import Table from '../components/Table';

import { APICore } from '../helpers/api/apiCore';
import { known_accounts } from '../constants/known_accounts';

const api = new APICore();
const Address = new TonWeb().utils.Address;


const columns = [
    {
        Header: 'Time',
        accessor: 'time',
        sort: true,

    },

    {
        Header: 'From',
        accessor: 'from',
        sort: true,
        Cell: TypeFrom,
    },
    {
        Header: 'To',
        accessor: 'to',
        sort: false,
        Cell: Cell,
    },
    {
        Header: 'Value',
        accessor: 'value',
        sort: true,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    }
];

function Cell({ value }) {
  let url = "https://ton.sh/address/" + value[1];
  return <a target="_blank" rel="noreferrer" href={url}>{value[0]}</a>
}

function TypeFrom({ value }) {
  let type;

  if(value[2] != 1){
    type =  <span className="badge badge-success-lighten" style={{width: 35}}>IN</span>
  }else{
    type = <span className="badge badge-danger-lighten" style={{width: 35}}>OUT</span>
  }

  let url = "https://ton.sh/address/" + value[1];
  return <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><a target="_blank" rel="noreferrer" href={url}>{value[0]}</a>{type}</div>
}


const AddressHistory = (props): React$Element<any> => {
    const [data, setData] = useState([]);


    const [walletName, setWalletName] = useState(false);



    useEffect(() => {
      if(props.wallet){
        updateWallets()
      }
    }, [props.wallet]);



    const numberWithSpaces = (x) => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    const updateWallets = async () =>{
      const result = await api.sendJRPC('/', 'vah', [props.wallet, 100])

      if(result && !result.error && result.data && result.data.result !== "empty"){
        let data = result.data.result
          let tableData = []

            Object.keys(data).forEach(row => {

              let from = new Address(data[row].from).toString(true, true, true);
              let to = new Address(data[row].to).toString(true, true, true);

              if(known_accounts[from]){
                from = known_accounts[from]
              }else if(from === new Address(props.wallet).toString(true, true, true, false) ){
                from = 'validator_wallet_001'
              }
              if(known_accounts[to]){
                to = known_accounts[to]
              }else if(to === new Address(props.wallet).toString(true, true, true, false)){
                to = 'validator_wallet_001'
              }
              tableData.push({
                  time: <Moment unix >{data[row].time}</Moment>,
                  value: numberWithSpaces(data[row].value),
                  from: [from, new Address(data[row].from).toString(true, true, true, true), data[row].outmsg],
                  to: [to, new Address(data[row].to).toString(true, true, true, true)],
              })
            })
            setData(tableData);
      }else{
          setData([]);

      }
    }

    return (
        <>
          <Row>
              <Col>
                  <Card>
                      <Card.Body>
                          <h4 className="header-title">Wallet History</h4>
                          <Table
                              columns={columns}
                              data={data}
                              pageSize={5}
                              sizePerPageList={sizePerPageList}
                              isSortable={true}
                              pagination={false}
                          />
                        {!props.wallet ?
                          <Skeleton count={3} />
                          :
                           data.length === 0 ?
                            <p className="text-center">Empty wallet</p>
                          : null
                        }
                      </Card.Body>
                  </Card>
              </Col>
          </Row>

        </>
    );
};

export default AddressHistory;
