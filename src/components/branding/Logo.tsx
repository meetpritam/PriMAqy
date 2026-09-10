import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  onClick?: () => void;
  darkText?: boolean;
}

export function Logo({ className = '', showTagline = false, onClick, darkText = false }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center gap-2.5 font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl ${className}`}
      aria-label="PriMAqy Home"
    >
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white p-0.5 shadow-2xs transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/images/logo.jpg"
          alt="PriMAqy Logo"
          width={36}
          height={36}
          className="h-full w-full object-contain rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <span className={`text-xl font-extrabold tracking-tight leading-none ${darkText ? 'text-white' : 'text-slate-900'}`}>
          PriMAqy
        </span>
        {showTagline && (
          <span className={`mt-1 text-[10px] font-semibold tracking-normal leading-none ${darkText ? 'text-slate-300' : 'text-slate-500'}`}>
            AI & Technology Venture
          </span>
        )}
      </div>
    </Link>
  );
}
