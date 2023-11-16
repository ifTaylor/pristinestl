import React from 'react';
import { Card } from 'react-bootstrap';

function MessagePreview({
  nameMessage,
  phoneNumberMessage,
  emailMessage,
  frequencyMessage,
  squareFootageMessage,
  cleaningTypeMessage,
}) {
  return (
    <Card>
    <div>
    <img src="/pristine_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
    </div>
    <Card.Body>
        <Card.Title>Request for Quote</Card.Title>
        <Card.Text>
        {`${nameMessage} ${phoneNumberMessage} ${emailMessage}\n${frequencyMessage} ${squareFootageMessage} ${cleaningTypeMessage}`}
        </Card.Text>
    </Card.Body>
    </Card>
  );
}

export default MessagePreview;
