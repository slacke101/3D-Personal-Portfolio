import React from 'react';

const Contact = () => (
  <section id="contact" className="section-contact">
    <h2>Contact</h2>
    <p>Feel free to contact me at any of my following links!</p>
    <ul className="contact-list">
      <li><a className="App-link" href="mailto:rcastr231@gmail.com">rcastr231@gmail.com</a></li>
      <li><a className="App-link" href="tel:7609607575">760-960-7575</a></li>
      <li>
        <a className="App-link" href="https://github.com/slacke101" target="_blank" rel="noopener noreferrer">
          GitHub: slacke101
        </a>
      </li>
      <li>
        <a className="App-link" href="https://www.linkedin.com/in/rafael-castro-658752176/" target="_blank" rel="noopener noreferrer">
          LinkedIn: Rafael Castro
        </a>
      </li>
      <li>
        <a className="App-link" href="https://castrorportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </li>
    </ul>
  </section>
);

export default Contact; 