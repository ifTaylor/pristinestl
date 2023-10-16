import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

interface HexagonCanvasProps {
  title: string;
  text: string;
  size: number[];
}

const HexagonCanvas: React.FC<HexagonCanvasProps> = ({ title, text, size }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 768);
    }
  }, []);

  const containerStyle: React.CSSProperties = {
    width: isSmallScreen ? '80vw' : '20vw',
    height: isSmallScreen ? '28vw' : '20vw',
    position: 'relative',
  };

  const hexagonStyle: React.CSSProperties = {
    width: '100%',
    paddingBottom: '115.47%',
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const titleStyle: React.CSSProperties = {
    position: 'absolute',
    top: isSmallScreen ? '40%' : '25%',
    left: isSmallScreen ? '0%' : '23%',
    fontSize: isSmallScreen ? '5vw' : '1.2vw',
    fontFamily: 'Calibri',
    textAlign: 'center',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '0%',
    fontSize: '120%',
    fontFamily: 'Calibri',
    textAlign: 'center',
    color: '#000000',
    padding: '1%',
  };

  return (
    <Container className='flex-center'>
      <div style={containerStyle}>
        <div style={hexagonStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 115.47"
          >
            <polygon
              points="50 0 100 28.87 100 86.6 50 115.47 0 86.6 0 28.87"
              fill="#ffff00"
              stroke="#000000"
              strokeWidth="0"
            />
          </svg>
        </div>
        <div style={titleStyle}><strong>{title}</strong></div>
        {!isSmallScreen && <div style={textStyle}>{text}</div>}
      </div>
    </Container>
  );
};

export default HexagonCanvas;
