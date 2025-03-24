import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TTextXsProps = TProps

export function SubtitlesSm(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="5" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
