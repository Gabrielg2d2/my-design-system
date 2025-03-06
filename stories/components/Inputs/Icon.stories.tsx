import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputIcon,
	type TInputIconProps,
} from '../../../src/components/Inputs/InputIcon'

import * as RootStories from './Root.stories'

const meta: Meta<TInputIconProps> = {
	title: 'Inputs/Icon',
	component: (args: TInputIconProps) => {
		return (
			<Box maxWidth="800px">
				<InputIcon {...args} />
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
type Story = StoryObj<TInputIconProps>

export const Primary: Story = {}
