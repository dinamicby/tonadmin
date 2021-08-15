// @flow
import React from 'react';
import JsonRpcClient from 'react-jsonrpc-client'

// components
import PageTitle from '../../components/PageTitle';
var api = new JsonRpcClient({
  endpoint: 'http://81.30.157.98:4000/',
  headers: {
    'Origin': ''
  }
})

  api.request(
    'status',
  ).then(function(response) {
  console.log(response)
  })

const Starter = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/starter' },
                    { label: 'Starter', path: '/pages/starter', active: true },
                ]}
                title={'Starter'}
            />
        </>
    );
};

export default Starter;
