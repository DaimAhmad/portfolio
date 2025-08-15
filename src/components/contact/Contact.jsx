import "./contact.css";
import React, { useRef, useState } from "react";
import { MdOutlineEmail, MdLocationCity, MdPhone, MdSend } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_0f9d0wd', // Your EmailJS service ID
        'template_eorlv0f', // Your EmailJS template ID
        form.current,
        '1FgYYssB2hF8Hs4Sz' // Your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdPhone className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>daimahmad58@gmail.com</h5>
              <h5>03366917472</h5>
              <h5>Kohat, Pakistan</h5>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact__form">
          <div className="form__group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form__input"
            />
            <div className="form__border"></div>
          </div>

          <div className="form__group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form__input"
            />
            <div className="form__border"></div>
          </div>

          <div className="form__group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="form__input"
            />
            <div className="form__border"></div>
          </div>

          <div className="form__group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              className="form__textarea"
            ></textarea>
            <div className="form__border"></div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary submit__btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading">Sending...</span>
            ) : (
              <>
                <MdSend className="send__icon" />
                Send Message
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="success__message">
              <span>✓ Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error__message">
              <span>✗ Failed to send message. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
