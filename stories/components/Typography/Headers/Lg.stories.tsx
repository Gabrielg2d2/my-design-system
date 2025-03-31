import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	HeaderLg,
	type THeaderLgProps,
} from '../../../../src/components/Typography/Headers/Lg'
import * as RootStories from './Root.stories'

const meta: Meta<THeaderLgProps> = {
	title: 'Typography/Headers/Lg',
	component: (args: THeaderLgProps) => {
		return <HeaderLg {...args}>Text Lg</HeaderLg>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<THeaderLgProps>

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
