import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Form.css';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    pincode: '',
    monthlyBill: '',
    solutionType: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pin code is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pin code';
    }
    if (!formData.monthlyBill) newErrors.monthlyBill = 'Please select your average monthly bill';
    if (!formData.solutionType) newErrors.solutionType = 'Please select a solution type';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms of service';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        // Reset form after submission
        setFormData({
          fullName: '',
          whatsappNumber: '',
          pincode: '',
          monthlyBill: '',
          solutionType: '',
          agreeToTerms: false
        });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container" id="consultation">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="form-title">Thank You!</h3>
          <p>Your consultation request has been submitted successfully. Our team will contact you soon to schedule your FREE consultation.</p>
          <button
            className="form-button mt-3"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <>
          <h3 className="form-title">Schedule a FREE consultation with us today!</h3>
          <p className="form-subtitle">Please fill the form and we will get in touch with you for the consultation</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="solutionType" className="form-label">I'm interested in solar for:</label>
              <div className="radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="residential"
                    name="solutionType"
                    value="Residential"
                    checked={formData.solutionType === 'Residential'}
                    onChange={handleChange}
                  />
                  <label htmlFor="residential">Residential</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="housing"
                    name="solutionType"
                    value="Housing Society"
                    checked={formData.solutionType === 'Housing Society'}
                    onChange={handleChange}
                  />
                  <label htmlFor="housing">Housing Society</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="commercial"
                    name="solutionType"
                    value="Commercial"
                    checked={formData.solutionType === 'Commercial'}
                    onChange={handleChange}
                  />
                  <label htmlFor="commercial">Commercial</label>
                </div>
              </div>
              {errors.solutionType && <div className="error-message">{errors.solutionType}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-control ${errors.fullName ? 'error' : ''}`}
              />
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="whatsappNumber" className="form-label">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className={`form-control ${errors.whatsappNumber ? 'error' : ''}`}
                maxLength={10}
              />
              {errors.whatsappNumber && <div className="error-message">{errors.whatsappNumber}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="pincode" className="form-label">Pin Code</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`form-control ${errors.pincode ? 'error' : ''}`}
                maxLength={6}
              />
              {errors.pincode && <div className="error-message">{errors.pincode}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="monthlyBill" className="form-label">What is your average monthly bill?</label>
              <div className="radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="bill1"
                    name="monthlyBill"
                    value="Less than ₹1500"
                    checked={formData.monthlyBill === 'Less than ₹1500'}
                    onChange={handleChange}
                  />
                  <label htmlFor="bill1">Less than ₹1500</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="bill2"
                    name="monthlyBill"
                    value="₹1500 - ₹2500"
                    checked={formData.monthlyBill === '₹1500 - ₹2500'}
                    onChange={handleChange}
                  />
                  <label htmlFor="bill2">₹1500 - ₹2500</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="bill3"
                    name="monthlyBill"
                    value="₹2500 - ₹4000"
                    checked={formData.monthlyBill === '₹2500 - ₹4000'}
                    onChange={handleChange}
                  />
                  <label htmlFor="bill3">₹2500 - ₹4000</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="bill4"
                    name="monthlyBill"
                    value="₹4000 - ₹8000"
                    checked={formData.monthlyBill === '₹4000 - ₹8000'}
                    onChange={handleChange}
                  />
                  <label htmlFor="bill4">₹4000 - ₹8000</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="bill5"
                    name="monthlyBill"
                    value="More than ₹8000"
                    checked={formData.monthlyBill === 'More than ₹8000'}
                    onChange={handleChange}
                  />
                  <label htmlFor="bill5">More than ₹8000</label>
                </div>
              </div>
              {errors.monthlyBill && <div className="error-message">{errors.monthlyBill}</div>}
            </div>
            
            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label htmlFor="agreeToTerms" className="form-check-label">
                  I agree to KON Sun Energy's <a href="/terms">terms of service</a> & <a href="/privacy">privacy policy</a>
                </label>
              </div>
              {errors.agreeToTerms && <div className="error-message">{errors.agreeToTerms}</div>}
            </div>
            
            <div className="form-note">
              By registering yourself with us you authorize us to contact you via email/ phone call, WhatsApp or SMS and offer you our services, imparting product knowledge, offer promotional offers running on the website, irrespective of the fact if also you have registered yourself under DND or DNC or NCPR service, you still authorize us to give you a call from KON sun energy Solutions for the above-mentioned purposes.
            </div>
            
            <div className="form-actions">
              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Schedule My Free Consultation'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ConsultationForm;