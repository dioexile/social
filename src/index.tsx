import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './comp/layout/Layout'
import Home from './comp/pages/home/Home'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home/>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


