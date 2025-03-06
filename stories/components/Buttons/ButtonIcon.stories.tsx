import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonIcon,
	type TButtonIconProps,
} from '../../../src/components/Buttons/ButtonIcon'

import { BookmarkIcon } from '@radix-ui/react-icons'
import * as RootStories from './Root.stories'

const meta: Meta<TButtonIconProps> = {
	title: 'Buttons/ButtonIcon',
	argTypes: {
		...RootStories.Default.argTypes,
		loadingIcon: {
			control: 'boolean',
			description: 'Show loading icon',
			defaultValue: false,
		},
	},
	args: {
		...RootStories.Default.args,
		loadingIcon: false,
	},
}

export default meta
type Story = StoryObj<TButtonIconProps>

export const Default: Story = {
	render: (args) => {
		return <ButtonIcon {...args}>Text Button</ButtonIcon>
	},
}

export const IconLeft: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} iconLeft={<BookmarkIcon />}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} loadingIcon iconLeft={<BookmarkIcon />}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRight: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} iconRight={<BookmarkIcon />}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRightLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} loadingIcon iconRight={<BookmarkIcon />}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftAndRight: Story = {
	render: (args) => {
		return (
			<ButtonIcon
				{...args}
				iconLeft={<BookmarkIcon />}
				iconRight={<BookmarkIcon />}
			>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftAndRightLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon
				{...args}
				loadingIcon
				iconLeft={<BookmarkIcon />}
				iconRight={<BookmarkIcon />}
			>
				Text Button
			</ButtonIcon>
		)
	},
}
