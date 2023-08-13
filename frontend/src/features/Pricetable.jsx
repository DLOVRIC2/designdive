import React, { useState } from 'react';
import './Style/pricing.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Pricetable = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  const toggleBilling = () => {
    setAnnualBilling(prevBilling => !prevBilling);
    console.log(annualBilling) 
  };

  return (
    <div className="container mt-5">
      <header>
      <fieldset>
        <center><h3 className='fw-normal'>Choose plan</h3></center>
        <div className="toggle mb-2">
          <input
            type="radio"
            name="billing"
            value="annual"
            id="annualBilling"
            checked={annualBilling}
            onChange={() => setAnnualBilling(true)}
          />
          <label htmlFor="annualBilling" className='rounded'>Annually</label>
          <input
            type="radio"
            name="billing"
            value="monthly"
            id="monthlyBilling"
            checked={!annualBilling}
            onChange={() => setAnnualBilling(false)}
          />
          <label htmlFor="monthlyBilling" className='rounded'>Monthly</label>
        </div >
      </fieldset>
      </header>

      <div className="row justify-content-center">
        <div className="card shadow col-md-3 m-1">
          <ul className="list-unstyled text-center">
            <li className="pack">Basic</li>
            <li
              id="basic"
              className="price bottom-bar text-secondary"
            >
              {annualBilling ? '$19.99' : '$199.99'}
            </li>
            <li className="bottom-bar">150 minutes of video upload monthly</li>
            <li className="bottom-bar">1080p HD rendering</li>
            <li className="bottom-bar"> 50GB storage</li>
            <li>
              <button className="btn btn-primary">Subscribe</button>
            </li>
          </ul>
        </div>
        <div className="card active col-md-3 m-1">
          <ul className="list-unstyled text-center">
            <li className="pack">Professional</li>
            <li
              id="professional"
              className="price bottom-bar text-secondary"
            >
              {annualBilling ? '$24.99' : '$249.99'}
            </li>
            <li className="bottom-bar"> 500 video upload minutes monthly
</li>
            <li className="bottom-bar">Priority Support</li>
            <li className="bottom-bar"> Brand Template Builder</li>
            <li>
              <button className="btn btn-primary active-btn">Subscribe</button>
            </li>
          </ul>
        </div>
        <div className="card shadow col-md-3 m-1">
          <ul className="list-unstyled text-center">
            <li className="pack">Master</li>
            <li
              id="master"
              className="price bottom-bar text-secondary"
            >
              {annualBilling ? '$39.99' : '$399.99'}
            </li>
            <li className="bottom-bar">Custom Intros, Outros & Fonts</li>
            <li className="bottom-bar">10 Users Allowed</li>
            <li className="bottom-bar">Brand Template Builder</li>
            <li>
              <button className="btn btn-primary">Subscribe</button>
            </li>
          </ul>
        </div>
    </div>
    </div>
  );
};

export default Pricetable;
