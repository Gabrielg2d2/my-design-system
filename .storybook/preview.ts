import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../global.css'

const preview: Preview = {
	parameters: {
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
