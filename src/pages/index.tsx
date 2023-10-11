import { Header } from "../components/Header";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  return (
    <div
      style={{
        minHeight: '150vh',
      }}
    >
      <Header />
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      users: undefined,
    },
  };
};

export default Home;
