import { Container, ContainerProps, useTheme } from '@mui/material';

/**
 * Component used to wrap each new page. If someone (a developer) wants to create a
 * new subpage within the website, the page must be wrapped within this component.
 * It provides adequate padding for the content.
 */
const Page = ({ children, sx, ...props }: ContainerProps) => {
  return (
    <Container
      sx={{
        paddingX: {
          xl: 3,
          lg: 3,
          md: 2,
          sm: 1,
        },
        paddingTop: 10,
        ...sx,
      }}
      {...props}>
      {children}
    </Container>
  );
};

export default Page;
