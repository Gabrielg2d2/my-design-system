import * as Icons from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	IconButtonRoot,
	type TIconButtonRootProps,
} from '../../../src/components/IconButton/Root'
import { getColors } from '../../functions/getColors'

const meta: Meta<TIconButtonRootProps> = {
	title: 'IconButton/Root',
	component: (args: TIconButtonRootProps) => {
		return <IconButtonRoot {...args} />
	},
}

export default meta
type Story = StoryObj<TIconButtonRootProps>

export const Default: Story = {
	argTypes: {
		name: {
			control: { type: 'select' },
			options: Object.keys(Icons),
		},
		sizeIcon: {
			control: { type: 'number' },
		},
		color: {
			control: { type: 'select' },
			options: getColors(),
		},
	},
	args: {
		name: 'BackpackIcon',
		sizeIcon: 20,
		color: 'yellow',
	},
}
