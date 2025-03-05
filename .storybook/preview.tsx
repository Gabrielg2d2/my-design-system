import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';

const withThemeProvider = (story) => (
  <Theme>
      {story()}
  </Theme>
);

const preview: Preview = {
	parameters: {
		decorators: [withThemeProvider],
		docs: {
			theme: themes.dark,
		},
		backgrounds: {
			default: 'Dark',
			values: [
				{ name: 'Dark', value: '#333' },
				{ name: 'Light', value: '#F7F9F2' },
				{ name: 'Green', value: '#228B22' },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
