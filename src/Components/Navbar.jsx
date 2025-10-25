import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./BottomNav.css";
import logo from "../assets/logo.png"



export default function Navbar({ items, className1, onClick 
 }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);
    const itemsContainerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const activeItem = itemRefs.current[activeIndex];
        const itemsContainer = itemsContainerRef.current;

        if (activeItem && itemsContainer) {
            const { offsetWidth: width, offsetLeft: left } = activeItem;

            gsap.to(".lunarNavActiveSelector", {
                width,
                left,
                duration: 0.4,
                ease: "power2.out",
            });
        }
    }, [activeIndex]);

    const handleMenuClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleItemMouseIn = (index) => {
        const currentItem = itemRefs.current[index];

        if (currentItem) {
            const { offsetWidth: width, offsetLeft: left } = currentItem;

            gsap.to(".lunarNavHoverSelector", {
                opacity: 1,
                width: width + 30,
                left: left - 15,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
            });
        }
    };

    const handleItemMouseLeave = () => {
        gsap.to(".lunarNavHoverSelector", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
            <div className="flex w-full h-13 justify-between fixed inset-x-0 z-20  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-700">
                {/* Logo Section */}
                    <div className="lunarNavLogo">
                        <img src={logo} alt="" />
                    </div>
            <div className={`lunarNavBarWrapper ${className1}`} onMouseLeave={handleItemMouseLeave}>

                {/* Menu Button */}
                <div className="lunarNavMenuButtonWrapper">
                    <div onClick={handleMenuClick} className="lunarNavMenuButton">
                        <div className={isMenuOpen ? "lunarNavLineOne" : "lunarNavLineOne active"}></div>
                        <div className={isMenuOpen ? "lunarNavLineTwo" : "lunarNavLineTwo active"}></div>
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="lunarNavItemsContainer" ref={itemsContainerRef}>
                    <div className="lunarNavActiveSelector">
                        <div className="lunarNavDot"></div>
                    </div>
                    <div className="lunarNavHoverSelector"></div>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`lunarNavItem ${activeIndex === index ? "active" : ""}`}
                            onMouseEnter={() => handleItemMouseIn(index)}
                            onClick={() => handleItemClick(index)}
                        >
                            <a href={'#'+item}>{item}</a>
                        </div>

                    ))}
                    <div className={`main-bouncy-btn }`}>
                        <button id="bouncy-btn" onClick={onClick} style={{ backgroundImage:"linear-gradient(45deg, greenyellow, green )", color: "black" }}>
                            <span>JOIN US</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}