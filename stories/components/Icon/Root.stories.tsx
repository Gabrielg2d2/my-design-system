import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	IconRoot,
	type TIconRootProps,
} from '../../../src/components/Icon/Root'
import { getColors } from '../../functions/getColors'
import { getNamesIcon } from '../../functions/getNameIcon'

const meta: Meta<TIconRootProps> = {
	title: 'Icon/Root',
	component: (args: TIconRootProps) => {
		return <IconRoot {...args} />
	},
}

export default meta
type Story = StoryObj<TIconRootProps>

export const Default: Story = {
	argTypes: {
		name: {
			control: { type: 'select' },
			options: getNamesIcon(),
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
