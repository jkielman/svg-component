console.log("hello");


import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ScrollToTop from 'react-router-scroll-top';
import './style.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Star from './components/Star';






const App = () => (
  <div className="primary-layout">

      <div>
        <Star />
      </div>

  </div>
)


ReactDOM.render(
  <App/>,
  document.getElementById('index')
)

