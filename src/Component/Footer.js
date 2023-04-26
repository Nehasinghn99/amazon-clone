import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="get-container">
          <p>Get to Know Us</p>
          <Link to=""  className='get'>About Us</Link>
          <Link to=""  className='get'>Careers</Link>
          <Link to=""  className='get'>Press Releases</Link>
          <Link to=""  className='get'>Amazon cares</Link>
          <Link to=""  className='get'>Gift a Smile</Link>
          <Link to=""  className='get'>Amazon Science</Link>
        </div>
        <div className="get-container">
         <p>Connect with Us</p>
         <Link to="" className='get'>Facebook</Link>
         <Link to=""  className='get'>Twitter</Link>
         <Link to=""  className='get'>Instagram</Link>
        </div>
        <div className="get-container">
          <p>Make Money with Us</p>
          <Link to="" className='get'>Sell on Amazon</Link>
          <Link to=""  className='get'>Sell under Amazon Accelerator</Link>
          <Link to=""  className='get'>Amazon Global Selling</Link>
          <Link to=""  className='get'>Become an Affiliate</Link>
          <Link to=""  className='get'>Fulfilment by Amazon</Link>
          <Link to=""  className='get'>Advertise Your Products</Link>
          <Link to=""  className='get'>Amazon Pay on Merchants</Link>
        </div>
        <div className="get-container">
          <p>Let Us Help You</p>
          <Link to="" className='get'>COVID-19 and Amazon</Link>
          <Link to=""  className='get'>Your Accountr</Link>
          <Link to=""  className='get'>Returns Centre</Link>
          <Link to=""  className='get'>100% Purchase Protection</Link>
          <Link to=""  className='get'>Amazon App Download</Link>
          <Link to=""  className='get'>Amazon Assistant Download</Link>
          <Link to=""  className='get'>Help</Link>
        </div>
      </div>
      <div className="footer-container">
        <Link to="/home">
          <img 
          className='footer-logo' 
          src="images/amazon.png" 
          alt="amazon_logo"
          />
        </Link>
        <button className="language">
          <LanguageIcon/>
          <select>
            <option> English</option>
            <option>Hindi</option>
          </select>
        </button>
      </div>
      <div className="footer-country">
        <Link to="" className='country'>Australia</Link>
        <Link to=""  className='country'>Brazil</Link>
        <Link to=""  className='country'>China</Link>
        <Link to=""  className='country'>France</Link>
        <Link to=""  className='country'>Germany</Link>
        <Link to=""  className='country'>Italy</Link>
        <Link to=""  className='country'>Japan</Link>
        <Link to=""  className='country'>Mexico</Link>
        <Link to=""  className='country'>Netherlands</Link>
        <Link to=""  className='country'>Poland</Link>
        <Link to=""  className='country'>Singapore</Link>
        <Link to=""  className='country'>Spain</Link>
        <Link to=""  className='country'>Turkey</Link>
        <Link to=""  className='country'>United Arab Emirates</Link>
      </div>
      <div className="footer-country">
        <Link to=""  className='country'>United Kingdom</Link>
        <Link to=""  className='country'>United States</Link>
      </div>

      <div className="footer-lower">
        <Link to=""className='books'>
          <h>AbeBooks </h>
          <p>Books, art & collectibles</p>
        </Link>
        <Link to=""className='books'>
          <h>Amazon Web Services</h>
          <p>Scalable Cloud Computing Services</p>
      </Link>
        <Link to=""  className='books'>
          <h>Audible</h>
          <p>Download Audio Books</p>
        </Link>
        <Link to=""  className='books'>
          <h>DPReview</h>
          <p>Digital Photography</p>
        </Link>
        <Link to=""  className='books'>
          <h>IMDb</h>
          <p>Movies, Tv & celebrities</p>
        </Link>
      </div>

      <div className="footer-lower">
        <Link to="" className='books'>
          <h>Shopbop</h>
          <p>Designer Fashion Brands</p>
        </Link>
        <Link to=""  className='books'>
          <h>Amazon Business</h>
          <p>Everything For Your Business</p>
        </Link>
        <Link to=""  className='books'>
          <h>Prime Now</h>
          <p>2-Hour Delivery on Everyday Items</p>
        </Link>
        <Link to=""  className='books'>
          <h>Amazon Prime Music</h>
          <p>90 million songs, ad-free Over 15 million podcast episodes</p>
        </Link>
      </div>
      <div className="footer-lower">
        <Link to="" className='lower'>Conditions of Use</Link>
        <Link to="" className='lower'>Privacy Notice</Link>
        <Link to="" className='lower'>Interest-Based Ads</Link>
      </div>
      <div className="lower-footer">
        <Link to="" className='lower'>© 1996-2022, Amazon.com, Inc. or its affiliates</Link>
      </div>
    </div>
  )
}

export default Footer;