import { Container } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import AboutKim from '../components/about_kim';

function AboutPage() {
  return (
    <Container>
      <RootLayout pages={Pages.About}>
        <AboutKim/>
      </RootLayout>
    </Container>
  );
}

export default AboutPage;
