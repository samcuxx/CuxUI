"use client";

import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorStyle?: "bar" | "underscore" | "❤️";
}

export default function TypewriterText({
  phrases,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  cursorStyle = "bar",
}: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const cursor = {
    bar: "|",
    underscore: "_",
    "❤️": "❤️",
  }[cursorStyle];

  useEffect(() => {
    if (phrases.length === 0) return;

    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText((text) => text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const targetText = phrases[currentIndex];
      if (currentText === targetText) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText((text) => targetText.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    isWaiting,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}
