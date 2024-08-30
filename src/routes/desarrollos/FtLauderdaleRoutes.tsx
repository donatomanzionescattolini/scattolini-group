import React from 'react'
import { Route } from 'react-router-dom'
import NatiivoFtLauderdaleProject from '../../components/desarrollos/FtLauderdale/NatiivoFtLauderdaleProject'

const fragment = (
  <React.Fragment>
    <Route path="/desarrollos/natiivo-ft-lauderdale" element={<NatiivoFtLauderdaleProject />} />
  </React.Fragment>
);
export default fragment;


