import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitleSmProps = TProps

export function SubtitleSm(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="5" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
