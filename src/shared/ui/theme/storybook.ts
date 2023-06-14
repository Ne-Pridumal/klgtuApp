// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  framework: '@storybook/react',
  stories: ['../../../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
};

export default config;
