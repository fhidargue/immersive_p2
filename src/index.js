import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import AOS from 'aos';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./store/Authorization/AuthContext";
import { CookieProvider } from './store/Cookies/CookieContext';
import { InventoryProvider } from './store/Inventory/InventoryContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CookieProvider>
        <InventoryProvider>
          <Router>
            <App />
          </Router>
        </InventoryProvider>
      </CookieProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

$( document ).ready(function() {
  AOS.init();
  /**
   * CODE FOR THE BANNER PARALLAX
   */
    const parallax = (event) => {
        this.querySelectorAll('.banner__image').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - event.pageX*speed)/100;
        const y = (window.innerHeight - event.pageY*speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        });
    }

    document.addEventListener("mousemove", parallax);
});