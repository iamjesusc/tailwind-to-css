import { Entries } from '../models/types'

export const accesibilityClass: Entries = {
  'sr-only':
    'position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nborder-width: 0;',
  'not-sr-only':
    'position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhite-space: normal;',
  'forced-color-adjust-auto': 'forced-color-adjust: auto;',
  'forced-color-adjust-none': 'forced-color-adjust: none;',
}
