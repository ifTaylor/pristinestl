import React, { FormEvent, useState, useEffect } from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import MessagePreview from '../components/message_preview_commercial';

interface CommercialQuoteProps {
  show: boolean;
  onCommercialQuote: (file: Blob) => void;
  onHide: () => void;
}

export default function CommercialQuote({
  show,
  onCommercialQuote,
  onHide,
}: CommercialQuoteProps) {
  const [companyNameMessage, setCompanyNameMessage] = useState('');
  const [attentionMessage, setAttentionMessage] = useState('');
  const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [selectedContactMethods, setSelectedContactMethods] = useState([]);
  const [contactMethodMessage, setContactMethodMessage] = useState('');
  const [facilityTypeMessage, setFacilityTypeMessage] = useState('');
  const [serviceTypeMessage, setServiceTypeMessage] = useState('');
  const [employeeCountMessage, setEmployeeCountMessage] = useState('');
  const [restroomCountMessage, setRestroomCountMessage] = useState('');
  const [frequencyMessage, setFrequencyMessage] = useState('');
  const [cleaningTypeMessage, setCleaningTypeMessage] = useState('');
  const [selectedCleaningTypes, setSelectedCleaningTypes] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [daysMessage, setDaysMessage] = useState('');
  const [messagePreview, setMessagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    attention: '',
    phone: '',
    email: '',
    message: '',
    facilityType: '',
    serviceType: '',
    employeeCount: '',
    restroomCount: '',
  });

  useEffect(() => {
    if (selectedContactMethods.length > 0) {
        setContactMethodMessage(`Contact Method(s): ${selectedContactMethods.join(', ')}`);
      } else {
        setContactMethodMessage('');
    }
    if (selectedDays.length > 0) {
        console.log(selectedDays);
        setDaysMessage(`Scheduled Days: ${selectedDays.join(', ')}`);
      } else {
        setDaysMessage('');
    }
    
    const previewContent = `"Commercial Quote:\n
                            ${companyNameMessage}\n
                            ${attentionMessage}\n
                            ${phoneNumberMessage}\n
                            ${emailMessage}\n
                            ${contactMethodMessage}\n
                            ${serviceTypeMessage}\n
                            ${facilityTypeMessage}\n
                            ${employeeCountMessage}\n
                            ${restroomCountMessage}\n
                            ${daysMessage}\n
                            ${frequencyMessage}`;
    setMessagePreview(previewContent);
    
  }, [attentionMessage, companyNameMessage, phoneNumberMessage, emailMessage, contactMethodMessage, facilityTypeMessage, serviceTypeMessage, employeeCountMessage, restroomCountMessage, frequencyMessage, selectedContactMethods, selectedDays]);

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

  const handleContactMethodChange = (e) => {
    const value = e.target.value;
  
    if (e.target.checked) {
      setSelectedContactMethods((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedContactMethods((prevSelected) =>
        prevSelected.filter((type) => type !== value)
      );
    }
  };

  const handleDaysChange = (e) => {
    const value = e.target.value;
  
    if (e.target.checked) {
      setSelectedDays((prevSelected) => [...prevSelected, value]);
    } else {
        setSelectedDays((prevSelected) =>
        prevSelected.filter((type) => type !== value)
      );
    }
  };

  const handleCloseModal = () => {
    console.log("Made it here");
    setFormData({
      companyName: '',
      attention: '',
      phone: '',
      email: '',
      message: '',
      facilityType: '',
      serviceType: '',
      employeeCount: '',
      restroomCount: '',
    });
    setCompanyNameMessage('');
    setAttentionMessage('');    
    setPhoneNumberMessage('');
    setEmailMessage('');
    setSelectedContactMethods([]);
    setContactMethodMessage('');
    setFacilityTypeMessage('');
    setServiceTypeMessage('');
    setEmployeeCountMessage('');
    setRestroomCountMessage('');
    setFrequencyMessage('');
    setCleaningTypeMessage('');
    onHide();
  };

    const updateAttention = (value) => {
        if (value.length > 0) {
            setAttentionMessage(`Attention: ${value} `);
        } else {
            setAttentionMessage(``);
        }   
    };
    const updateCompanyName = (value) => {
        if (value.length > 0) {
            setCompanyNameMessage(`Company: ${value} `);
        } else {
            setCompanyNameMessage(``);
        }
    };

    const updatePhoneNumber = (value) => {
        setPhoneNumberMessage(`Phone: ${value}`);
    };

    const updateEmail = (value) => {
        setEmailMessage(`Email: ${value} `);
    };

    const updateFacilityType = (value) => {
        setFacilityTypeMessage(`Area Type: ${value}`);
    }

    const updateServiceType = (value) => {
        setServiceTypeMessage(`Service: ${value}`);
    }

    const updateEmployeeCount = (value) => {
        setEmployeeCountMessage(`Number of Employees/Spaces: ${value}`);
    }

    const updateRestroomCount = (value) => {
        setRestroomCountMessage(`Number of Restrooms: ${value}`);
    }

    const updateFrequency = (frequency) => {
        setFrequencyMessage(`Frequency: ${frequency}`);
      };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.companyName || !formData.phone) {
        alert('Name and Number are required fields.');
        return;
    }

    setLoading(true);

    try {
        const requestData = {
        ...formData,
        message: messagePreview,
        };
        console.log(requestData);

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
                    <label htmlFor="name">Company Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        name="company_name"
                        required
                        value={formData.companyName}
                        onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        updateCompanyName(e.target.value);
                        }}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Attention:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="attention"
                        name="attention"
                        placeholder="(Required)"
                        required
                        value={formData.attention}
                        onChange={(e) => {
                        setFormData({ ...formData, attention: e.target.value });
                        updateAttention(e.target.value);
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
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                updateEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="list-padding center-content form-group">
                        <Form.Label className="modal-label"><strong>Preferred Contact Method:</strong></Form.Label>
                        <div className="center-content">
                        <Form.Check
                            type="checkbox"
                            label="Phone"
                            value="Phone"
                            checked={selectedContactMethods.includes('Phone')}
                            onChange={handleContactMethodChange}
                            className="modal-button"
                        />
                        <div className="inline-padding"></div>
                        <Form.Check
                            type="checkbox"
                            label="Email"
                            value="Email"
                            checked={selectedContactMethods.includes('Email')}
                            onChange={handleContactMethodChange}
                            className="modal-button"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Text"
                            value="Text"
                            checked={selectedContactMethods.includes('Text')}
                            onChange={handleContactMethodChange}
                            className="modal-button"
                        />
                        </div>
                    </div>
                </Col>
                <Col className="service-info">
                    <Form.Label className="flex-center modal-subtitle"><strong>Service Information</strong></Form.Label>
                    <Row className="green-container">
                        <Col>
                            <div className="form-group">
                                <Form.Label className="modal-label flex-center-start"><strong>Facility Type:</strong></Form.Label>
                                <select
                                    className="form-control"
                                    id="facilityType"
                                    name="facilityType"
                                    value={formData.facilityType}
                                    onChange={(e) => {
                                        setFormData({ ...formData, facilityType: e.target.value });
                                        updateFacilityType(e.target.value);
                                    }}
                                >
                                    <option value="">Select Facility Type</option>
                                    <option value="Office">Office</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <Form.Label className="modal-label flex-center-start"><strong>Service Type:</strong></Form.Label>
                                <select
                                    className="form-control"
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={(e) => {
                                        setFormData({ ...formData, serviceType: e.target.value });
                                        updateServiceType(e.target.value);
                                    }}
                                >
                                    <option value="">Select Service Type</option>
                                    <option value="Janitorial">Janitorial</option>
                                    <option value="Disinfection">Disinfection</option>
                                    <option value="Specialty">Specialty</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="form-group list-padding">
                            <label htmlFor="name">Number of Employee/Office Spaces:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employee_count"
                                name="employee_count"
                                required
                                value={formData.employeeCount}
                                onChange={(e) => {
                                setFormData({ ...formData, employeeCount: e.target.value });
                                updateEmployeeCount(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Number of Restrooms:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="restroom_count"
                                name="restroom_count"
                                required
                                value={formData.restroomCount}
                                onChange={(e) => {
                                setFormData({ ...formData, restroomCount: e.target.value });
                                updateRestroomCount(e.target.value);
                                }}
                            />
                        </div>
                        </Col>
                    </Row>
                    <Row className="item-padding">
                        <Col>
                        <div className="form-group">
                            <Form.Label className="modal-label"><strong>Preferred Days:</strong></Form.Label>
                                <Col className="center-content">
                                <Form.Check
                                    type="checkbox"
                                    label="Monday"
                                    value="Monday"
                                    checked={selectedDays.includes('Monday')}
                                    onChange={handleDaysChange}
                                    className="modal-button text-left"
                                    style={{ textAlign: 'left' }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Tuesday"
                                    value="Tuesday"
                                    checked={selectedDays.includes('Tuesday')}
                                    onChange={handleDaysChange}
                                    className="modal-button"
                                    style={{ textAlign: 'left' }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Wednesday"
                                    value="Wednesday"
                                    checked={selectedDays.includes('Wednesday')}
                                    onChange={handleDaysChange}
                                    className="modal-button"
                                    style={{ textAlign: 'left' }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Thursday"
                                    value="Thursday"
                                    checked={selectedDays.includes('Thursday')}
                                    onChange={handleDaysChange}
                                    className="modal-button"
                                    style={{ textAlign: 'left' }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Friday"
                                    value="Friday"
                                    checked={selectedDays.includes('Friday')}
                                    onChange={handleDaysChange}
                                    className="modal-button"
                                    style={{ textAlign: 'left' }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Saturday"
                                    value="Saturday"
                                    checked={selectedDays.includes('Saturday')}
                                    onChange={handleDaysChange}
                                    className="modal-button"
                                    style={{ textAlign: 'left' }}
                                />
                                </Col>
                        </div>
                        </Col>
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
                                variant={selectedFrequency === 'One-Time' ? 'info' : 'light'}
                                className={`btn-block ${selectedFrequency === 'One-Time' ? 'btn-highlight' : ''} modal-button`}
                                onClick={() => {
                                updateFrequency('One-Time');
                                setSelectedFrequency('One-Time');
                                }}
                            >
                                Single
                            </Button>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <MessagePreview
            attentionMessage={attentionMessage}
            companyNameMessage={companyNameMessage}
            phoneNumberMessage={phoneNumberMessage}
            emailMessage={emailMessage}
            contactMethodMessage={contactMethodMessage}
            facilityTypeMessage={facilityTypeMessage}
            serviceTypeMessage={serviceTypeMessage}
            employeeCountMessage={employeeCountMessage}
            restroomCountMessage={restroomCountMessage}
            daysMessage={daysMessage}
            frequencyMessage={frequencyMessage}
        />
        { attentionMessage && phoneNumberMessage &&(
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
