"use client";

import React, { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  useEffect(() => {
    if (isMobile()) return;

    const cursorDot = cursorDotRef.current;
    const cursorBorder = cursorBorderRef.current;
    if (!cursorDot || !cursorBorder) return;

    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;

    const animate = () => {
      const time = Date.now();
      if (previousTimeRef.current !== undefined) {
        const dotRect = cursorDot.getBoundingClientRect();
        const borderRect = cursorBorder.getBoundingClientRect();

        endX = endX - (endX - (dotRect.left + dotRect.width / 2)) * 0.2;
        endY = endY - (endY - (dotRect.top + dotRect.height / 2)) * 0.2;

        cursorBorder.style.transform = `translate(${
          endX - borderRect.width / 2
        }px, ${endY - borderRect.height / 2}px)`;
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    function handleMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e;
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      endX = clientX;
      endY = clientY;
    }

    function handleMouseDown() {
      cursorBorder.classList.add("active");
    }

    function handleMouseUp() {
      cursorBorder.classList.remove("active");
    }

    function handleMouseEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        cursorBorder.classList.add("active");
      }
    }

    function handleMouseLeave(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        cursorBorder.classList.remove("active");
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (isMobile()) return null;

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorBorderRef} className="cursor-border" />
    </>
  );
}
