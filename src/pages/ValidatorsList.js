// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Modal, Alert } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';

// components

import Table from '../components/Table';

import { APICore } from '../helpers/api/apiCore';

const api = new APICore();

const columns = [
    {
        Header: 'Wallet / ADNL',
        accessor: 'adnlAddr',
        sort: true,
        Cell: Wallet,
    },
    {
        Header: 'Status',
        accessor: 'online',
        sort: true,
        Cell: Online,
    },
    {
        Header: 'Weight',
        accessor: 'weight',
        sort: true,
    },
    {
        Header: 'Efficiency',
        accessor: 'efficiency',
        sort: true,
        Cell: Cell,
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
  switch(true){
    case parseFloat(value) > 90:
      return <span className="text-success">{value}%</span>
    case parseFloat(value) > 50:
      return <span className="text-warning">{value}%</span>
    default:
      return <span className="text-danger">{value}%</span>
  }
}

function Online({ value }) {
  switch(value){
    case true:
      return <span className="badge badge-success-lighten">ONLINE</span>
    default:
      return <span className="badge badge-danger-lighten">OFFLINE</span>
  }
}

function Wallet({ value }) {
  let url = "https://ton.sh/address/" + value;
  if(value.length <= 48){
    return <a target="_blank" href={url}>{value}</a>
  }else{
    return value;
  }

}




const ValidatorsList = (): React$Element<any> => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addButton, setAddButton] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [walletName, setWalletName] = useState(false);
    const [workchain, setWorkchain] = useState(0);

    const toggleCreate = () => {
        setCreateModal(!createModal);
    };

    useEffect(async () => {
      updateWallets()
    }, []);

    const updateWalletName = (event) => {
      setWalletName(event.target.value)
    }
    const updateWorkchain = (event) => {
      setWorkchain(event.target.value)
    }

    const createWallet = async (e) => {
      e.preventDefault();
      setLoading(true)
      setAddButton(false)
      const result = await api.sendJRPC('/', 'nw', [walletName, workchain])
      if(result && result.data && result.data.result){
          updateWallets()
      }else{
          setData([]);
          setAddButton(true)
          setLoading(false)
      }
    }

    const updateWallets = async () =>{
      setLoading(true)
      const result = await api.sendJRPC('/', 'vl')

      if(result && !result.error && result.data && result.data.result !== "empty"){
        let data = result.data.result
          let tableData = []
            let totalWeight = 0
            Object.keys(data).forEach(row => {
              totalWeight += data[row].weight
            })

            Object.keys(data).forEach(row => {
              tableData.push({
                  adnlAddr: data[row].walletAddr ? data[row].walletAddr: data[row].adnlAddr,
                  status: data[row].status,
                  efficiency: data[row].efficiency,
                  weight: (data[row].weight/totalWeight*100).toFixed(1) + '%',
                  online: data[row].online,
              })
            })
            setData(tableData);

      }else{
          setData([]);
          setAddButton(true)
      }
      setLoading(false)
    }

    return (
        <>
          <Row>
              <Col>
                  <Card>
                      <Card.Body>
                          <h4 className="header-title">TON Validators list</h4>
                          {data.length > 0 ?
                          <Table
                              columns={columns}
                              data={data}
                              sizePerPageList={sizePerPageList}
                              isSortable={true}
                              pagination={false}
                          />
                          :
                          <Skeleton count={7} />
                          }
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
        </>
    );
};

export default ValidatorsList;
