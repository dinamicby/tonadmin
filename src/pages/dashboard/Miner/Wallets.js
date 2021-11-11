// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Modal, Alert } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';

// components

import Table from '../../../components/Table';

import { APICore } from '../../../helpers/api/apiCore';

const api = new APICore();

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        sort: true,

    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: true,
    },
    {
        Header: 'Balance',
        accessor: 'balance',
        sort: true,
    },
    {
        Header: 'Workchain',
        accessor: 'workchain',
        sort: true,
    },
    {
        Header: 'Address',
        accessor: 'address',
        sort: false,
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
  let url = "https://ton.sh/address/" + value;
  return <a target="_blank" href={url}>{value}</a>
}


const Wallets = (props): React$Element<any> => {
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
      const result = await api.sendJRPC('/', 'wl')

      if(result && !result.error && result.data && result.data.result !== "empty"){
        let data = result.data.result
          let tableData = []
          props.changeWallets(data)
            Object.keys(data).forEach(row => {
              tableData.push({
                  name: data[row].name,
                  status: data[row].status,
                  workchain: data[row].workchain,
                  balance: data[row].balance,
                  address: data[row].addr,
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
                          <h4 className="header-title">Miner wallets list</h4>
                          <Table
                              columns={columns}
                              data={data}
                              pageSize={5}
                              sizePerPageList={sizePerPageList}
                              isSortable={true}
                              pagination={false}
                          />
                          {loading ?
                            <Skeleton count={3} height={15} />
                            :
                            <div className="text-center">
                              <Row>
                                <Col lg={12}>
                                  <Button onClick={toggleCreate} variant="link" style={{width: 200}}>Create new wallet</Button>
                                </Col>
                              </Row>

                            </div>
                          }
                          {addButton ?
                            <div className="text-center">
                              <Row>
                                <Col lg={12}>
                                  <p className="text-muted m-0">You don't have any local wallets</p>
                                </Col>
                                <Col lg={12}>
                                  <Button onClick={toggleCreate} variant="link" style={{width: 200}}>Create your first wallet</Button>
                                </Col>
                              </Row>

                            </div>
                            :
                            ""
                          }
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          <Modal show={createModal} onHide={toggleCreate}>
              <Modal.Body>
                  <div className="text-center mt-2 mb-4">
                    <h4 className="header-title">Create new wallet</h4>
                  </div>


                  <form className="ps-3 pe-3" action="#">
                    <Alert variant="info">
                        <i className={classNames('dripicons-information', 'me-2')}></i>Wallet private key will be saved in your server <strong>local</strong> storage.
                    </Alert>

                      <div className="mb-3">
                          <label htmlFor="walletname" className="form-label">
                              Wallet name
                          </label>
                          <input
                              onChange={updateWalletName}
                              className="form-control"
                              type="name"
                              id="walletname"
                              required={true}
                              placeholder="Millionaire's wallet"
                          />
                      </div>

                      <div className="mb-3">
                          <label htmlFor="workchain" className="form-label">
                              Workchain id
                          </label>
                          <input
                              onChange={updateWorkchain}
                              className="form-control"
                              type="text"
                              required={true}
                              id="workchain"
                              placeholder="Input workchain id (0 or -1)"
                              value="0"
                          />
                      </div>


                      <div className="mb-3 text-center">
                          <button onClick={createWallet} className="btn btn-rounded btn-primary" >
                              Create
                          </button>
                      </div>
                  </form>
              </Modal.Body>
          </Modal>
        </>
    );
};

export default Wallets;
