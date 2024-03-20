import { Entries } from "../models/types";

export const effectsClasses: Entries = {
  'shadow-sm': 'box-shadow: 0 1px 2px 0 var(--tw-shadow-color , rgb(0 0 0 / 0.05) );',
  shadow:
    'box-shadow: 0 1px 3px 0  var(--tw-shadow-color, rgb(0 0 0 / 0.1)),  10px 2px -1px  var(--tw-shadow-color, rgb(0 0 0 / 0.1));',
  'shadow-md':
    'box-shadow: 0 4px 6px -1px , var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px  var(--tw-shadow-color, rgb(0 0 0 / 0.1));',
  'shadow-lg':
    'box-shadow: 0 10px 15px -3px  var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color,  rgb(0 0 0 / 0.1));',
  'shadow-xl':
    'box-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px  var(--tw-shadow-color, rgb(0 0 0 / 0.1));',
  'shadow-2xl': 'box-shadow: 0 25px 50px -12px  var(--tw-shadow-color,  rgb(0 0 0 / 0.25));',
  'shadow-inner': 'box-shadow: inset 0 2px 4px  0   var(--tw-shadow-color, rgb(0 0 0 / 0.05));',
  'shadow-none': 'box-shadow: 0 0 #0000;',
  'shadow-inherit': '--tw-shadow-color: inherit;',
  'shadow-current': '--tw-shadow-color: currentColor;',
  'shadow-transparent': '--tw-shadow-color: transparent;',
  'shadow-black': '--tw-shadow-color: #000;',
  'shadow-white': '--tw-shadow-color: #fff;',
  'shadow-slate-50': '--tw-shadow-color: #f8fafc;',
  'shadow-slate-100': '--tw-shadow-color: #f1f5f9;',
  'shadow-slate-200': '--tw-shadow-color: #e2e8f0;',
  'shadow-slate-300': '--tw-shadow-color: #cbd5e1;',
  'shadow-slate-400': '--tw-shadow-color: #94a3b8;',
  'shadow-slate-500': '--tw-shadow-color: #64748b;',
  'shadow-slate-600': '--tw-shadow-color: #475569;',
  'shadow-slate-700': '--tw-shadow-color: #334155;',
  'shadow-slate-800': '--tw-shadow-color: #1e293b;',
  'shadow-slate-900': '--tw-shadow-color: #0f172a;',
  'shadow-slate-950': '--tw-shadow-color: #020617;',
  'shadow-gray-50': '--tw-shadow-color: #f9fafb;',
  'shadow-gray-100': '--tw-shadow-color: #f3f4f6;',
  'shadow-gray-200': '--tw-shadow-color: #e5e7eb;',
  'shadow-gray-300': '--tw-shadow-color: #d1d5db;',
  'shadow-gray-400': '--tw-shadow-color: #9ca3af;',
  'shadow-gray-500': '--tw-shadow-color: #6b7280;',
  'shadow-gray-600': '--tw-shadow-color: #4b5563;',
  'shadow-gray-700': '--tw-shadow-color: #374151;',
  'shadow-gray-800': '--tw-shadow-color: #1f2937;',
  'shadow-gray-900': '--tw-shadow-color: #111827;',
  'shadow-gray-950': '--tw-shadow-color: #030712;',
  'shadow-zinc-50': '--tw-shadow-color: #fafafa;',
  'shadow-zinc-100': '--tw-shadow-color: #f4f4f5;',
  'shadow-zinc-200': '--tw-shadow-color: #e4e4e7;',
  'shadow-zinc-300': '--tw-shadow-color: #d4d4d8;',
  'shadow-zinc-400': '--tw-shadow-color: #a1a1aa;',
  'shadow-zinc-500': '--tw-shadow-color: #71717a;',
  'shadow-zinc-600': '--tw-shadow-color: #52525b;',
  'shadow-zinc-700': '--tw-shadow-color: #3f3f46;',
  'shadow-zinc-800': '--tw-shadow-color: #27272a;',
  'shadow-zinc-900': '--tw-shadow-color: #18181b;',
  'shadow-zinc-950': '--tw-shadow-color: #09090b;',
  'shadow-neutral-50': '--tw-shadow-color: #fafafa;',
  'shadow-neutral-100': '--tw-shadow-color: #f5f5f5;',
  'shadow-neutral-200': '--tw-shadow-color: #e5e5e5;',
  'shadow-neutral-300': '--tw-shadow-color: #d4d4d4;',
  'shadow-neutral-400': '--tw-shadow-color: #a3a3a3;',
  'shadow-neutral-500': '--tw-shadow-color: #737373;',
  'shadow-neutral-600': '--tw-shadow-color: #525252;',
  'shadow-neutral-700': '--tw-shadow-color: #404040;',
  'shadow-neutral-800': '--tw-shadow-color: #262626;',
  'shadow-neutral-900': '--tw-shadow-color: #171717;',
  'shadow-neutral-950': '--tw-shadow-color: #0a0a0a;',
  'shadow-stone-50': '--tw-shadow-color: #fafaf9;',
  'shadow-stone-100': '--tw-shadow-color: #f5f5f4;',
  'shadow-stone-200': '--tw-shadow-color: #e7e5e4;',
  'shadow-stone-300': '--tw-shadow-color: #d6d3d1;',
  'shadow-stone-400': '--tw-shadow-color: #a8a29e;',
  'shadow-stone-500': '--tw-shadow-color: #78716c;',
  'shadow-stone-600': '--tw-shadow-color: #57534e;',
  'shadow-stone-700': '--tw-shadow-color: #44403c;',
  'shadow-stone-800': '--tw-shadow-color: #292524;',
  'shadow-stone-900': '--tw-shadow-color: #1c1917;',
  'shadow-stone-950': '--tw-shadow-color: #0c0a09;',
  'shadow-red-50': '--tw-shadow-color: #fef2f2;',
  'shadow-red-100': '--tw-shadow-color: #fee2e2;',
  'shadow-red-200': '--tw-shadow-color: #fecaca;',
  'shadow-red-300': '--tw-shadow-color: #fca5a5;',
  'shadow-red-400': '--tw-shadow-color: #f87171;',
  'shadow-red-500': '--tw-shadow-color: #ef4444;',
  'shadow-red-600': '--tw-shadow-color: #dc2626;',
  'shadow-red-700': '--tw-shadow-color: #b91c1c;',
  'shadow-red-800': '--tw-shadow-color: #991b1b;',
  'shadow-red-900': '--tw-shadow-color: #7f1d1d;',
  'shadow-red-950': '--tw-shadow-color: #450a0a;',
  'shadow-orange-50': '--tw-shadow-color: #fff7ed;',
  'shadow-orange-100': '--tw-shadow-color: #ffedd5;',
  'shadow-orange-200': '--tw-shadow-color: #fed7aa;',
  'shadow-orange-300': '--tw-shadow-color: #fdba74;',
  'shadow-orange-400': '--tw-shadow-color: #fb923c;',
  'shadow-orange-500': '--tw-shadow-color: #f97316;',
  'shadow-orange-600': '--tw-shadow-color: #ea580c;',
  'shadow-orange-700': '--tw-shadow-color: #c2410c;',
  'shadow-orange-800': '--tw-shadow-color: #9a3412;',
  'shadow-orange-900': '--tw-shadow-color: #7c2d12;',
  'shadow-orange-950': '--tw-shadow-color: #431407;',
  'shadow-amber-50': '--tw-shadow-color: #fffbeb;',
  'shadow-amber-100': '--tw-shadow-color: #fef3c7;',
  'shadow-amber-200': '--tw-shadow-color: #fde68a;',
  'shadow-amber-300': '--tw-shadow-color: #fcd34d;',
  'shadow-amber-400': '--tw-shadow-color: #fbbf24;',
  'shadow-amber-500': '--tw-shadow-color: #f59e0b;',
  'shadow-amber-600': '--tw-shadow-color: #d97706;',
  'shadow-amber-700': '--tw-shadow-color: #b45309;',
  'shadow-amber-800': '--tw-shadow-color: #92400e;',
  'shadow-amber-900': '--tw-shadow-color: #78350f;',
  'shadow-amber-950': '--tw-shadow-color: #451a03;',
  'shadow-yellow-50': '--tw-shadow-color: #fefce8;',
  'shadow-yellow-100': '--tw-shadow-color: #fef9c3;',
  'shadow-yellow-200': '--tw-shadow-color: #fef08a;',
  'shadow-yellow-300': '--tw-shadow-color: #fde047;',
  'shadow-yellow-400': '--tw-shadow-color: #facc15;',
  'shadow-yellow-500': '--tw-shadow-color: #eab308;',
  'shadow-yellow-600': '--tw-shadow-color: #ca8a04;',
  'shadow-yellow-700': '--tw-shadow-color: #a16207;',
  'shadow-yellow-800': '--tw-shadow-color: #854d0e;',
  'shadow-yellow-900': '--tw-shadow-color: #713f12;',
  'shadow-yellow-950': '--tw-shadow-color: #422006;',
  'shadow-lime-50': '--tw-shadow-color: #f7fee7;',
  'shadow-lime-100': '--tw-shadow-color: #ecfccb;',
  'shadow-lime-200': '--tw-shadow-color: #d9f99d;',
  'shadow-lime-300': '--tw-shadow-color: #bef264;',
  'shadow-lime-400': '--tw-shadow-color: #a3e635;',
  'shadow-lime-500': '--tw-shadow-color: #84cc16;',
  'shadow-lime-600': '--tw-shadow-color: #65a30d;',
  'shadow-lime-700': '--tw-shadow-color: #4d7c0f;',
  'shadow-lime-800': '--tw-shadow-color: #3f6212;',
  'shadow-lime-900': '--tw-shadow-color: #365314;',
  'shadow-lime-950': '--tw-shadow-color: #1a2e05;',
  'shadow-green-50': '--tw-shadow-color: #f0fdf4;',
  'shadow-green-100': '--tw-shadow-color: #dcfce7;',
  'shadow-green-200': '--tw-shadow-color: #bbf7d0;',
  'shadow-green-300': '--tw-shadow-color: #86efac;',
  'shadow-green-400': '--tw-shadow-color: #4ade80;',
  'shadow-green-500': '--tw-shadow-color: #22c55e;',
  'shadow-green-600': '--tw-shadow-color: #16a34a;',
  'shadow-green-700': '--tw-shadow-color: #15803d;',
  'shadow-green-800': '--tw-shadow-color: #166534;',
  'shadow-green-900': '--tw-shadow-color: #14532d;',
  'shadow-green-950': '--tw-shadow-color: #052e16;',
  'shadow-emerald-50': '--tw-shadow-color: #ecfdf5;',
  'shadow-emerald-100': '--tw-shadow-color: #d1fae5;',
  'shadow-emerald-200': '--tw-shadow-color: #a7f3d0;',
  'shadow-emerald-300': '--tw-shadow-color: #6ee7b7;',
  'shadow-emerald-400': '--tw-shadow-color: #34d399;',
  'shadow-emerald-500': '--tw-shadow-color: #10b981;',
  'shadow-emerald-600': '--tw-shadow-color: #059669;',
  'shadow-emerald-700': '--tw-shadow-color: #047857;',
  'shadow-emerald-800': '--tw-shadow-color: #065f46;',
  'shadow-emerald-900': '--tw-shadow-color: #064e3b;',
  'shadow-emerald-950': '--tw-shadow-color: #022c22;',
  'shadow-teal-50': '--tw-shadow-color: #f0fdfa;',
  'shadow-teal-100': '--tw-shadow-color: #ccfbf1;',
  'shadow-teal-200': '--tw-shadow-color: #99f6e4;',
  'shadow-teal-300': '--tw-shadow-color: #5eead4;',
  'shadow-teal-400': '--tw-shadow-color: #2dd4bf;',
  'shadow-teal-500': '--tw-shadow-color: #14b8a6;',
  'shadow-teal-600': '--tw-shadow-color: #0d9488;',
  'shadow-teal-700': '--tw-shadow-color: #0f766e;',
  'shadow-teal-800': '--tw-shadow-color: #115e59;',
  'shadow-teal-900': '--tw-shadow-color: #134e4a;',
  'shadow-teal-950': '--tw-shadow-color: #042f2e;',
  'shadow-cyan-50': '--tw-shadow-color: #ecfeff;',
  'shadow-cyan-100': '--tw-shadow-color: #cffafe;',
  'shadow-cyan-200': '--tw-shadow-color: #a5f3fc;',
  'shadow-cyan-300': '--tw-shadow-color: #67e8f9;',
  'shadow-cyan-400': '--tw-shadow-color: #22d3ee;',
  'shadow-cyan-500': '--tw-shadow-color: #06b6d4;',
  'shadow-cyan-600': '--tw-shadow-color: #0891b2;',
  'shadow-cyan-700': '--tw-shadow-color: #0e7490;',
  'shadow-cyan-800': '--tw-shadow-color: #155e75;',
  'shadow-cyan-900': '--tw-shadow-color: #164e63;',
  'shadow-cyan-950': '--tw-shadow-color: #083344;',
  'shadow-sky-50': '--tw-shadow-color: #f0f9ff;',
  'shadow-sky-100': '--tw-shadow-color: #e0f2fe;',
  'shadow-sky-200': '--tw-shadow-color: #bae6fd;',
  'shadow-sky-300': '--tw-shadow-color: #7dd3fc;',
  'shadow-sky-400': '--tw-shadow-color: #38bdf8;',
  'shadow-sky-500': '--tw-shadow-color: #0ea5e9;',
  'shadow-sky-600': '--tw-shadow-color: #0284c7;',
  'shadow-sky-700': '--tw-shadow-color: #0369a1;',
  'shadow-sky-800': '--tw-shadow-color: #075985;',
  'shadow-sky-900': '--tw-shadow-color: #0c4a6e;',
  'shadow-sky-950': '--tw-shadow-color: #082f49;',
  'shadow-blue-50': '--tw-shadow-color: #eff6ff;',
  'shadow-blue-100': '--tw-shadow-color: #dbeafe;',
  'shadow-blue-200': '--tw-shadow-color: #bfdbfe;',
  'shadow-blue-300': '--tw-shadow-color: #93c5fd;',
  'shadow-blue-400': '--tw-shadow-color: #60a5fa;',
  'shadow-blue-500': '--tw-shadow-color: #3b82f6;',
  'shadow-blue-600': '--tw-shadow-color: #2563eb;',
  'shadow-blue-700': '--tw-shadow-color: #1d4ed8;',
  'shadow-blue-800': '--tw-shadow-color: #1e40af;',
  'shadow-blue-900': '--tw-shadow-color: #1e3a8a;',
  'shadow-blue-950': '--tw-shadow-color: #172554;',
  'shadow-indigo-50': '--tw-shadow-color: #eef2ff;',
  'shadow-indigo-100': '--tw-shadow-color: #e0e7ff;',
  'shadow-indigo-200': '--tw-shadow-color: #c7d2fe;',
  'shadow-indigo-300': '--tw-shadow-color: #a5b4fc;',
  'shadow-indigo-400': '--tw-shadow-color: #818cf8;',
  'shadow-indigo-500': '--tw-shadow-color: #6366f1;',
  'shadow-indigo-600': '--tw-shadow-color: #4f46e5;',
  'shadow-indigo-700': '--tw-shadow-color: #4338ca;',
  'shadow-indigo-800': '--tw-shadow-color: #3730a3;',
  'shadow-indigo-900': '--tw-shadow-color: #312e81;',
  'shadow-indigo-950': '--tw-shadow-color: #1e1b4b;',
  'shadow-violet-50': '--tw-shadow-color: #f5f3ff;',
  'shadow-violet-100': '--tw-shadow-color: #ede9fe;',
  'shadow-violet-200': '--tw-shadow-color: #ddd6fe;',
  'shadow-violet-300': '--tw-shadow-color: #c4b5fd;',
  'shadow-violet-400': '--tw-shadow-color: #a78bfa;',
  'shadow-violet-500': '--tw-shadow-color: #8b5cf6;',
  'shadow-violet-600': '--tw-shadow-color: #7c3aed;',
  'shadow-violet-700': '--tw-shadow-color: #6d28d9;',
  'shadow-violet-800': '--tw-shadow-color: #5b21b6;',
  'shadow-violet-900': '--tw-shadow-color: #4c1d95;',
  'shadow-violet-950': '--tw-shadow-color: #2e1065;',
  'shadow-purple-50': '--tw-shadow-color: #faf5ff;',
  'shadow-purple-100': '--tw-shadow-color: #f3e8ff;',
  'shadow-purple-200': '--tw-shadow-color: #e9d5ff;',
  'shadow-purple-300': '--tw-shadow-color: #d8b4fe;',
  'shadow-purple-400': '--tw-shadow-color: #c084fc;',
  'shadow-purple-500': '--tw-shadow-color: #a855f7;',
  'shadow-purple-600': '--tw-shadow-color: #9333ea;',
  'shadow-purple-700': '--tw-shadow-color: #7e22ce;',
  'shadow-purple-800': '--tw-shadow-color: #6b21a8;',
  'shadow-purple-900': '--tw-shadow-color: #581c87;',
  'shadow-purple-950': '--tw-shadow-color: #3b0764;',
  'shadow-fuchsia-50': '--tw-shadow-color: #fdf4ff;',
  'shadow-fuchsia-100': '--tw-shadow-color: #fae8ff;',
  'shadow-fuchsia-200': '--tw-shadow-color: #f5d0fe;',
  'shadow-fuchsia-300': '--tw-shadow-color: #f0abfc;',
  'shadow-fuchsia-400': '--tw-shadow-color: #e879f9;',
  'shadow-fuchsia-500': '--tw-shadow-color: #d946ef;',
  'shadow-fuchsia-600': '--tw-shadow-color: #c026d3;',
  'shadow-fuchsia-700': '--tw-shadow-color: #a21caf;',
  'shadow-fuchsia-800': '--tw-shadow-color: #86198f;',
  'shadow-fuchsia-900': '--tw-shadow-color: #701a75;',
  'shadow-fuchsia-950': '--tw-shadow-color: #4a044e;',
  'shadow-pink-50': '--tw-shadow-color: #fdf2f8;',
  'shadow-pink-100': '--tw-shadow-color: #fce7f3;',
  'shadow-pink-200': '--tw-shadow-color: #fbcfe8;',
  'shadow-pink-300': '--tw-shadow-color: #f9a8d4;',
  'shadow-pink-400': '--tw-shadow-color: #f472b6;',
  'shadow-pink-500': '--tw-shadow-color: #ec4899;',
  'shadow-pink-600': '--tw-shadow-color: #db2777;',
  'shadow-pink-700': '--tw-shadow-color: #be185d;',
  'shadow-pink-800': '--tw-shadow-color: #9d174d;',
  'shadow-pink-900': '--tw-shadow-color: #831843;',
  'shadow-pink-950': '--tw-shadow-color: #500724;',
  'shadow-rose-50': '--tw-shadow-color: #fff1f2;',
  'shadow-rose-100': '--tw-shadow-color: #ffe4e6;',
  'shadow-rose-200': '--tw-shadow-color: #fecdd3;',
  'shadow-rose-300': '--tw-shadow-color: #fda4af;',
  'shadow-rose-400': '--tw-shadow-color: #fb7185;',
  'shadow-rose-500': '--tw-shadow-color: #f43f5e;',
  'shadow-rose-600': '--tw-shadow-color: #e11d48;',
  'shadow-rose-700': '--tw-shadow-color: #be123c;',
  'shadow-rose-800': '--tw-shadow-color: #9f1239;',
  'shadow-rose-900': '--tw-shadow-color: #881337;',
  'shadow-rose-950': '--tw-shadow-color: #4c0519;',
  'opacity-0': 'opacity: 0;',
  'opacity-5': 'opacity: 0.05;',
  'opacity-10': 'opacity: 0.1;',
  'opacity-15': 'opacity: 0.15;',
  'opacity-20': 'opacity: 0.2;',
  'opacity-25': 'opacity: 0.25;',
  'opacity-30': 'opacity: 0.3;',
  'opacity-35': 'opacity: 0.35;',
  'opacity-40': 'opacity: 0.4;',
  'opacity-45': 'opacity: 0.45;',
  'opacity-50': 'opacity: 0.5;',
  'opacity-55': 'opacity: 0.55;',
  'opacity-60': 'opacity: 0.6;',
  'opacity-65': 'opacity: 0.65;',
  'opacity-70': 'opacity: 0.7;',
  'opacity-75': 'opacity: 0.75;',
  'opacity-80': 'opacity: 0.8;',
  'opacity-85': 'opacity: 0.85;',
  'opacity-90': 'opacity: 0.9;',
  'opacity-95': 'opacity: 0.95;',
  'opacity-100': 'opacity: 1;',
  'mix-blend-normal': 'mix-blend-mode: normal;',
  'mix-blend-multiply': 'mix-blend-mode: multiply;',
  'mix-blend-screen': 'mix-blend-mode: screen;',
  'mix-blend-overlay': 'mix-blend-mode: overlay;',
  'mix-blend-darken': 'mix-blend-mode: darken;',
  'mix-blend-lighten': 'mix-blend-mode: lighten;',
  'mix-blend-color-dodge': 'mix-blend-mode: color-dodge;',
  'mix-blend-color-burn': 'mix-blend-mode: color-burn;',
  'mix-blend-hard-light': 'mix-blend-mode: hard-light;',
  'mix-blend-soft-light': 'mix-blend-mode: soft-light;',
  'mix-blend-difference': 'mix-blend-mode: difference;',
  'mix-blend-exclusion': 'mix-blend-mode: exclusion;',
  'mix-blend-hue': 'mix-blend-mode: hue;',
  'mix-blend-saturation': 'mix-blend-mode: saturation;',
  'mix-blend-color': 'mix-blend-mode: color;',
  'mix-blend-luminosity': 'mix-blend-mode: luminosity;',
  'mix-blend-plus-lighter': 'mix-blend-mode: plus-lighter;',
  'bg-blend-normal': 'background-blend-mode: normal;',
  'bg-blend-multiply': 'background-blend-mode: multiply;',
  'bg-blend-screen': 'background-blend-mode: screen;',
  'bg-blend-overlay': 'background-blend-mode: overlay;',
  'bg-blend-darken': 'background-blend-mode: darken;',
  'bg-blend-lighten': 'background-blend-mode: lighten;',
  'bg-blend-color-dodge': 'background-blend-mode: color-dodge;',
  'bg-blend-color-burn': 'background-blend-mode: color-burn;',
  'bg-blend-hard-light': 'background-blend-mode: hard-light;',
  'bg-blend-soft-light': 'background-blend-mode: soft-light;',
  'bg-blend-difference': 'background-blend-mode: difference;',
  'bg-blend-exclusion': 'background-blend-mode: exclusion;',
  'bg-blend-hue': 'background-blend-mode: hue;',
  'bg-blend-saturation': 'background-blend-mode: saturation;',
  'bg-blend-color': 'background-blend-mode: color;',
  'bg-blend-luminosity': 'background-blend-mode: luminosity;',
}
