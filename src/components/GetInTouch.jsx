import React, { useState } from "react";
import "./GetInTouch.css";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const GetInTouch = () => {
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");

    // Check localStorage for 1-hour limit
    const lastSubmit = localStorage.getItem("lastSubmitTime");
    const now = Date.now();
    if (lastSubmit && now - lastSubmit < 3600000) {
      setStatusMsg("⏳ You can send only 1 message per hour.");
      return;
    }

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const res = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMsg("✅ Message sent successfully!");
        e.target.reset();
        localStorage.setItem("lastSubmitTime", Date.now()); // save timestamp
      } else {
        setStatusMsg("❌ Failed to send message: " + data.error);
      }
    } catch (err) {
      setStatusMsg("❌ Error sending message");
    }
  };

  return (
    <div className="get-in-touch-section" id="contact">
      <div className="contact-left">
        <h2>Connect With Me</h2>
        <p>Let’s talk on your favorite platform</p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/pratyush-mehta5656/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon linkedin" />
            <div><strong>Linkedin</strong></div>
          </a>
          <a href="https://github.com/pratyushmehtaa" target="_blank" rel="noreferrer">
            <FaGithub className="icon github" />
            <div><strong>GitHub</strong></div>
          </a>
          <a href="https://www.instagram.com/pratyush09_/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon instagram" />
            <div><strong>Instagram</strong></div>
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Get in Touch</h2>
        <p>Have something to discuss? Send me a message and let's talk.</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>

       {statusMsg && (
  <p
    className={`status-msg ${
      statusMsg.includes("successfully") ? "success" :
      statusMsg.includes("Error") || statusMsg.includes("Failed") ? "error" :
      "info"
    }`}
  >
    {statusMsg}
  </p>
)}

      </div>
    </div>
  );
};

export default GetInTouch;
