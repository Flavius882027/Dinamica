import React from 'react';

interface EagleLogoProps {
  className?: string;
  variant?: 'mark' | 'full' | 'inline' | 'large';
  light?: boolean;
}

export const EagleIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-6 h-6",
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Símbolo Águia Dinâmica Consultoria"
    >
      <defs>
        <linearGradient id="eagleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA820A" />
        </linearGradient>
        <linearGradient id="eagleNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Stylized Precision Eagle Head & Beak Profile */}
      <path
        d="M 50 16 C 58 16, 68 20, 76 28 C 81 33, 85 41, 88 49 C 84 49, 78 48, 71 47 C 69 49, 66 52, 60 55 C 54 58, 47 59, 41 58 L 50 16 Z"
        fill="url(#eagleGoldGrad)"
      />
      {/* Dynamic Sharp Beak */}
      <path
        d="M 72 44 L 88 49 L 75 58 C 72 54, 71 48, 72 44 Z"
        fill="#FFE885"
      />
      {/* Piercing Eye of Vision */}
      <circle cx="63" cy="34" r="3.2" fill="#0A192F" />
      <circle cx="64" cy="33.5" r="1.1" fill="#FFFFFF" />

      {/* Geometric Wing Layers (Precision & Agility) */}
      {/* Primary Top Wing Plume */}
      <path
        d="M 44 26 L 16 38 C 26 35, 36 34, 46 36 L 44 26 Z"
        fill="url(#eagleGoldGrad)"
        opacity="0.95"
      />
      {/* Second Wing Sweep */}
      <path
        d="M 42 38 L 12 50 C 24 47, 36 46, 44 48 L 42 38 Z"
        fill="url(#eagleNavyGrad)"
        opacity="0.9"
      />
      {/* Third Wing Sweep */}
      <path
        d="M 40 50 L 16 64 C 26 59, 36 57, 43 59 L 40 50 Z"
        fill="url(#eagleGoldGrad)"
        opacity="0.8"
      />
      {/* Lower Wing Feathers / Foundation */}
      <path
        d="M 37 61 L 24 76 C 32 70, 40 67, 47 67 L 37 61 Z"
        fill="url(#eagleNavyGrad)"
        opacity="0.75"
      />
      {/* Dynamic Tail/Base Stabilizer */}
      <path
        d="M 46 64 L 38 88 C 45 82, 52 79, 58 78 L 46 64 Z"
        fill="url(#eagleGoldGrad)"
        opacity="0.9"
      />

      {/* Subtle Precision Compass Crosshair Dot */}
      <circle cx="50" cy="50" r="1.5" fill="#F5D061" opacity="0.6" />
    </svg>
  );
};

export const EagleLogo: React.FC<EagleLogoProps> = ({
  className = "",
  variant = "full",
  light = true,
}) => {
  if (variant === "mark") {
    return <EagleIcon className={className} size={36} />;
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative p-1.5 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/30 shadow-sm shadow-amber-500/10">
          <EagleIcon size={26} className="w-6 h-6" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-slate-100 text-sm md:text-base uppercase">
            Dinâmica
          </span>
          <span className="text-[10px] tracking-wider text-amber-400 font-semibold uppercase -mt-0.5">
            Consultoria & Certificações
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="relative p-2 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-amber-500/10 flex items-center justify-center shrink-0">
        <EagleIcon size={34} className="w-8 h-8" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 to-transparent pointer-events-none" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold text-base md:text-lg tracking-tight uppercase ${light ? 'text-white' : 'text-slate-900'}`}>
            Dinâmica
          </span>
          <span className="text-xs font-medium text-amber-400 tracking-wide">
            · São Paulo
          </span>
        </div>
        <span className="text-[11px] tracking-wider text-slate-400 font-medium uppercase">
          Consultoria, Certificações
        </span>
      </div>
    </div>
  );
};
