import React from 'react';
import { Card } from 'react-bootstrap';

function MessagePreview({
  attentionMessage,
  companyNameMessage,
  phoneNumberMessage,
  emailMessage,
  contactMethodMessage,
  facilityTypeMessage,
  serviceTypeMessage,
  employeeCountMessage,
  restroomCountMessage,
  daysMessage,
  frequencyMessage,

}) {
  return (
    <Card>
    <div>
    <img src="/pristine_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
    </div>
    <Card.Body>
        <Card.Title>Request for Quote</Card.Title>
        <Card.Text>
        {`${companyNameMessage}`}<br />
        {`${attentionMessage}`}<br />
        {`${phoneNumberMessage}`}<br />
        {`${emailMessage}`}<br />
        {`${contactMethodMessage}`}
        </Card.Text>
        <Card.Text>
        {`${serviceTypeMessage}`}<br />
        {`${facilityTypeMessage}`}<br />
        {`${employeeCountMessage}`}<br />
        {`${restroomCountMessage}`}
        </Card.Text>
        <Card.Text>
        {`${daysMessage}`}<br />
        {`${frequencyMessage}`}
        </Card.Text>
    </Card.Body>
    </Card>
  );
}

export default MessagePreview;
