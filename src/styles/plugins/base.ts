import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const fontSizes = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  md: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
} as const;

const generateFontSizeVariables = (obj: typeof fontSizes) => {
  const fontSizeRuleObject: CSSRuleObject = {};
  Object.entries(fontSizes).forEach(([key, [value, { lineHeight }]]) => {
    fontSizeRuleObject[`--cm-fontSize-${key}`] = value;
    fontSizeRuleObject[`--cm-lineHeight-${key}`] = lineHeight;
  });
  return fontSizeRuleObject;
};

const generateFontSizeObject = (obj: typeof fontSizes) => {
  const fontSizeObject: any = {};
  Object.entries(fontSizes).forEach(([key]) => {
    fontSizeObject[key] = [
      `var(--cm-fontSize-${key})`,
      { lineHeight: `var(--cm-lineHeight-${key})` }];
  });
  return fontSizeObject;
};

export default plugin(({ addBase }) => {
  addBase([{
    ':root': {
      ...generateFontSizeVariables(fontSizes),
      '--cm-radius-xs': '0.25rem',
      '--cm-radius-sm': '0.375rem',
      '--cm-radius-md': '0.5rem',
      '--cm-radius-lg': '1rem',
      '--cm-radius-xl': '1.5rem',
      '--cm-transition-property': 'color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter'
    },
  }]);
}, {
  theme: {
    fontSize: generateFontSizeObject(fontSizes),
    borderRadius: {
      none: '0px',
      DEFAULT: 'var(--cm-radius-md)',
      full: '9999px',
      xs: 'var(--cm-radius-xs)',
      sm: 'var(--cm-radius-sm)',
      md: 'var(--cm-radius-md)',
      lg: 'var(--cm-radius-lg)',
      xl: 'var(--cm-radius-xl)',
    },
  }
});