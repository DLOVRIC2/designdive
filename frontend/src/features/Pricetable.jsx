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
            {annualBilling ? '$199.99' : '$19.99'}
          </li>
          <li className="bottom-bar">5 Text-to-3D Object Conversions per Month</li>
          <li className="bottom-bar">Access to Predefined Scenes</li>
          <li className="bottom-bar">Standard Blender Rendering</li>
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
            {annualBilling ? '$249.99' : '$24.99'}
          </li>
          <li className="bottom-bar">Unlimited Text-to-3D Object Conversions</li>
          <li className="bottom-bar">Access to Premium Scenes</li>
          <li className="bottom-bar">Advanced Blender Rendering Options</li>
          <li className="bottom-bar">Basic User Customization Tools</li>
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
            {annualBilling ? '$399.99' : '$39.99'}
          </li>
          <li className="bottom-bar">Unlimited Text-to-3D Object Conversions</li>
          <li className="bottom-bar">Access to All Scenes, Including Premium</li>
          <li className="bottom-bar">Full User Customization & Personalization</li>
          <li className="bottom-bar">Premium Support & Collaboration Tools</li>
          <li className="bottom-bar">Exclusive Access to Upcoming Features</li>
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