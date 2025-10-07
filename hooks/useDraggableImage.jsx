// src/hooks/useDraggableImage.js
import { useState, useRef, useEffect } from 'react';

const useDraggableImage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(imagePosition);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current || !imageRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    const newPosition = scrollLeft + walk;
    
    // Get container and image dimensions
    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = imageRef.current.offsetWidth;
    
    // Calculate boundaries
    const maxScroll = Math.max(0, imageWidth - containerWidth);
    const boundedPosition = Math.max(-maxScroll, Math.min(0, newPosition));
    
    setImagePosition(boundedPosition);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(imagePosition);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current || !imageRef.current) return;
    
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newPosition = scrollLeft + walk;
    
    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = imageRef.current.offsetWidth;
    const maxScroll = Math.max(0, imageWidth - containerWidth);
    const boundedPosition = Math.max(-maxScroll, Math.min(0, newPosition));
    
    setImagePosition(boundedPosition);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => handleMouseMove(e);

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft, imagePosition]);

  // Reset position when component unmounts or changes
  const resetPosition = () => {
    setImagePosition(0);
  };

  return {
    containerRef,
    imageRef,
    imagePosition,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    resetPosition
  };
};

export default useDraggableImage;