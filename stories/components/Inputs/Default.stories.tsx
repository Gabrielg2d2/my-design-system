import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputDefault,
	type TInputDefaultProps,
} from '../../../src/components/Inputs/Default'

import * as RootStories from './Root.stories'

const meta: Meta<TInputDefaultProps> = {
	title: 'Inputs/Default',
	component: (args: TInputDefaultProps) => {
		return (
			<Box maxWidth="800px">
				<InputDefault {...args} />
			</Box>
		)
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TInputDefaultProps>

export const Primary: Story = {}

export const PrimarySoft: Story = {
	args: {
		variant: 'soft',
	},
}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const RedSoft: Story = {
	args: {
		...Red.args,
		variant: 'soft',
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}

export const DefaultValue: Story = {
	args: {
		defaultValue: 'Default value here',
	},
}

export const AutoFocus: Story = {
	args: {
		autoFocus: true,
	},
}
