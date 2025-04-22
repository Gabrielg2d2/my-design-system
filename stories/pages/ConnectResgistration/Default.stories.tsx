import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PageConnectRegistration } from '../../../src/pages/ConnectRegistration'

const meta: Meta<typeof PageConnectRegistration> = {
	title: 'Pages/Connect/Registration',
}

export default meta
type Story = StoryObj<typeof PageConnectRegistration>

export const Default: Story = {
	args: {},

	render: (args) => {
		return <PageConnectRegistration {...args} />
	},
}
