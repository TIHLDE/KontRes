import { getItems } from "@/apis/reservations/reservations";
import { Header } from "./Header";
import { useQuery } from "@tanstack/react-query";

/**
 * This is a component that wraps the entire content of the page. It adds default components
 * such as the header, and places the rest of the content accordingly.
 */
const SiteWrapper = ({ children }: { children: any }) => {
  const { data } = useQuery({
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
      {children}
    </>
  );
};

export default SiteWrapper;
