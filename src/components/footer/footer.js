import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Facebook</h3>
          {/* Insert Facebook plugin or links here */}
        </div>
        <div className="footer-column">
          <h3>Informasjon</h3>
          <p>Våre åpningstider:</p>
          <p>Mandag - Fredag: 08:00 - 16:00</p>
          <p>Lørdag - Søndag: Stengt</p>
        </div>
        <div className="footer-column">
          <h3>Kontakt</h3>
          <p>Rogaland Marine AS</p>
          <p>Havnavegen 54</p>
          <p>5561 Bokn</p>
          <p>NORGE</p>
          <p>Telefon: 416 65 015</p>
          <p>Epost: post@rogalandmarine.no</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
