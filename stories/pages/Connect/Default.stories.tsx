import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PageConnect } from '../../../src/pages/Connect'

const meta: Meta<typeof PageConnect> = {
	title: 'Pages/Connect',
}

export default meta
type Story = StoryObj<typeof PageConnect>

export const Default: Story = {
	args: {},

	render: (args) => {
		return <PageConnect {...args} />
	},
}
