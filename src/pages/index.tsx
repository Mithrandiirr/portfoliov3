import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { getHomeData, getProjects } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({homepage} : any) {
  console.log(homepage)
  const myPortableTextComponents = {
  types: {
    'home': ({value}: any) => <Container value={value} />
  },

  marks: {
  
  },
}
  return (
    <Layout>
      <Head>
        <title>EL Yaakoubi Mohammed - JAMstack & Frontend expert.</title>
      </Head>
      <PortableText components={myPortableTextComponents} value={homepage} />
    </Layout>
  )
}
export async function getStaticProps() {
  const homepage = await getHomeData()
  const projects = await getProjects()
  return {
    props: {
      homepage, projects
    }
  }
}