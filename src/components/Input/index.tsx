import { TextField } from '@radix-ui/themes'

export type TInputProps = TextField.RootProps

export function Input(props: TInputProps) {
	return <TextField.Root radius="large" size="3" {...props} />
}
