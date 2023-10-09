import { Container } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';

function ContactPage() {
  return (
    <Container>
      <RootLayout pages={Pages.Contact}>
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default ContactPage;
