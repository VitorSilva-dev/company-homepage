import { SeparatorLine, TextTitle } from "./styles";

interface TitleProps {
  text?: string;
}

export function Title(props: TitleProps) {
  return (
    <>
      <TextTitle>{props.text}</TextTitle>
      <SeparatorLine />
    </>
  )
}
