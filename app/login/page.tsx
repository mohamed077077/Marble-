import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-margin-mobile md:px-margin-desktop py-12 relative overflow-hidden">
      {/* Decorative premium gradient backgrounds to match Hero feel */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-md w-full bg-surface-container-lowest p-8 md:p-10 rounded-xl border border-outline-variant/30 shadow-xl relative z-10 backdrop-blur-sm">
        
        <div className="mb-10 text-center flex flex-col items-center">
          {/* Brand Logo */}
          <div className="mb-6 hover:scale-105 transition-transform duration-300">
            <Image 
              alt="MARBLE+" 
              width={120} 
              height={40} 
              src="/my-icon.webp" 
              priority
              style={{ height: 'auto', width: 'auto', maxWidth: '120px' }} 
            />
          </div>
          <h1 className="font-headline-lg text-headline-lg uppercase tracking-widest text-primary dark:text-primary-fixed mb-2">
            Sign In
          </h1>
          <p className="font-body-md text-on-surface-variant text-sm tracking-wide">
            Access the Marble+ Administrative Dashboard
          </p>
        </div>

        {/* The client-side form handles the server action and error states */}
        <LoginForm />

      </div>
    </div>
  );
}

