import { BackgroundGrid } from './components/BackgroundGrid'
import { CardAbout } from './components/CardAbout'
import { CardRegistration } from './components/CardRegistration'
import { Container } from './components/Container'
import { TitleAndSubtitle } from './components/TitleAndSuubtitle'

export function PageConnectRegistration(props: any) {
	return (
		<BackgroundGrid>
			<Container>
				<TitleAndSubtitle />

				<CardAbout />

				<CardRegistration />
			</Container>
		</BackgroundGrid>
	)
}
