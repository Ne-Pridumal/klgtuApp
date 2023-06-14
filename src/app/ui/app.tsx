import { AppThemeProvider } from '@app/theme-provider';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, html,
  body {
    box-sizing: border-box;
    margin: 0;
  }
`
export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
    </AppThemeProvider>
  );
};
