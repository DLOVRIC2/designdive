import React from 'react'
import './Style/footer.css'
//**Bootstrape Imports */
import 'bootstrap/dist/css/bootstrap.min.css';
//**React-Feather Icons */
import { Facebook, GitHub,Youtube,Linkedin,Instagram,Twitter } from 'react-feather';



const Footer = () => {
  return (
    <div>
     <footer className="footer">
        <h5 className='fw-light text-center p-3'>Stay connected</h5>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="social-icons">
              <a href="#">
                <Facebook className='icon' size={45}/>
              </a>
              <a href="#">
                <Twitter className='icon' size={45}/>
              </a>
              <a href="#">
                <Instagram className='icon' size={45}/>
              </a>
              <a href="#">
                <Linkedin className='icon' size={45}/>
              </a>
              <a href="#">
                <Youtube className='icon' size={45}/>
              </a>
              <a href="#">
                <GitHub className='icon' size={45}/>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              © {new Date().getFullYear()} Designdive . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <hr className='my-4'/>
      
      <div className="container">
      <div className="contact-pricing-row d-flex justify-content-start align-items-center">
      <a href="#" className="contact-link me-2">Prirvacy policy</a>
      <span className="divider"></span>
        <a href="#" className="contact-link me-2">Contact</a>
        <span className="divider"></span>
        <a href="#" className="pricing-link">Pricing</a>
      </div>
    </div>
    </footer>
    </div>
  )
}

export default Footer
