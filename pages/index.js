import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello I am Rency. I am a Student in BSIT]</p>
        <p>I am Rency Dayne M. Duque. I am from Jose Abad Santos Guagua.Pampanga. I enjoy lots of things such as  playing badminton or playing the guitar. I enjoy playing rock, indie or even classical music sometimes. One of my favorite foods is chicken adobo along with rice. I also love watching different films or videos online that can keep me entertained. 
         <br></br> (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}