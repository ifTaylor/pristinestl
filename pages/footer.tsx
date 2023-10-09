import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer>
            <Container>
                <img src="/p_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '150px', maxHeight: '100px' }} />
                <p>&copy; 2023 Pristine STL LLC</p>
            </Container>
        </footer>
    );
};

export default Footer;