import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputRoot,
	type TInputRootProps,
} from '../../../src/components/Inputs/Root'

const meta: Meta<TInputRootProps> = {
	title: 'Inputs/Root',
	component: (args: TInputRootProps) => {
		return <InputRoot {...args} />
	},
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		defaultValue: { control: 'text' },
		variant: {
			control: { type: 'radio' },
			options: [
				'soft',
				'classic',
				'surface',
			] satisfies TInputRootProps['variant'][],
		},
		color: {
			control: 'select',
			options: [
				'red',
				'blue',
				'green',
				'yellow',
				'purple',
				'gray',
				'pink',
			] as TInputRootProps['color'][],
		},
	},
	args: {
		placeholder: 'Placeholder here...',
		variant: 'surface',
	},
}

export default meta
type Story = StoryObj<TInputRootProps>

export const Default: Story = {}
