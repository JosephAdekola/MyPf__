import React, { useState } from 'react'
import headerLogo from '../assets/utils/headerUtils/headerLogo.png'
import menus from '../assets/utils/headerUtils/menus.json'

function FooterArea() {
  const [inside, setInside] = useState('#a1368f');
  const [outside, setoutside] = useState('#f58634');
  const [hovered, setHovered] = useState(null);

  const menuToHide = ["Testimonials", "Skills"];

  const inHandler = () => {
    setoutside('#a1368f');
    setInside('#f58634');
  };

  const outHandler = () => {
    setoutside('#f58634');
    setInside('#a1368f');
  };

  return (
    <div className="w-full relative py-10">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-5 flex flex-col gap-5">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={headerLogo} alt="Logo" className="h-[60px] w-[60px] object-cover" />
        </div>

        {/* Menu Items */}
        <div className="text-white mx-auto w-full">
          <div className="grid grid-cols-4 gap-4 w-fit mx-auto ">
            {menus.map((item, index) => {
              const isHovered = index === hovered;

              if (menuToHide.includes(item.menu) || item.specialText) return null;

              return (
                <div
                  key={index}
                  className="flex flex-col items-start overflow-hidden w-fit  "
                  onMouseEnter={() => {
                    setHovered(index);
                    item.specialText && inHandler();
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    item.specialText && outHandler();
                  }}
                >
                  <p
                    className={`font-semibold cursor-pointer text-lg rounded-md transition-all duration-300`}
                    style={
                      item.specialText
                        ? { background: `linear-gradient(to right, ${outside}, ${inside})`, color: 'white' }
                        : {}
                    }
                  >
                    <a href={`#${item.anchor}`}>
                        {item.menu}
                    </a>
                  </p>

                  {/* Animated Underline */}
                  {!item.specialText && (
                    <hr
                      className={`w-full bg-gradient-to-r from-[#f58634] to-[#a1368f] transform
                      ${isHovered ? 'translate-x-0' : '-translate-x-full'}
                      transition-transform duration-500 ease-in-out`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterArea;
