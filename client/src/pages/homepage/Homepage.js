import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'
import Homepage from '../../components/Hompage';
import Info from '../../components/info';
import Work from '../../components/work';
import Form from '../../components/form';

const Index = () => (
  <div>
    <Homepage />
    <Jumbotron />
    <Info />
    <Work />
    <Form />
  </div>
);

export default Index;
