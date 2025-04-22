import { Flex } from '@radix-ui/themes'
import { SubtitleSm, TextSm, TextXs } from '../../../../components'

export function CardAbout() {
	return (
		<Flex
			direction="column"
			gap="4"
			width="370px"
			p="5"
			style={{ backgroundColor: '#191D24', borderRadius: '16px' }}
		>
			<Flex direction="row" justify="between" align="center">
				<SubtitleSm
					style={{
						fontWeight: 'bold',
					}}
				>
					Sobre o evento
				</SubtitleSm>

				<TextXs
					style={{
						color: '#9871F3',
					}}
				>
					AO VIVO
				</TextXs>
			</Flex>

			<TextSm color="gray">
				Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar
				soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas
				tendências mais recentes em desenvolvimento de software, arquitetura de
				sistemas e tecnologias emergentes, com palestras, workshops e
				hackathons.
			</TextSm>

			<TextSm color="gray">
				Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
			</TextSm>
		</Flex>
	)
}
