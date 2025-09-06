import React from "react";
import "./GetInTouch.css";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-section" id="contact">
      <div className="contact-left">
        <h2>Connect With Me</h2>
        <p>Let’s talk on your favorite platform</p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/pratyush-mehta5656/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon linkedin" />
            <div>
              <strong>Linkedin</strong>
            
            </div>
          </a>
          <a href="https://github.com/pratyushmehtaa" target="_blank" rel="noreferrer">
            <FaGithub className="icon github" />
            <div>
              <strong>GitHub</strong>
             
            </div>
          </a>
          <a href="https://www.instagram.com/pratyush09_/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon instagram" />
            <div>
              <strong>Instagram</strong>
           
            </div>
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Get in Touch</h2>
        <p>Have something to discuss? Send me a message and let's talk.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
