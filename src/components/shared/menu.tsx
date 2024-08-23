"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useWindowScroll } from '@uidotdev/usehooks';


export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#oqueafaz', label: 'O QUE A W FAZ' },
    { href: '#beneficios', label: 'BENEFÍCIOS' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [{ y }] = useWindowScroll();

  return (
    <nav className={`animate__animated animate__fadeInDown bg-[#000] fixed flex w-full items-center justify-between px-[10vw] py-[1.2rem] ${(y ?? 0) > 100 ? 'bg-black bg-opacity-30 backdrop-blur-[5px]' : 'bg-transparent'} z-50`} aria-label="Main navigation">
      <div className="flex items-center">
        <div className="bg-gray-700 text-white h-10 w-10 flex items-center justify-center md:ml-60">
          LOGO
        </div>
      </div>

      <div className="hidden md:flex space-x-8 text-white text-sm md:mr-60">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-[11.9114px] hover:text-gray-400">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white p-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div className="flex flex-col space-y-4 mt-16">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gray-400 text-lg">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};
