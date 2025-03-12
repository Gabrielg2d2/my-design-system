import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonIcon,
	type TButtonIconProps,
} from '../../../src/components/Buttons/ButtonIcon'

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

export const Disabled: Story = {
	args: {
		disabled: true,
	},

	render: (args) => {
		return (
			<ButtonIcon iconLeftName="AccessibilityIcon" {...args}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeft: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} iconLeftName="AccessibilityIcon">
				Text Button
			</ButtonIcon>
		)
	},
}

export const SpaceBetween: Story = {
	render: (args) => {
		return (
			<ButtonIcon
				{...args}
				width={500}
				iconLeftName="AlignBottomIcon"
				propsStyle={{
					justifyContent: 'space-between',
				}}
			>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} loadingIcon iconLeftName="AlignBottomIcon">
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRight: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} iconRightName="BorderDashedIcon">
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRightLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon {...args} loadingIcon iconRightName="AngleIcon">
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
				iconLeftName="ViewGridIcon"
				iconRightName="CameraIcon"
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
				iconLeftName="Link1Icon"
				iconRightName="ValueNoneIcon"
			>
				Text Button
			</ButtonIcon>
		)
	},
}
