import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonIcon,
	type TButtonIconProps,
} from '../../../src/components/Buttons/ButtonIcon'

import { getNamesIcon } from '../../functions/getNameIcon'
import * as RootStories from './Root.stories'

const meta: Meta<TButtonIconProps> = {
	title: 'Buttons/ButtonIcon',
	argTypes: {
		...RootStories.Default.argTypes,
		loadingIcon: {
			control: 'boolean',
			description: 'Show loading icon',
		},
		iconLeftName: {
			control: 'select',
			options: getNamesIcon(),
			description: 'Name icon left',
			defaultValue: 'AlignBottomIcon',
		},
		iconRightName: {
			control: 'select',
			options: getNamesIcon(),
			description: 'Name icon right',
			defaultValue: 'AlignBottomIcon',
		},
	},
	args: {
		...RootStories.Default.args,
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
			<ButtonIcon iconLeftName="AccessibilityIcon" {...args}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const SpaceBetween: Story = {
	render: (args) => {
		return (
			<ButtonIcon
				width={500}
				iconLeftName="AlignBottomIcon"
				propsStyle={{
					justifyContent: 'space-between',
				}}
				{...args}
			>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon loadingIcon iconLeftName="AlignBottomIcon" {...args}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRight: Story = {
	render: (args) => {
		return (
			<ButtonIcon iconRightName="BorderDashedIcon" {...args}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconRightLoading: Story = {
	render: (args) => {
		return (
			<ButtonIcon loadingIcon iconRightName="AngleIcon" {...args}>
				Text Button
			</ButtonIcon>
		)
	},
}

export const IconLeftAndRight: Story = {
	render: (args) => {
		return (
			<ButtonIcon
				iconLeftName="ViewGridIcon"
				iconRightName="CameraIcon"
				{...args}
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
				loadingIcon
				iconLeftName="Link1Icon"
				iconRightName="ValueNoneIcon"
				{...args}
			>
				Text Button
			</ButtonIcon>
		)
	},
}
