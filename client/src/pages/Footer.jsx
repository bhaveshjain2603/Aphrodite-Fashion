import React from 'react';
import { IonIcon } from 'react-ionicons';

const Footer = () => {
  return (
    <footer className="footer bg-zinc-700 text-white px-24 py-16">
      <div className="container grid-list grid grid-cols-4 text-left gap-20 ps-4 pe-4">
        <div className="footer-brand">
          <a href="#" className="logo h4 footer-list-title text-xl font-semibold mb-4">Azayd</a>
          <p className="footer-text w-48 my-5">
            &copy; 2024 <br /> All rights reserved.
          </p>
          <ul className="social-list flex gap-2">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title text-xl font-semibold">Get in Touch</p>
          </li>
          <li>
            <address className="footer-text text-sm w-44 not-italic">
              Bangalore, Karnataka, India (IN)
            </address>
          </li>
          <li>
            <a href="mailto:contact.azayd@gmail.com" className="footer-link">contact.azayd@gmail.com</a>
          </li>
          <li>
            <a href="tel:+9198765432103" className="footer-link">+91 98765 432103</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title text-xl font-semibold mb-4">Learn More</p>
          </li>
          <li>
            <a href="#about" className="footer-link">About Us</a>
          </li>
          <li>
            <a href="#" className="footer-link">Our Story</a>
          </li>
          <li>
            <a href="#projects" className="footer-link">Projects</a>
          </li>
          <li>
            <a href="#" className="footer-link">Terms of Use</a>
          </li>
          <li>
            <a href="#" className="footer-link">Privacy Policy</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title text-xl font-semibold mb-4">Categories</p>
          </li>
          <li>
            <a href="#services" className="footer-link">T-Shirts</a>
          </li>
          <li>
            <a href="#services" className="footer-link">Shirts</a>
          </li>
          <li>
            <a href="#services" className="footer-link">Hoodies</a>
          </li>
          <li>
            <a href="#services" className="footer-link">Zipper Jackets</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
