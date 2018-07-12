import React from "react";
import knowpills from './images/knowpills.png';
import drknow from './images/drknow.png';
import cryptoCoin from './images/cryptoCoin.png';

const Work = () => (
  <div className="container-fluid work">
    <div className="row workrow">
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={knowpills} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Know Pills</h5>
            <p className="card-text">An apolitical informational resource for Opioid addiction help and support. </p>
            <a  href="http://knowpills.net/" target="_blank"  className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={drknow} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Dr. Know</h5>
            <p className="card-text">The latest health advisories, vaccination requierments and travel risks regarding the selected country.</p>
            <a href="https://pritch13.github.io/Project1BC/" target="_blank" className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={cryptoCoin} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">cryptoCoin</h5>
            <p className="card-text">CryptoCoin is a an online statsistic and forecasting system for crypto currencies. </p>
            <a href="https://robertdthompson.github.io/CryptoCoin/home.html" target="_blank" className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Work;
