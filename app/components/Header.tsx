'use client';


import Link from "next/link";
import { useState , useEffect } from "react";
import Image from "next/image";

export default function Header({activeSection}: {activeSection: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
        <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl h-20 border-b border-outline-variant/20 shadow-md ">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto  h-20">
                    <div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed tracking-tighter">
                        <Link href="/" >
                            <Image alt="MARBLE+" width={100} height={100} src="/my-icon.png" className="object-contain"/>
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link className={`font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeSection === 'home' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary'}`} href="#home">Home</Link>
                        </li>
                        <li>
                            <Link className={`font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeSection === 'projects' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} href="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link className={`font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeSection === 'materials' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} href="#materials">Materials</Link>
                        </li>
                        <li>
                            <Link className={`font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeSection === 'contact' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} href="#contact">Contact</Link>
                        </li>
                    </ul>
                    
                    {/* Mobile Menu Icon */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden text-primary hover:text-secondary p-2 focus:outline-none z-50 relative transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95  rounded-full"
                    >
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 0' }}>
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg  flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}>
                <ul className="flex flex-col items-center space-y-8 text-center">
                    <li><a onClick={handleLinkClick} className="font-headline-lg text-headline-lg text-secondary tracking-widest uppercase" href="#home">Home</a></li>
                    <li><a onClick={handleLinkClick} className="font-headline-lg text-headline-lg text-on-surface tracking-widest uppercase hover:text-secondary transition-colors" href="#projects">Projects</a></li>
                    <li><a onClick={handleLinkClick} className="font-headline-lg text-headline-lg text-on-surface tracking-widest uppercase hover:text-secondary transition-colors" href="#materials">Materials</a></li>
                    <li><a onClick={handleLinkClick} className="font-headline-lg text-headline-lg text-on-surface tracking-widest uppercase hover:text-secondary transition-colors" href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}