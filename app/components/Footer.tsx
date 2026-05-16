import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import GoogleMap from "./GoogleMap";


export default function Footer() {
return(
<>
            <footer id="contact" className="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-10">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand & About */}
                        <div className="col-span-1 lg:col-span-1 relative">
                            <Image alt="MARMAR+" width={200} height={200} className="mb-6 opacity-90" src="/my-icon.webp" loading="lazy" sizes="(max-width: 768px) 150px, 200px" style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                            <p className="font-body-md text-on-surface-variant/80 mb-6 max-w-sm">
                                Curators of extraordinary natural stone for luxury architectural and interior design projects worldwide. Crafting eternity since 1998.
                            </p>
                        </div>
                        


                        {/* Contact Info */}
                        <div>
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Contact Us</h4>
                            <ul className="space-y-4 font-body-md text-on-surface-variant/80">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span>1250 Premium Way, Suite 400<br/>Design District, NY 10013</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                                    <Link href="tel:+12125550198" className="hover:text-secondary transition-colors">+1 (212) 555-0198</Link>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                                    <Link href="mailto:inquiries@marbleplus.com" className="hover:text-secondary transition-colors">inquiries@marbleplus.com</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Google Maps Location */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <h4 className="font-headline-md text-xl text-primary-fixed mb-6 uppercase tracking-wider">Our Location</h4>
                            <div className="w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden border border-outline-variant/30 opacity-80 transition-all duration-500">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-2 text-center">
                        <p className="font-body-md text-xs md:text-sm text-on-surface-variant/60">
                            &copy; 2026 Marble Plus Construction. All rights reserved.
                        </p>
               
                    </div>
                </div>
            </footer>
</>
)
}