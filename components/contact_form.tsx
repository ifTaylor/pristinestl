import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.name || !formData.phone) {
      setMessage('Name and Number are required fields.');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('/api/submit_form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setMessage('Email sent, Kim will get back to you soon!');
      } else {
        setMessage('Error sending email. Please call us at (314) 775-1571');
      }
    } catch (error) {
      setMessage('Network error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="container-padding">
      <div className="contact">
        <Row className="center-container">
          <Col>
            <img src="/p_logo.png" alt="Pristine STL Logo" style={{ maxHeight: '150px' }}></img>
            <h3>Start Your Quote Today!</h3>
            <div>Ready to book our services? Reach out to us today!</div>
            <div>Email: <a href="mailto:kim@pristinestl.com">kim@pristinestl.com</a></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="item-padding pink-container" id="contactForm" onSubmit={handleSubmit}>
              <Form.Label className="modal-label">Name:</Form.Label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="(Required)"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                name="phone"
                required
                placeholder="(Required)"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="(Optional)"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">Message:</label>
              <Card>
                <div>
                  <img src="/pristine_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
                </div>
                <Card.Body>
                  <Card.Text>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </Card.Text>
                </Card.Body>
              </Card>
              {message && (
                <div className={message.includes('Error') ? 'error-message' : 'success-message'}>
                  {message}
                </div>
              )}
              <button type="submit" id="sendButton" className={`btn btn-secondary ${loading ? 'disabled' : ''}`}>
                {loading ? (
                  <span>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ContactForm;
