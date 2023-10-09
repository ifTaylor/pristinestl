import React from 'react';
import { Container } from 'react-bootstrap';

interface HexagonCanvasProps {
  title: string;
  text: string;
  size: number[];
}

const HexagonCanvas: React.FC<HexagonCanvasProps> = ({ title, text, size }) => {
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

  const sideLength = isSmallScreen ? size[0] : size[1];
  const textOffset = isSmallScreen ? 45 : 75;
  const titleSize = isSmallScreen ? 18 : 26;

  const containerStyle: React.CSSProperties = {
    width: sideLength * 2 + 'px',
    height: sideLength * 2 + 'px',
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
    top: '25%',
    left: '20%',
    fontSize: titleSize + 'px',
    fontFamily: 'Calibri',
    textAlign: 'center',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-15%, -50%)',
    fontSize: '20px',
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
