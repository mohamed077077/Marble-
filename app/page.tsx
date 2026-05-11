"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const home = document.querySelector("#home");
    const projects = document.querySelector("#projects");
    const materials = document.querySelector("#materials");
    const contact = document.querySelector("#contact");   
    const sections = [home, projects, materials, contact];


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when section is visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section as Element);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section as Element);
      });
    };
  }, []);
    return (
        <>

        <Header activeSection={activeSection}/>
        <Hero/>
        <Projects/>



            {/* Our Materials Section */}
            <section id="materials" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-background">
                <div className="mb-16 flex flex-col items-start">
                    <h2 className="font-headline-xl text-headline-xl text-primary-fixed inline-block relative pb-4 tracking-widest uppercase">
                        Our Materials
                        <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-secondary"></span>
                        <span className="absolute bottom-0 left-1/3 w-2/3 h-px bg-outline-variant/30"></span>
                    </h2>
                    <p className="font-body-md text-on-surface-variant mt-6 max-w-2xl">
                        Source the world's most exquisite natural stone for your next visionary project. Our curated collection undergoes rigorous quality control to ensure perfection in every slab.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    {/* Material 1 */}
                    <div className="group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-md aspect-square flex items-end">
                        <img alt="Italian Carrara" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3XiIgXswwcxzJUC-l0evSzghB3ElIbCaIMrqyRdrMTCfCF5CCJk6RMCxJ1iMUxZfbTX7QUVHwc_h4UzwswwboEB0RZ-VgigNRRV9mIKR50wYzEIMfQlbsJfIbQIT_NJXwU_lo5Tt-o1puAQqXGrIS5ttVKRtch3bNuyZk7tNZ7jGDvJEiwWvNWzIgD_P9qFOfkgvRaKSIPgDjCEdaeBIDOoxzElgHqepTXlYua49EAR2sWGpfYmzfda-_9oaQzOX8zusfufsZJQ"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative z-10 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="font-headline-md text-headline-md text-primary-fixed mb-2 group-hover:text-secondary transition-colors duration-300">Italian Carrara</h3>
                            <div className="h-1 w-8 bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </div>

                    {/* Material 2 */}
                    <div className="group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-md aspect-square flex items-end">
                        <img alt="Black Marquina" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpCM_uMCbPPaJboRGTkJHENl5FZldnVZ6EvOx8sWzxsp21G_nwtRIiIRRS-txrkhTH6FKsRCE2i-OCf-MJv3JHuSkUnmau5KFRM5zcZuUMy-RbKjEV6ogqv47t0JD8fGpQ1_adXcWjkeDAtoaZbl856yPO_YyyBYNbH7lxozKpcPMwuB0MejQ6_ZB34ud5RF6kzueQEgnhKXcsq76sMm96iK2h0jAF-C5sfK5n2hJr3nqEFfWLNHBVWjz4ZL3jKfd83puAAMNQS-0"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative z-10 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="font-headline-md text-headline-md text-primary-fixed mb-2 group-hover:text-secondary transition-colors duration-300">Black Marquina</h3>
                            <div className="h-1 w-8 bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </div>

                    {/* Material 3 */}
                    <div className="group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-md aspect-square flex items-end">
                        <img alt="Gold Vein Onyx" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-wYSpwnL603P0OuyFLuqcZ13tGsfRMlry_1Otj2MKx5HEnPXtAmp8KLvE0Wif33kWVy7GiAvpizU2cZhdLNGPqkrnpjandjMqLmj0PSmLgVkcaO67z3ssU2ra25LR_rqIo4Sygk-_FwzkejrruW1fJu1sA_EjpoZQJvTk6xrgXkjrioOGDutj1eqEBtdVstdceIqIaJ-6Yyhe14TcUxCv66M5wlS1oLtSsPiNKkfSGB0Y21NxkQhIYlpy1mdwQe7gRinIChLKBE"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative z-10 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="font-headline-md text-headline-md text-primary-fixed mb-2 group-hover:text-secondary transition-colors duration-300">Gold Vein Onyx</h3>
                            <div className="h-1 w-8 bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </div>

                    {/* Material 4 */}
                    <div className="group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-md aspect-square flex items-end">
                        <img alt="Silver Travertine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiT-KQaGtpxcedpQXeti_vymcdrr6zqylsoDH-DxmqxSadrTLzeFmoA_4UMmYM9GVsl-nK772Jt6H74yv_6eO_DO4CSU00pI7xtQ2pKtIXxG6fqBr320xbDHsBdbViDoxIrjVoCkJfsMPa7NZrjpfn8g2C9QXhGoVl1ZphRgf-RCPvH5th4MOzAh_9G_hd7PgQSLrNd-4GpAIMdI__TkvogbSaSFwKTSmy79QUZ1b7pQHVzb9zrN2XaaXVudqUaut_mCpnrJLmIw"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative z-10 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="font-headline-md text-headline-md text-primary-fixed mb-2 group-hover:text-secondary transition-colors duration-300">Silver Travertine</h3>
                            <div className="h-1 w-8 bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            
            <footer id="contact" className="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-10">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand & About */}
                        <div className="col-span-1 lg:col-span-1">
                            <img alt="MARMAR+" className="h-12 md:h-16 w-auto object-contain mb-6 opacity-90" src="my-icon.png"/>
                            <p className="font-body-md text-on-surface-variant/80 mb-6 max-w-sm">
                                Curators of extraordinary natural stone for luxury architectural and interior design projects worldwide. Crafting eternity since 1998.
                            </p>
                        </div>
                        
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-4 font-body-md text-on-surface-variant/80">
                                <li><Link href="#projects" className="hover:text-secondary transition-colors">Featured Projects</Link></li>
                                <li><Link href="#materials" className="hover:text-secondary transition-colors">Stone Collections</Link></li>
                                <li><Link href="#" className="hover:text-secondary transition-colors">Our Heritage</Link></li>
                                <li><Link href="#" className="hover:text-secondary transition-colors">Sustainability</Link></li>
                                <li><Link href="#" className="hover:text-secondary transition-colors">Architect Portal</Link></li>
                            </ul>
                        </div>
                        
                        {/* Contact Info */}
                        <div>
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Contact Us</h4>
                            <ul className="space-y-4 font-body-md text-on-surface-variant/80">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
                                    <span>1250 Premium Way, Suite 400<br/>Design District, NY 10013</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary text-xl">call</span>
                                    <Link href="tel:+12125550198" className="hover:text-secondary transition-colors">+1 (212) 555-0198</Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                                    <Link href="mailto:inquiries@marbleplus.com" className="hover:text-secondary transition-colors">inquiries@marbleplus.com</Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Newsletter */}
                        <div>
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Journal</h4>
                            <p className="font-body-md text-on-surface-variant/80 mb-4">Subscribe to our architectural journal for the latest in stone design.</p>
                            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Email Address" className="w-full bg-surface-container border border-outline-variant/30 rounded-DEFAULT px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" required />
                                <button type="submit" className="w-full bg-surface-variant hover:bg-secondary hover:text-on-secondary text-primary-fixed px-6 py-3 font-label-lg text-label-lg uppercase tracking-widest rounded-DEFAULT transition-all duration-300">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body-md text-sm text-on-surface-variant/60">
                            &copy; 2026 Marble Plus Construction. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-on-surface-variant/60">
                            <Link href="#" className="hover:text-secondary transition-colors text-sm font-label-lg uppercase tracking-wider">Privacy Policy</Link>
                            <Link href="#" className="hover:text-secondary transition-colors text-sm font-label-lg uppercase tracking-wider">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-8 right-8 z-[100] group">
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-surface-container-highest text-on-surface text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-outline-variant/30">
                    Chat with us
                    <div className="absolute top-full right-5 -mt-1 border-4 border-transparent border-t-surface-container-highest"></div>
                </div>
                {/* Button */}
                <Link className="flex items-center justify-center w-14 h-14 text-on-secondary rounded-full transform hover:-translate-y-1 transition-all duration-300 active:scale-95 bg-secondary shadow-[0_4px_15px_rgba(233,195,73,0.3)] hover:shadow-[0_8px_25px_rgba(233,195,73,0.4)] hover:bg-secondary-fixed" href="https://wa.me/#" target="_blank">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                    </svg>
                </Link>
            </div>
        </>
    );
}
