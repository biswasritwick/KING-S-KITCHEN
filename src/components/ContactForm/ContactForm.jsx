import { useState } from 'react';
import './ContactForm.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  date: '',
  guests: '',
  message: '',
  reservationType: 'General enquiry',
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^[0-9+\-\s()]{7,}$/.test(phone);

function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (['firstName', 'lastName', 'email', 'phone', 'subject', 'message'].includes(key) && !value.trim()) {
        nextErrors[key] = 'This field is required.';
      }
    });

    if (formData.email && !validateEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.message && formData.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters long.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage('');
      return;
    }

    setErrors({});
    setSuccessMessage('Thank you! Your message has been received.');
    setFormData(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="field-error">{errors.firstName}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="field-error">{errors.lastName}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
          {errors.subject && <span className="field-error">{errors.subject}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="reservationType">Reservation Type</label>
          <select id="reservationType" name="reservationType" value={formData.reservationType} onChange={handleChange}>
            <option>General enquiry</option>
            <option>Table reservation</option>
            <option>Private event</option>
            <option>Catering</option>
            <option>Feedback</option>
          </select>
        </div>

        <div className="field-group">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="field-group">
          <label htmlFor="guests">Number of Guests</label>
          <input id="guests" name="guests" type="number" min="1" max="20" value={formData.guests} onChange={handleChange} />
        </div>
      </div>

      <div className="field-group field-group--full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="button button--primary">
          Send Message →
        </button>
      </div>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
