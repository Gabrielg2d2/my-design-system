import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitleLg,
	type TSubtitleLgProps,
} from '../../../../src/components/Typography/Subtitles/Lg'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitleLgProps> = {
	title: 'Typography/Subtitles/Lg',
	component: (args: TSubtitleLgProps) => {
		return <SubtitleLg {...args}>Subtitle Lg</SubtitleLg>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitleLgProps>

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
