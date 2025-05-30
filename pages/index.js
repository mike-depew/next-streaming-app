import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation.js";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "../components/VideoCard.js";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FART.XXX</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          // crossorigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="bg-black w-full min-h-screen pt-28 md:pt-24">
        <div className="px-3 md:px-0 md:container md:mx-auto text-gray-50">
          <div className="py-4">
          <h2 className="text-center text-3xl">The Home of Hot Girls Getting Nasty</h2>
          <h2 className="text-center text-2xl">Watch These Girls Do The UNTHINKABLE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 lg:gap-4">
            <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Natasha Jones"
              link="/video0001"
            />
            <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Shiela Star"
              link="/video0002"
            />
            <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Wendy Smith"
              link="/video0003"
            />
            <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Maria Lopez"
              link="/video0004"
            />
                        <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Tracy Wild"
              link="/video0005"
            />
                        <VideoCard
              image="https://i.ytimg.com/vi/Zv11L-ZfrSg/maxresdefault.jpg"
              title="Kiki Styles"
              link="/video0006"
            />
          </div>
        </div>
      </main>

     <Footer />
    </div>
  );
}

{
  /* <main className={styles.main}> */
}
{
  /* <Container>
          <Col>
            <Row>
              <Col lg={6}>
                <VideoCard
                  image="https://i.ytimg.com/vi/Tgor8hf--TM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDopXBsysOtG5H65v8awOXxivGgHwQ"
                  title="Video 1"
                  link="/page-2"
                />
              </Col>
              <Col lg={6}>
                <VideoCard
                  image="https://i.ytimg.com/vi/ANc1KXVHQhI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6aVK2b3LM91PCkrr0jlyVOuzGTQ"
                  title="Video 2"
                  link="/page-2"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={6}>
                <VideoCard
                  image="https://i.ytimg.com/vi/wCWzXYQmvyU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbLeA4vLGd-lUtWWN5H8vNtWJ63g"
                  title="Video 3"
                  link="/page-3"
                />
              </Col>
              <Col lg={6}>
                <VideoCard
                  image="https://i.ytimg.com/vi/sq6j0M3ATXk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbNVyzSuqI6t1Km31QS21t1JP64w"
                  title="Video 4"
                  link="/page-4"
                />
              </Col>
            </Row>
          </Col>
        </Container>
      </main>

      <footer className={styles.footer}>

      </footer> */
}
