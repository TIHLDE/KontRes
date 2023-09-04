import { ResponseData } from "@/pages/api/test";
import { Header } from "../components/Header";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props, "asdasddadasda");
  return (
    <div
      style={{
        minHeight: "150vh",
      }}
    >
      <Header />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ResponseData
> = async () => {
  let data: ResponseData = {
    coolString: "",
    message: "",
  };

  try {
    const response = await fetch("http://localhost:3000/api/test", {
      method: "GET",
    });

    data = await response.json();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
