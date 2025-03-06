import { Box, IconButton } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputIcon,
	type TInputIconProps,
} from '../../../src/components/Inputs/InputIcon'

import { DotsHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
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

export const Default: Story = {}

export const IconLeft: Story = {
	args: {
		iconLeft: <MagnifyingGlassIcon height="14" width="14" />,
	},
}

export const IconRight: Story = {
	args: {
		iconRight: <MagnifyingGlassIcon height="14" width="14" />,
	},
}

export const IconButtonLeft: Story = {
	args: {
		iconLeft: (
			<IconButton size="1" variant="ghost">
				<MagnifyingGlassIcon height="14" width="14" />
			</IconButton>
		),
	},
}

export const IconButtonRight: Story = {
	args: {
		iconRight: (
			<IconButton size="1" variant="ghost">
				<MagnifyingGlassIcon height="14" width="14" />
			</IconButton>
		),
	},
}
