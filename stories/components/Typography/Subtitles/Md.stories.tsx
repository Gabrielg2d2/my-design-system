import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitleMd,
	type TSubtitleMdProps,
} from '../../../../src/components/Typography/Subtitles/Md'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitleMdProps> = {
	title: 'Typography/Subtitles/Md',
	component: (args: TSubtitleMdProps) => {
		return <SubtitleMd {...args}>Subtitle Md</SubtitleMd>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitleMdProps>

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
