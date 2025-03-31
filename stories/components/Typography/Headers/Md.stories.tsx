import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	HeaderMd,
	type THeaderMdProps,
} from '../../../../src/components/Typography/Headers/Md'
import * as RootStories from './Root.stories'

const meta: Meta<THeaderMdProps> = {
	title: 'Typography/Headers/Md',
	component: (args: THeaderMdProps) => {
		return <HeaderMd {...args}>Text Md</HeaderMd>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<THeaderMdProps>

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
