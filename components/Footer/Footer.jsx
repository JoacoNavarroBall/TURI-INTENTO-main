import React from "react";
import './Footer-Style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importa los íconos de las redes sociales

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-location">
          <h3>Ubicación</h3>
          <p>Uyuni,Potosi</p>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Correo: santiagoJukil@gmail.com</p>
          <p>Teléfono: 71835128</p>
        </div>
        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <a href="https://www.facebook.com" className="footer-social-link">
            <FaFacebook /> {/* Utiliza el componente del ícono de Facebook */}
          </a>
          <a href="https://www.twitter.com" className="footer-social-link">
            <FaTwitter /> {/* Utiliza el componente del ícono de Twitter */}
          </a>
          <a href="https://www.instagram.com" className="footer-social-link">
            <FaInstagram /> {/* Utiliza el componente del ícono de Instagram */}
          </a>
          <a href="https://www.youtube.com" className="footer-social-link">
            <FaYoutube /> {/* Utiliza el componente del ícono de YouTube */}
          </a>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>© 2023 aeaeaaeae</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;