import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextCustomProps,
	TextCustom,
} from '../../../../src/components/Typography/Text/Custom'
import * as RootStories from './Root.stories'

const meta: Meta<TTextCustomProps> = {
	title: 'Typography/Text/Custom',
	component: (args: TTextCustomProps) => {
		return <TextCustom {...args}>Text Custom</TextCustom>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextCustomProps>

export const Default: Story = {}

export const Size: Story = {
	args: {
		size: '5',
	},
}

export const Color: Story = {
	args: {
		color: 'lime',
	},
}

export const HighContrast: Story = {
	args: {
		highContrast: true,
	},
}
