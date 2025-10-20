import React, { useState } from 'react'
import headerLogo from '../assets/utils/headerUtils/headerLogo.png'
import menus from '../assets/utils/headerUtils/menus.json'
import { useNavigate } from 'react-router'
import "../assets/styles/header.css"

export default function Header() {

    const navigate = useNavigate()

    const [inside, setInside] = useState('#a1368f')
    const [outside, setoutside] = useState('#f58634')
    const [hovered, setHovered] = useState(null)
    const [respMenuState, setRespMenuStatw] = useState(false)

    const inHandler = () => { setoutside('#a1368f'); setInside('#f58634') }
    const outHandler = () => { setoutside('#f58634'); setInside('#a1368f') }

    return (
    <div className="nav-container">
        <div className="header-wrapper ">
            <div className="logo-email-col ">
                <div className="logo" onClick={() => navigate("/")}>
                    <a href="#headerPanel">
                        <img src={headerLogo} alt="joseph adekola logo" className="logo-img" />
                    </a>
                </div>
                <div className="email-text">
                    <p>
                        <a href="mailto:adekola.adebayo2@yahoo.com">
                            info@josephadekola.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="menus-col">
                <div className="menu-list">
                    {menus.map((item, index) => {
                        const isHovered = index === hovered;

                        return (
                            <div key={index} className="menu-item">
                                <p
                                    className={`menu-text ${item.specialText ? 'special' : 'regular'}`}
                                    onMouseEnter={() => {
                                        setHovered(index);
                                        item.specialText && inHandler();
                                    }}
                                    onMouseLeave={() => {
                                        setHovered(null);
                                        item.specialText && outHandler();
                                    }}
                                    style={
                                        item.specialText
                                            ? { background: `linear-gradient(to right, ${outside}, ${inside})` }
                                            : {}
                                    }
                                >
                                    <a href={`#${item.anchor}`}>{item.menu}</a>
                                    <hr
                                        className={`menu-underline ${item.specialText ? 'hidden' : ''
                                            } ${isHovered ? 'hovered' : ''}`}
                                    />
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="hamburger-col">
                    <div
                        className={`hamburger-menu open ${respMenuState ? 'inactive' : ''
                            }`}
                    >
                        <i
                            className="pi pi-align-right"
                            onClick={() => setRespMenuStatw(true)}
                        ></i>
                    </div>

                    <div
                        className={`hamburger-menu close ${!respMenuState ? 'inactive' : ''
                            }`}
                    >
                        <i
                            className="pi pi-times"
                            onClick={() => setRespMenuStatw(false)}
                        ></i>
                    </div>
                </div>
            </div>

            <div
                className={`responsive-nav ${!respMenuState ? 'collapsed' : ''}`}
            >
                <ul className="responsive-menu-list">
                    {menus.map((respmen, index) => (
                        <li
                            key={index}
                            className={`responsive-menu-item ${respmen.specialText ? 'hidden' : ''
                                }`}
                        >
                            <a
                                href={`#${respmen.anchor}`}
                                onClick={() => setRespMenuStatw(false)}
                            >
                                {respmen.menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

    )
}



