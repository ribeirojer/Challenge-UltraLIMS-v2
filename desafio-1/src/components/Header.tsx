import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#16213e] h-100px py-6 px-8 flex items-center">
      <a href="https://ultralims.com.br/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://ultralims.com.br/front/images/logo.svg"
          className="w-28"
          alt="Ultra logo"
        />
      </a>
    </header>
  );
};

export default Header;
