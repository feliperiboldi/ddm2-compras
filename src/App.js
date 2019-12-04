import React from 'react';

import FormShopping from './components/Form/Shopping';

import './bootstrap.min.css';
import TableShopping from './components/Table/Shopping';

export default function App() {
  return(
    <div className="container">
      <FormShopping />
      <hr/>
      <TableShopping />
    </div>
  );
}
