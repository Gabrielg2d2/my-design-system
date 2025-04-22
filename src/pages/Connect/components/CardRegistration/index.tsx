import { Flex } from '@radix-ui/themes'
import {
	ButtonIcon,
	IconDefault,
	InputIcon,
	SubtitleSm,
} from '../../../../components'

export function CardRegistration() {
	return (
		<Flex
			direction="column"
			gap="4"
			width="370px"
			p="5"
			style={{ backgroundColor: '#191D24', borderRadius: '16px' }}
		>
			<SubtitleSm
				style={{
					fontWeight: 'bold',
				}}
			>
				Inscrição
			</SubtitleSm>

			<InputIcon
				iconLeft={<IconDefault name="EnvelopeClosedIcon" />}
				placeholder="E-mail"
			/>
			<InputIcon
				iconLeft={<IconDefault name="PaperPlaneIcon" />}
				placeholder="Telefone"
			/>

			<ButtonIcon
				mt="2"
				color="gray"
				style={{
					justifyContent: 'space-between',
					color: '#6F9DE2',
				}}
				iconRightName="ArrowRightIcon"
				variant="soft"
			>
				Confirmar
			</ButtonIcon>
		</Flex>
	)
}
