import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { getHomeData, getProjects } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import { Homepage } from "@/lib/sanity.types";

const inter = Inter({ subsets: ["latin"] });
const myPortableTextComponents = {
  types: {
    home: ({ value }: any) => <Container value={value} />,
  },

  marks: {},
};
export default function Home({ homepage }: { homepage: any }) {
  return (
    <Layout>
      <Head>
        <title>EL Yaakoubi Mohammed - JAMstack & Frontend expert.</title>
        <meta
          name="description"
          content="El Yaakoubi Mohammed based in Morocco, I build blazingly fast, craft sophiscated and visually captivating web applications."
        />
        <meta property="og:image" content={"./img.png"} />
      </Head>
      <PortableText components={myPortableTextComponents} value={homepage} />
    </Layout>
  );
}
export async function getStaticProps() {
  const homepage = await getHomeData();
  const projects = await getProjects();
  return {
    props: {
      homepage,
      projects,
    },
  };
}
