import { useState, useEffect } from 'react';
import Logo from '../components/images/aud.png'

export default function RuditLoadingScreen({ onComplete }) { // ADD onComplete prop here
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const words = [
    'Complete', 'Digital', 'Education', 'Platform', 'for', 'Modern', 'Schools'
  ];
  
  const fullText = words.join(' ');

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          setFadeOut(true);
          onComplete(); // CALL onComplete here
        }, 800);
      }, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, fullText, onComplete]); // ADD onComplete to dependencies

  if (fadeOut) {
    return null;
  }

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center transition-opacity duration-1000 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center space-y-8 px-4">
        {/* Logo with pulse animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl">
             <img src={Logo} alt="Rudit Logo" className='h-3/4 w-auto'></img>
            </div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse">
          Rudit
        </h1>

        {/* Animated Text */}
        <div className="h-24 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-light text-slate-300 min-h-[2em]">
            {displayText}
            <span className="inline-block w-1 h-8 bg-cyan-400 ml-1 animate-pulse"></span>
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 pt-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm mt-8 animate-pulse">
          Empowering Education, One School at a Time
        </p>
      </div>
    </div>
  );
}
