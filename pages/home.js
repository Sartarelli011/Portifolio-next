import { HomeContainer, HomeContent } from "../styles/estilo";
import img from "../public/assets/work3.jpg";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Image
          objectPosition="center"
          layout="fill"
          objectFit="cover"
          quality={90}
          src={img}
          alt="image"
        ></Image>
        <HomeContent>
          <h1>
            Desenvolvedor
            <br />
            Front End.
          </h1>
          <p>
            Olá meu nome é Gabriel,
            <br /> E este é meu portifólio.
          </p>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
