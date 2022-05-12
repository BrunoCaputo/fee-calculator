import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../providers/auth.provider";

const Home: NextPage = () => {
  const router = useRouter();
  const { authUser, loading } = useAuth();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/login");
    }
  }, [authUser, loading, router]);

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

export default Home;

const Container = styled.div`
  padding: 0 2rem;
`;
