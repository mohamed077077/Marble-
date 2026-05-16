import Link from "next/link";

export default function Hero() {
    return (
        <>
        <div id="home" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(min-width: 1166px)" srcSet="/logo-lg.webp" />
                        <source media="(min-width: 851px)" srcSet="/logo-md.webp" />
                        <img 
                            alt="Marble background" 
                            className="w-full h-full object-cover object-center" 
                            src="/logo-sm.webp"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-surface-container-lowest/80 to-surface/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent"></div>
                </div>
                
                <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-start text-left pt-20 h-full justify-between pb-16">
                    <div className="max-w-3xl mt-auto">
                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-auto">
                            <a href="#projects" className="inline-flex justify-center items-center bg-secondary text-on-secondary px-6 py-3 md:px-8 md:py-4 font-label-lg text-label-lg uppercase tracking-widest rounded-DEFAULT transition-all duration-300 hover:bg-secondary-fixed hover:shadow-[0_0_20px_rgba(233,195,73,0.4)] hover:-translate-y-1 text-center">
                                Explore Projects
                            </a>
                            <a href="#contact" className="inline-flex justify-center items-center relative px-6 py-3 md:px-8 md:py-4 font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed rounded-DEFAULT overflow-hidden group transition-all duration-300 hover:-translate-y-1 text-center">
                                <div className="absolute inset-0 bg-surface/20 backdrop-blur-sm border border-outline-variant rounded-DEFAULT group-hover:border-secondary transition-colors duration-300"></div>
                                <span className="relative z-10 group-hover:text-secondary transition-colors duration-300">Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 right-margin-desktop hidden lg:flex flex-col items-end opacity-50">
                    <div className="w-px h-24 bg-gradient-to-b from-secondary to-transparent mb-4"></div>
                    <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary" style={{ writingMode: 'vertical-rl' }}>Scroll to discover</span>
                </div>
            </div>
        </>
    )
}