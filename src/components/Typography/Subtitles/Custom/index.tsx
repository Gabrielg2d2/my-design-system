import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitleCustomProps = TProps

export function SubtitleCustom(props: TProps) {
	return <SubtitleRoot {...props}>{props.children}</SubtitleRoot>
}
