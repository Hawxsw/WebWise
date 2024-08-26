import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/5516997260636"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-[rgb(22,156,18)] text-white rounded-full p-3 shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} className="transition-transform duration-300 ease-in-out hover:scale-110" />
    </a>
  );
};
