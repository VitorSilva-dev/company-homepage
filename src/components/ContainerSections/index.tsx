import { Container } from "./styles";

interface ContainerSectionsProps {
  idcontainer?: string;
  backgroundcolor?: string;
  children?: React.ReactNode;
}

export function ContainerSections({
  idcontainer,
  backgroundcolor,
  children,
}: ContainerSectionsProps) {
  return (
    <Container $backgroundcolor={backgroundcolor ?? "#fff"} id={idcontainer}>
      {children}
    </Container>
  );
}
