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
        <h3>Introduction</h3>
        <p>I am Rency Dayne Duque. I am from Jose Abad Santos Guagua.Pampanga. I enjoy lots of things such as  playing badminton or playing the guitar. I enjoy playing rock, indie or even classical music sometimes. One of my favorite foods is chicken adobo along with rice. I also love watching different films or videos online that can keep me entertained. 
          <hr></hr>

          <h3 align="center">1.  Why did you take up IT?</h3>
          <p>I took up IT because I was interested in the industry and I was interested in IT because of the influence of my uncle and the modernization of the world. I thought that this would be something that could help my life and also the life of others. I wanted to become an IT professional so that I can develop different programs and systems that could benefit us users. </p>
          <br></br>

          <h3 align="center">2.  What career do you see yourself exploring after graduation?</h3>   
          <hr></hr>

          <p>As of right now I will be honest I don't know what I will be when i graduate. I am currently still exploring my options, but becoming a frontend developer is not a bad idea if I think about it but I am also interested in being a flexible developer of sorts. Generally I just want to help produce different programs or systems that would make the life of others including myself easier which in time hopefully comes true.</p>  
          <br></br>
          <hr></hr>

          <h3 align="center">3.  What do you expect to learn in this subject?</h3>

          <p>I expect to learn how to integrate and design programs. Especially the fundamentals of system integration and architecture and comes along with the corresponding and matching design to make the systems more appealing and easy to use. I also expect to experience new languages and different tools to accomplish different tasks.</p>
          <br></br>
          <hr></hr>
          <h3 align="center">4.  What topics do you want to be discussed in this subject?</h3>

          <p>I would like to learn more about the fundamentals and different concepts that would help me become a better programmer that would accomplish tasks that are assigned to me.  </p><br></br>

          <hr></hr>

         <br></br> (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}