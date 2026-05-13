"use client";

import Link from "next/link";
export default function Footer() {
return(
<>
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
                        


                        {/* Contact Info */}
                        <div>
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Contact Us</h4>
                            <ul className="space-y-4 font-body-md text-on-surface-variant/80">
                                <li className="flex items-start gap-3">
                                    <span translate="no" className="material-symbols-outlined text-secondary text-xl">location_on</span>
                                    <span>1250 Premium Way, Suite 400<br/>Design District, NY 10013</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span translate="no" className="material-symbols-outlined text-secondary text-xl">call</span>
                                    <Link href="tel:+12125550198" className="hover:text-secondary transition-colors">+1 (212) 555-0198</Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span translate="no" className="material-symbols-outlined text-secondary text-xl">mail</span>
                                    <Link href="mailto:inquiries@marbleplus.com" className="hover:text-secondary transition-colors">inquiries@marbleplus.com</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Google Maps Location */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Our Location</h4>
                            <div className="w-full h-64 rounded-lg overflow-hidden border border-outline-variant/30  opacity-80 transition-all duration-500">
                                <iframe 
                                    className="block"
                                    translate="no"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9504481541813!2d-74.00839062341996!3d40.71821037139234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a3033d599%3A0xc6c764e7c75b871c!2sDesign%20District!5e0!3m2!1sen!2sus!4v1715485000000!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-outline-variant/20 pt-8 flex  justify-center items-center ">
                        <p className="font-body-md text-sm text-on-surface-variant/60">
                            &copy; 2026 Marble Plus Construction. All rights reserved.
                        </p>
               
                    </div>
                </div>
            </footer>
</>
)
}