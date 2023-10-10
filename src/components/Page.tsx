import { Container, ContainerProps, useTheme } from "@mui/material";

const Page = ({ children, sx, ...props }: ContainerProps) => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        paddingX: {
          xl: 3,
          lg: 3,
          md: 2,
          sm: 1,
        },
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Page;
