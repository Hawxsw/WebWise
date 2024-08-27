import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/5516997260636"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-[#0e6b0b] text-white rounded-full p-3 shadow-lg hover:bg-[#0c5909] hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out focus:ring-4 focus:ring-green-300"
    >
      <FaWhatsapp size={24} className="transition-transform duration-300 ease-in-out hover:scale-110" />
    </a>
  );
};
