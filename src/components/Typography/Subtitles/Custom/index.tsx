import { SubtitlesRoot, type TSubtitlesRootProps } from '../Root'

type TProps = TSubtitlesRootProps

export type TTextCustomProps = TProps

export function SubtitlesCustom(props: TProps) {
	return <SubtitlesRoot {...props}>{props.children}</SubtitlesRoot>
}
