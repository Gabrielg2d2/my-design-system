import { Flex } from '@radix-ui/themes'
import {
	ButtonIcon,
	HeaderSm,
	IconDefault,
	InputIcon,
	SubtitleLg,
	SubtitleSm,
	TextSm,
	TextXs,
} from '../../components'
import ImgTitle from './assets/devstage.svg'
import { BackgroundGrid } from './components/BackgroundGrid'

export function PageConnect(props: any) {
	return (
		<BackgroundGrid>
			<Flex direction="column" justify="center" align="center" p="8" gap="4">
				<Flex justify="center" align="center">
					<img src={ImgTitle} alt="DevStage logo" />
				</Flex>

				<Flex direction="column" justify="center" align="center" my="4">
					<HeaderSm
						style={{
							color: '#6F9DE2',
							fontWeight: 'bolder',
						}}
					>
						CodeCraft
					</HeaderSm>
					<SubtitleLg
						style={{
							fontWeight: 'bold',
						}}
					>
						Summit 2025
					</SubtitleLg>
				</Flex>

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
						Um evento feito por e para pessoas desenvolvedoras apaixonadas por
						criar soluções inovadoras e compartilhar conhecimento. Vamos
						mergulhar nas tendências mais recentes em desenvolvimento de
						software, arquitetura de sistemas e tecnologias emergentes, com
						palestras, workshops e hackathons.
					</TextSm>

					<TextSm color="gray">
						Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
					</TextSm>
				</Flex>

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
			</Flex>
		</BackgroundGrid>
	)
}
