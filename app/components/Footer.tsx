import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./GoogleMap"), {
    ssr: true,
    loading: () => (
        <div className="w-full h-full bg-surface-variant/50 animate-pulse flex flex-col gap-2 items-center justify-center text-on-surface-variant/50">
            <MapPin className="w-8 h-8 animate-bounce" />
            <span className="font-body-sm tracking-wider uppercase">Loading Map...</span>
        </div>
    )
});

export default function Footer() {
return(
<>
            <footer id="contact" className="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-10">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand & About */}
                        <div className="col-span-1 lg:col-span-1 relative">
                            <Image alt="MARMAR+" width={200} height={200} className="w-auto object-contain mb-6 opacity-90" src="/my-icon.webp" loading="lazy" />
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
                            <div className="w-full h-64 rounded-lg overflow-hidden border border-outline-variant/30  opacity-80 transition-all duration-500">
                                <MapComponent />
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