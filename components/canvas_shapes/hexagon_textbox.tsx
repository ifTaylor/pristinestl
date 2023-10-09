import { Container } from 'react-bootstrap';
import React from 'react';
import { Stage, Layer, RegularPolygon, Text } from 'react-konva';

interface HexagonCanvasProps {
  title: string;
  text: string;
  size: number[];
}

const HexagonCanvas: React.FC<HexagonCanvasProps> = ({ title, text, size }) => {
  const pixelRatio = 100;
  
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

  const sideLength = isSmallScreen ? size[0] : size[1];
  const textOffset = isSmallScreen ? 45 : 75;
  const titleSize = isSmallScreen ? 18 : 24;

  const hexagonRadius = sideLength;
  const hexagonX = sideLength;
  const hexagonY = sideLength;

  return (
    <Container className='flex-center'>
        <Stage width={sideLength * 2} height={sideLength * 2} pixelRatio={pixelRatio}>
            <Layer>
                <RegularPolygon
                x={hexagonX}
                y={hexagonY}
                sides={6}
                radius={hexagonRadius}
                fill="#ffff00"
                stroke="#000000"
                strokeWidth={0}
                />
                <Text
                x={hexagonX - hexagonRadius}
                y={hexagonY - hexagonRadius + textOffset}
                text={title}
                fontSize={titleSize}
                width={hexagonRadius * 2}
                align="center"
                fontFamily="Calibri"
                perfectDrawEnabled={false}
                />
                {!isSmallScreen && (
                    <Text
                    x={hexagonX - hexagonRadius}
                    y={hexagonY - textOffset}
                    fontSize={18}
                    width={hexagonRadius * 2}
                    align="center"
                    listening={false}
                    text={text}
                    fill="#000000"
                    fontStyle="normal"
                    lineHeight={1.5}
                    fontFamily="Calibri"
                    padding={25}
                    perfectDrawEnabled={false}
                    />
                )}
            </Layer>
        </Stage>
    </Container>
  );
};

export default HexagonCanvas;
