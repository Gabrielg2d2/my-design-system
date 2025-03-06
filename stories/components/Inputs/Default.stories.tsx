import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputDefault,
	type TInputDefaultProps,
} from '../../../src/components/Inputs/Default'

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
		value: { control: 'text' },
		placeholder: { control: 'text' },
		defaultValue: { control: 'text' },
		variant: {
			control: 'select',
			options: [
				'soft',
				'classic',
				'surface',
			] satisfies TInputDefaultProps['variant'][],
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
			] as TInputDefaultProps['color'][],
		},
	},
	args: {
		placeholder: 'Placeholder here...',
		variant: 'surface',
	},
}

export default meta
type Story = StoryObj<TInputDefaultProps>

export const Primary: Story = {}

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
