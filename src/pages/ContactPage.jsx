import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="page">
      <section className="hero bg-primary">
        <div className="container">
          <div className="hero-content text-center" style={{ maxWidth: '100%' }}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: '0 auto' }}
            >
              Have questions about solar energy? Our team is here to help.
            </motion.p>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
            gap: '4rem'
          }}>
            <motion.div
              {...fadeIn}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2.4rem', color: 'var(--primary-color)' }}>Get In Touch</h2>
              <p style={{ marginBottom: '3.2rem' }}>
                Whether you have a question about our solar solutions, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div style={{ marginBottom: '2.4rem' }}>
                <h3 style={{ marginBottom: '1.6rem' }}>Contact Information</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <Phone size={20} style={{ marginRight: '1.2rem', color: 'var(--primary-color)' }} />
                  <span>+91 9600 13 0810</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <Mail size={20} style={{ marginRight: '1.2rem', color: 'var(--primary-color)' }} />
                  <span>tellus@konsunenergy.in</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <Mail size={20} style={{ marginRight: '1.2rem', color: 'var(--primary-color)' }} />
                  <span>kon.thesunenergysolutions@gmail.com</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <MapPin size={20} style={{ marginRight: '1.2rem', marginTop: '0.4rem', color: 'var(--primary-color)' }} />
                  <span>
                    NAVANEETHAN NILAYAM 02/192<br />
                    Chennai - 600023
                  </span>
                </div>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1.6rem' }}>Connect With Us</h3>
                <div style={{ display: 'flex', gap: '1.6rem' }}>
                  <a href="https://facebook.com" style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'var(--transition)'
                  }}>
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'var(--transition)'
                  }}>
                    <Instagram size={20} />
                  </a>
                  <a href="https://youtube.com" style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'var(--transition)'
                  }}>
                    <Youtube size={20} />
                  </a>
                  <a href="https://twitter.com" style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    transition: 'var(--transition)'
                  }}>
                    <Twitter size={20} />
                  </a>
                </div>
                <div style={{ marginTop: '2.4rem' }}>
                  <p>Join our WhatsApp and Telegram channels for the latest updates:</p>
                  <div style={{ display: 'flex', gap: '1.6rem', marginTop: '1.2rem' }}>
                    <a href="https://whatsapp.com" className="button">WhatsApp Channel</a>
                    <a href="https://telegram.org" className="button">Telegram Channel</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="form-container" style={{ height: '100%' }}>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="form-title">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <button
                      className="form-button mt-3"
                      onClick={() => setIsSubmitted(false)}
                      style={{ maxWidth: '20rem', margin: '2.4rem auto 0' }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="form-title">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-control ${errors.name ? 'error' : ''}`}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-control ${errors.email ? 'error' : ''}`}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-control ${errors.phone ? 'error' : ''}`}
                          maxLength={10}
                        />
                        {errors.phone && <div className="error-message">{errors.phone}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`form-control ${errors.message ? 'error' : ''}`}
                          rows="5"
                        ></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                      </div>
                      
                      <div className="form-actions">
                        <button type="submit" className="form-button" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'var(--neutral-100)' }}>
        <div className="container text-center">
          <motion.h2 
            style={{ marginBottom: '4.8rem' }}
            {...fadeIn}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h2>
          
          <motion.div
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ height: '40rem', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167341784!2d80.06892704134114!3d13.04762839740887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1656757123456!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;