import React, { FormEvent, useState, useEffect } from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import MessagePreview from '../components/message_preview';

interface ResidentialQuoteProps {
  show: boolean;
  onResidentialQuote: (file: Blob) => void;
  onHide: () => void;
}

export default function ResidentialQuote({
  show,
  onResidentialQuote,
  onHide,
}: ResidentialQuoteProps) {
  const [nameMessage, setNameMessage] = useState('');
  const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [frequencyMessage, setFrequencyMessage] = useState('');
  const [squareFootageMessage, setSquareFootageMessage] = useState('');
  const [cleaningTypeMessage, setCleaningTypeMessage] = useState('');
  const [selectedCleaningTypes, setSelectedCleaningTypes] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [messagePreview, setMessagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const messagePreviewElement = document.getElementById('messagePreview');
  
    if (selectedCleaningTypes.length > 0) {
      setCleaningTypeMessage(`Services to note: ${selectedCleaningTypes.join(' ')}`);
    } else {
      setCleaningTypeMessage('');
    }
  
    if (messagePreviewElement) {
      const previewContent = `${nameMessage} ${phoneNumberMessage}\n${emailMessage}\n${frequencyMessage} ${squareFootageMessage} ${cleaningTypeMessage}`;
      setMessagePreview(previewContent);
      messagePreviewElement.textContent = previewContent;
    }
  }, [nameMessage, phoneNumberMessage, emailMessage, frequencyMessage, squareFootageMessage, cleaningTypeMessage, selectedCleaningTypes]);

  const handleCleaningTypeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedCleaningTypes((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCleaningTypes((prevSelected) =>
        prevSelected.filter((type) => type !== value)
      );
    }
  };

  const handleCloseModal = () => {
    console.log("Made it here");
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
    setNameMessage('');
    setPhoneNumberMessage('');
    setEmailMessage('');
    setSelectedCleaningTypes([]);
    setFrequencyMessage('');
    setSquareFootageMessage('');
    setCleaningTypeMessage('');
    onHide();
  };

    const updateName = (value) => {
        if (value.length > 0) {
            setNameMessage(`Hello, I'm ${value}, `);
        } else {
            setNameMessage(``);
        }
    };

    const updatePhoneNumber = (value) => {
        setPhoneNumberMessage(`my phone number is ${value}.\n`);
    };

    const updateEmail = (value) => {
        setEmailMessage(`Email address: ${value}. `);
    };

    const updateFrequency = (frequency) => {
        setFrequencyMessage(`I'm in search of a ${frequency} clean.`);
      };

    const updateSquareFootage = (footage) => {
    setSquareFootageMessage(`My home is ${footage} square feet.`);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.phone) {
        alert('Name and Number are required fields.');
        return;
    }

    setLoading(true);

    try {
        const requestData = {
        ...formData,
        message: messagePreview,
        };

        const response = await fetch('/api/submit_form', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        alert('Email sent, Kim will get back to you soon!');
        } else {
        alert('Error sending email. Please call us at (314) 775-1571');
        }
    } catch (error) {
        alert('Network error: ' + error.message);
    } finally {
        setLoading(false);
    }
    };

  return (
    <Modal show={show} onHide={handleCloseModal}>
    <Modal.Header closeButton>
        <Modal.Title className="modal-title">Let's help get you started!</Modal.Title>
    </Modal.Header>
    <Form onSubmit={handleSubmit}>
        <Modal.Body>
        <div className="d-flex justify-content-start mb-1">
            <Row>
                <Col className="col-12 contact-info">
                    <Form.Label className="flex-center modal-subtitle"><strong>Contact Information</strong></Form.Label>
                    <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="(Required)"
                        required
                        value={formData.name}
                        onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        updateName(e.target.value);
                        }}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="(Required)"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        updatePhoneNumber(e.target.value);
                        }}
                    />
                    </div>
                    <div className="form-group bottom-padding">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="(Optional)"
                        value={formData.email}
                        onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        updateEmail(e.target.value);
                        }}
                    />
                    </div>
                </Col>
                <Col className="service-info">
                    <Form.Label className="flex-center modal-subtitle"><strong>Service Information</strong></Form.Label>
                    <Row className="green-container">
                        <Col>
                            <div className="form-group">
                            <Form.Label className="modal-label flex-center-start"><strong>How Often?</strong></Form.Label>
                            <div className="btn-group-vertical" role="group">
                            <Button
                                variant={selectedFrequency === 'Weekly' ? 'info' : 'light'}
                                className={`btn-block ${selectedFrequency === 'Weekly' ? 'btn-highlight' : ''} modal-button`}
                                onClick={() => {
                                updateFrequency('Weekly');
                                setSelectedFrequency('Weekly');
                                }}
                            >
                                Weekly
                            </Button>
                            <Button
                                variant={selectedFrequency === 'Biweekly' ? 'info' : 'light'}
                                className={`btn-block ${selectedFrequency === 'Biweekly' ? 'btn-highlight' : ''} modal-button`}
                                onClick={() => {
                                updateFrequency('Biweekly');
                                setSelectedFrequency('Biweekly');
                                }}
                            >
                                Biweekly
                            </Button>
                            <Button
                                variant={selectedFrequency === 'Monthly' ? 'info' : 'light'}
                                className={`btn-block ${selectedFrequency === 'Monthly' ? 'btn-highlight' : ''} modal-button`}
                                onClick={() => {
                                updateFrequency('Monthly');
                                setSelectedFrequency('Monthly');
                                }}
                            >
                                Monthly
                            </Button>
                            <Button
                                variant={selectedFrequency === 'One-time' ? 'info' : 'light'}
                                className={`btn-block ${selectedFrequency === 'One-time' ? 'btn-highlight' : ''} modal-button`}
                                onClick={() => {
                                updateFrequency('One-time');
                                setSelectedFrequency('One-time');
                                }}
                            >
                                Single
                            </Button>
                            </div>
                            </div>
                        </Col>
                        <Col>
                        <div className="form-group">
                        <Form.Label className="modal-label flex-center-start"><strong>What Size?</strong></Form.Label>
                            <div className="btn-group-vertical" role="group">
                                <Button
                                variant={selectedSize === '0-1300 ft' ? 'info' : 'light'}
                                className={`btn-block ${selectedSize === '0-1300 ft' ? 'selected-button' : ''} modal-button`}
                                onClick={() => {
                                    updateSquareFootage('0-1300 ft');
                                    setSelectedSize('0-1300 ft');
                                }}
                                >
                                -1300 ft
                                </Button>
                                <Button
                                variant={selectedSize === '1300-2000 ft' ? 'info' : 'light'}
                                className={`btn-block ${selectedSize === '1300-2000 ft' ? 'selected-button' : ''} modal-button`}
                                onClick={() => {
                                    updateSquareFootage('1300-2000 ft');
                                    setSelectedSize('1300-2000 ft');
                                }}
                                >
                                1300+ ft
                                </Button>
                                <Button
                                variant={selectedSize === '2000-3000 ft' ? 'info' : 'light'}
                                className={`btn-block ${selectedSize === '2000-3000 ft' ? 'selected-button' : ''} modal-button`}
                                onClick={() => {
                                    updateSquareFootage('2000-3000 ft');
                                    setSelectedSize('2000-3000 ft');
                                }}
                                >
                                2000+ ft
                                </Button>
                                <Button
                                variant={selectedSize === '3000+ ft' ? 'info' : 'light'}
                                className={`btn-block ${selectedSize === '3000+ ft' ? 'selected-button' : ''} modal-button`}
                                onClick={() => {
                                    updateSquareFootage('3000+ ft');
                                    setSelectedSize('3000+ ft');
                                }}
                                >
                                3000+ ft
                                </Button>
                            </div>
                            </div>
                        </Col>
                        <Col style={{ verticalAlign: 'top' }}>
                            <Form.Label className="modal-label"><strong>Cleaning Type?</strong></Form.Label>
                            <Col>
                            <Form.Check
                                type="checkbox"
                                label="Reoccurring"
                                value="Reoccurring Clean"
                                checked={selectedCleaningTypes.includes('Reoccurring Clean')}
                                onChange={handleCleaningTypeChange}
                                className="modal-button text-left"
                                style={{ textAlign: 'left' }}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Deep Clean"
                                value="Deep Clean"
                                checked={selectedCleaningTypes.includes('Deep Clean')}
                                onChange={handleCleaningTypeChange}
                                className="modal-button"
                                style={{ textAlign: 'left' }}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Carpet Shampoo"
                                value="Carpet Shampoo"
                                checked={selectedCleaningTypes.includes('Carpet Shampoo')}
                                onChange={handleCleaningTypeChange}
                                className="modal-button"
                                style={{ textAlign: 'left' }}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Move In/Out"
                                value="Move In/Out"
                                checked={selectedCleaningTypes.includes('Move In/Out')}
                                onChange={handleCleaningTypeChange}
                                className="modal-button"
                                style={{ textAlign: 'left' }}
                            />
                        </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <MessagePreview
            nameMessage={nameMessage}
            phoneNumberMessage={phoneNumberMessage}
            emailMessage={emailMessage}
            frequencyMessage={frequencyMessage}
            squareFootageMessage={squareFootageMessage}
            cleaningTypeMessage={cleaningTypeMessage}
        />
        { nameMessage && phoneNumberMessage &&(
            <Form.Label>Kim will be in touch with you shortly!</Form.Label>
        )}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleCloseModal}>
            Cancel
        </Button>
        <button type="submit" id="sendButton" className={`btn btn-secondary ${loading ? 'disabled' : ''}`}>
            {loading ? (
                <span>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...
                </span>
            ) : (
                'Send'
            )}
        </button>
        </Modal.Footer>
    </Form>
    </Modal>
  )
}
