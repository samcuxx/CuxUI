"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticLink({
  href,
  children,
  className = "",
  strength = 30,
}: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = linkRef.current;
    if (!link) return;

    const rect = link.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
    </Link>
  );
}
