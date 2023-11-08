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

  const sideLength = isSmallScreen ? size[0] : size[1];
  const textOffset = isSmallScreen ? '0vw' : '5vw';
  const titleLROffset = isSmallScreen ? '0vh' : '15vh';
  const titleSize = isSmallScreen ? '0' : '1vw';

  const containerStyle: React.CSSProperties = {
    width: isSmallScreen ? '80vw' : '20vw',
    height: isSmallScreen ? '28vw' : '20vw',
    position: 'relative',
  };

  const hexagonStyle: React.CSSProperties = {
    width: '100%',
    paddingBottom: '120%',
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const titleStyle: React.CSSProperties = {
    position: 'absolute',
    top: isSmallScreen ? '42%' : '25%',
    left: isSmallScreen ? '0%' : '23%',
    fontSize: isSmallScreen ? '5vw' : '1.3vw',
    fontFamily: 'Calibri',
    textAlign: 'center',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '45%',
    left: '0%',
    fontSize: isSmallScreen ? '1vw' : '1vw',
    fontFamily: 'Calibri',
    textAlign: 'center',
    color: '#000000',
    padding: '5px',
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
