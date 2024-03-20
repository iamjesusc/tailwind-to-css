import { Entries } from "../models/types";

export const animationClasses: Entries = {
  'transition-none': 'transition-property: none;',
  'transition-all':
    'transition-property: all;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  transition:
    'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  'transition-colors':
    'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  'transition-opacity':
    'transition-property: opacity;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  'transition-shadow':
    'transition-property: box-shadow;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  'transition-transform':
    'transition-property: transform;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
  'duration-0': 'transition-duration: 0s;',
  'duration-75': 'transition-duration: 75ms;',
  'duration-100': 'transition-duration: 100ms;',
  'duration-150': 'transition-duration: 150ms;',
  'duration-200': 'transition-duration: 200ms;',
  'duration-300': 'transition-duration: 300ms;',
  'duration-500': 'transition-duration: 500ms;',
  'duration-700': 'transition-duration: 700ms;',
  'duration-1000': 'transition-duration: 1000ms;',
  'ease-linear': 'transition-timing-function: linear;',
  'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
  'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
  'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
  'delay-0': 'transition-delay: 0s;',
  'delay-75': 'transition-delay: 75ms;',
  'delay-100': 'transition-delay: 100ms;',
  'delay-150': 'transition-delay: 150ms;',
  'delay-200': 'transition-delay: 200ms;',
  'delay-300': 'transition-delay: 300ms;',
  'delay-500': 'transition-delay: 500ms;',
  'delay-700': 'transition-delay: 700ms;',
  'delay-1000': 'transition-delay: 1000ms;',
  'animate-none': 'animation: none;',
  'animate-spin':
    'animation: spin 1s linear infinite;\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}',
  'animate-ping':
    'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}',
  'animate-pulse':
    'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}',
  'animate-bounce':
    'animation: bounce 1s infinite;\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}',
}
