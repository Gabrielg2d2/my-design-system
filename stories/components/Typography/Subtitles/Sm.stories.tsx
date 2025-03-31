import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitleSm,
	type TSubtitleSmProps,
} from '../../../../src/components/Typography/Subtitles/Sm'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitleSmProps> = {
	title: 'Typography/Subtitles/Sm',
	component: (args: TSubtitleSmProps) => {
		return <SubtitleSm {...args}>Subtitle Sm</SubtitleSm>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitleSmProps>

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
