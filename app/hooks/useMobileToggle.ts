import { useEffect, useState } from "react";

export default function useMobileToggle() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
    }, [isMenuOpen]); // “Is the mobile menu currently open?”
    // This disables page scrolling.

    return {
        isMenuOpen,
        toggleMenu,
    }

}