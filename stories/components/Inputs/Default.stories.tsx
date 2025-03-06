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
}

export default meta
type Story = StoryObj<TInputDefaultProps>

export const Primary: Story = {
	args: {
		...RootStories.Default.args,
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
}

export const PrimarySoft: Story = {
	args: {
		...Primary.args,
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
