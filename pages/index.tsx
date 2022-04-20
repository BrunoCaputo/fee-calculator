import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Fee Calculator</title>
        <meta
          name="description"
          content="Calculate your fees, taxes and bills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
`;

export default Home;
