import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';
import { colord } from 'colord';

type Palette = {
  body: string;
  bodySecondary: string;
  border: string;
  background: string;
  paper: string;
} & {
    [x in MainColor]: {
      DEFAULT: string,
      contrast: string,
      focus?: string,
    }
  };

const palette: Palette = {
  body: '#383838',
  bodySecondary: '#525252',
  border: '#dcdcdc',
  background: '#F5F5F5',
  paper: '#FFFFFF',
  primary: {
    DEFAULT: '#4E46B4',
    contrast: '#FFFFFF',
  },
  secondary: {
    DEFAULT: '#40A69F',
    contrast: '#FFFFFF',
  },
};

const paletteDark: Palette = {
  ...palette,
  body: '#d1d1d1',
  bodySecondary: '#a9a9a9',
  border: '#464646',
  background: '#1C1A17',
  paper: '#272421',
  primary: {
    DEFAULT: '#0B6BCB',
    contrast: '#FFFFFF',
  },
};

export const baseColors = [
  'body', 'bodySecondary',
  'background', 'paper', 'border',
] as const;
export const mainColors = [
  'primary', 'secondary',
] as const;

export type MainColor = (typeof mainColors)[number];

const getHslVar = (c: string) => {
  const { h, s, l } = colord(c).toHsl();
  return `${h} ${s}% ${l}%`;
};

const generateVariablesObject = (colors: typeof palette) => {
  const rootObject: CSSRuleObject = {};
  baseColors.forEach(c => {
    rootObject[`--cm-${c}`] = getHslVar(colors[c]);
  });
  [...mainColors].forEach(c => {
    rootObject[`--cm-${c}`] = getHslVar(colors[c].DEFAULT);
    rootObject[`--cm-${c}-focus`] = getHslVar(
      colors[c].focus ?? colord(colors[c].DEFAULT).darken(0.08).toHex()
    );
    rootObject[`--cm-${c}-contrast`] = getHslVar(colors[c].contrast ?? '#FFFFFF');
  });
  return rootObject;
};

const generateColorsObject = () => {
  const colorsObject: Record<string, string> = {};
  baseColors.forEach(c => {
    colorsObject[c] = `hsl(var(--cm-${c}) / <alpha-value>)`;
  });
  [...mainColors].forEach(c => {
    colorsObject[`${c}`] = `hsl(var(--cm-${c}) / <alpha-value>)`;
    colorsObject[`${c}-contrast`] = `hsl(var(--cm-${c}-contrast) / <alpha-value>)`;
    colorsObject[`${c}-focus`] = `hsl(var(--cm-${c}-focus) / <alpha-value>)`;
  });
  return colorsObject;
};

export default plugin(({ addBase }) => {
  addBase({
    ':root, [data-theme=light]': generateVariablesObject(palette),
    '[data-theme=dark]': generateVariablesObject(paletteDark),
  });
}, {
  theme: {
    extend: {
      colors: {
        ...generateColorsObject()
      },
    }
  }
});
