'use client';

import Image from "next/image";
import useMobileToggle from "../../hooks/useMobileToggle";
import { Menu, X } from "lucide-react";
import { Tab } from "../page";




export default function Header({activeTab, setActiveTab}: {activeTab: Tab, setActiveTab: (tab: Tab) => void}) {
    const {isMenuOpen, toggleMenu} = useMobileToggle();
    return (
        <>
        <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl h-20 border-b border-outline-variant/20 shadow-md ">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto  h-20">
                    <div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed tracking-tighter">
                        <a href="/" >
                            <Image alt="MARBLE+" width={100} height={100} src="/my-icon.webp" sizes="(max-width: 768px) 80px, 100px" style={{ width: '100%', height: 'auto', maxWidth: '100px' }} />
                        </a>
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <button className={`cursor-pointer font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeTab === 'projects' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} onClick={() => setActiveTab('projects')}>Projects</button>
                        </li>
                        <li>
                            <button className={`cursor-pointer font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeTab === 'products' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} onClick={() => setActiveTab('products')}>Products</button>
                        </li>
                        <li>
                            <button className={`cursor-pointer font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeTab === 'materials' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} onClick={() => setActiveTab('materials')}>Materials</button>
                        </li>
                        <li>
                            <button className={`cursor-pointer font-label-lg text-label-lg uppercase tracking-widest inline-block transition-all duration-300 ${activeTab === 'addNew' ? 'text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 scale-95 active:scale-90' : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary '}`} onClick={() => setActiveTab('addNew')}>Add New</button>
                        </li>

                    </ul>
                    
                    {/* Mobile Menu Icon */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden text-primary hover:text-secondary p-2 focus:outline-none z-50 relative transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95  rounded-full"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg  flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}>
                <ul className="flex flex-col items-center space-y-8 text-center">
                    <li>
                        <button onClick={() => { setActiveTab('projects'); toggleMenu(); }} className={`cursor-pointer font-headline-lg text-headline-lg tracking-widest uppercase transition-colors ${activeTab === 'projects' ? 'text-secondary' : 'text-on-surface hover:text-secondary'}`}>Projects</button>
                    </li>
                    <li>
                        <button onClick={() => { setActiveTab('products'); toggleMenu(); }} className={`cursor-pointer font-headline-lg text-headline-lg tracking-widest uppercase transition-colors ${activeTab === 'products' ? 'text-secondary' : 'text-on-surface hover:text-secondary'}`}>Products</button>
                    </li>
                    <li>
                        <button onClick={() => { setActiveTab('materials'); toggleMenu(); }} className={`cursor-pointer font-headline-lg text-headline-lg tracking-widest uppercase transition-colors ${activeTab === 'materials' ? 'text-secondary' : 'text-on-surface hover:text-secondary'}`}>Materials</button>
                    </li>
                    <li>
                        <button onClick={() => { setActiveTab('addNew'); toggleMenu(); }} className={`cursor-pointer font-headline-lg text-headline-lg tracking-widest uppercase transition-colors ${activeTab === 'addNew' ? 'text-secondary' : 'text-on-surface hover:text-secondary'}`}>Add New</button>
                    </li>
                </ul>
            </div>
        </>
    )
}