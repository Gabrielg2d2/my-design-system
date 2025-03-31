import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextLgProps,
	TextLg,
} from '../../../../src/components/Typography/Text/Lg'

import * as RootStories from './Root.stories'

const meta: Meta<TTextLgProps> = {
	title: 'Typography/Text/Lg',
	component: (args: TTextLgProps) => {
		return <TextLg {...args}>Text Default</TextLg>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextLgProps>

export const Default: Story = {}

export const Color: Story = {
	args: {
		color: 'red',
	},
}
