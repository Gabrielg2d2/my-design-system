import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TTextXsProps = TProps

export function SubtitleMd(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="6" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
