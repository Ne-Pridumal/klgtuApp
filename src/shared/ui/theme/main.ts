import { THEME_GRID_STEP } from './constants';

export const lightTheme = {
  name: 'default',
  palette: {
    background: {
      primary: '#f9f9f9',
    },
    content: {
      primary: '#000000',
      secondary: '#403A47',
      tertiary: '#706D76',
      error: '#FB6176'
    },
    accent: {
      primary: '#6C78E6',
      secondary: '#F678BA',
      tertiary: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#C2C1C6',
      tertiary: '#706D76',
    },
    indicator: {
      error: '#FB6176',
      done: '#4CD563',
      success: '#6C78E6',
    },
    button: {
      primary: '#6C78E6',
      secondary: '#FFFFFF',
    },
    helpers: {
      bottomMenu: '#352F3D50',
      overlay: '#00000025',
      celndarPeriod: '#6C78E620',
    },
  },
  typography: {
    largeTitle: {
      size: '34px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    title1: {
      size: '28px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    title2: {
      size: '22px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    title3: {
      size: '20px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    body: {
      size: '17px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    callout: {
      size: '16px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    subheadline: {
      size: '15px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    footnote: {
      size: '13px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    caption1: {
      size: '12px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    caption2: {
      size: '11px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
