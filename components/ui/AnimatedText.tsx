"use client";

import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  initialClass?: string;
  animationDelay?: number;
  color?: string;
}

export default function AnimatedText({
  text,
  className = '',
  initialClass = 'opacity-0 translate-y-8',
  animationDelay = 0,
  color,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [animationDelay]);

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : initialClass
      } ${className}`}
      style={color ? { color } : undefined}
    >
      {text}
    </span>
  );
}

export function AnimatedTitle({
  text,
  className = '',
  delay = 0,
  color,
}: {
  text: string;
  className?: string;
  delay?: number;
  color?: string;
}) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <AnimatedText
            text={word}
            animationDelay={delay + index * 100}
            color={color}
          />
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );
}

export function AnimatedParagraph({
  text,
  className = '',
  delay = 0,
  color,
}: {
  text: string;
  className?: string;
  delay?: number;
  color?: string;
}) {
  const sentences = text.split('. ');

  return (
    <div className={className}>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          <AnimatedText
            text={sentence + (index < sentences.length - 1 ? '.' : '')}
            animationDelay={delay + index * 200}
            color={color}
          />
          {index < sentences.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );
} 