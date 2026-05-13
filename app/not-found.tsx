"use client";

import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center">
          
          {/* Large 404 text with subtle styling */}
          <h1 className="font-headline-lg text-[120px] md:text-[200px] leading-none text-secondary drop-shadow-xl select-none">
            404
          </h1>
          
          <div className="space-y-4">
            <h2 className="font-headline-md text-headline-xl text-primary-fixed uppercase tracking-widest relative inline-block">
              Page Not Found
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-[2px] bg-secondary"></span>
            </h2>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mt-6">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-secondary text-on-secondary px-10 py-4 font-label-lg uppercase tracking-widest rounded-full hover:bg-secondary-fixed transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(233,195,73,0.4)] active:scale-95"
            >
              Return Home
            </Link>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
