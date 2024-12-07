import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Add your public key here

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const result = await emailjs.sendForm(
        'service_xxxxxxx', // Your EmailJS service ID
        'template_xxxxxxx', // Your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Your EmailJS public key
      );

      if (result.text === 'OK') {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        });

        form.current.reset();
        
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
          });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Failed to send message. Please try again.' }
      });
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className={status.info.error ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className={status.info.error ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              required
              className={status.info.error ? 'error' : ''}
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status.submitting}
            className={status.submitting ? 'submitting' : ''}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {status.info.msg && (
            <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
              {status.info.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact; 