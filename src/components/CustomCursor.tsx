import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCirclePosition((prev) => {
        const dx = dotPosition.x - prev.x;
        const dy = dotPosition.y - prev.y;
        
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dotPosition]);

  return (
    <>
      {/* Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
      {/* Circle */}
      <div
        className={`custom-cursor-circle ${isPointer ? 'scale-150' : ''}`}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
