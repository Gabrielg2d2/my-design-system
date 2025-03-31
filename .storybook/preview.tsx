import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Preview } from '@storybook/react'
import type { Decorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import React, { useEffect, useState } from 'react'
import '../src/theme/light.css'
import '../src/theme/dark.css'

const withThemeDecorator: Decorator = (Story, context) => {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const storybookTheme = context.globals.theme
		setTheme(storybookTheme)
		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(storybookTheme)
	}, [context.globals.theme])

	return (
		<Theme accentColor="yellow" className={theme}>
			<Story />
		</Theme>
	)
}

const preview: Preview = {
	decorators: [withThemeDecorator],
	parameters: {
		docs: {
			theme: themes.dark,
		},
		backgrounds: {
			default: 'Dark',
			values: [
				{ name: 'Dark', value: '#111' },
				{ name: 'Light', value: '#EFECEC' },
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
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Choose between light and dark theme',
			defaultValue: 'dark',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', title: 'Light Mode' },
					{ value: 'dark', title: 'Dark Mode' },
				],
				showName: true,
			},
		},
	},
}

export default preview
