import { Container, ContainerProps, useTheme } from "@mui/material";
import { Header } from "./Header";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/apis/reservations/reservations";

const Page = ({ children, sx, ...props }: ContainerProps) => {
  const theme = useTheme();

  return (
    <>
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
    </>
  );
};

export default Page;
