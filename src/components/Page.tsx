import { Container, ContainerProps, useTheme } from "@mui/material";
import { Header } from "./Header";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/apis/reservations/reservations";

const Page = ({ children, sx, ...props }: ContainerProps) => {
  const theme = useTheme();

  const { data, isFetching } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems().then((res) => res.data),
  });
  return (
    <>
      <Header
        items={data?.map((e) => {
          return {
            displayName: e.name,
            onClick: () => console.log("ok"),
          };
        })}
      />
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
