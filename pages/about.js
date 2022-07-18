import Header from "../components/Header";
import Footer from "../components/Footer";
import { AboutContainer, AboutContent } from "../styles/styles";
import Image from "next/image";
import img1 from "../src/assets/work.jpg";

function About() {
  return (
    <>
      <Header />
      <AboutContainer>
        <Image
          objectPosition="center"
          layout="fill"
          objectFit="cover"
          quality={90}
          src={img1}
        ></Image>
        <AboutContent>
          <h1>About</h1>
          <p>
            Sou nascido e criado em São Paulo, minha vida toda estive em cidade
            grande, todos trabalhando, indo de um lugar a outro, não importando
            a hora do dia, A famosa cidade que nunca dorme.
            <br /> me assemelho um pouco com isso, não consigo ficar parado,
            sempre estou buscando algum conhecimento novo, seja estudando ou
            fazendo algum projeto pessoal, buscando melhorar projetos antigos,
            tudo para obter uma maior experiencia na tecnologia.
            <br /> Sou uma pessoa calma, com a cabeça no lugar e sei aonde quero
            chegar, sei fazer a gestão do meu tempo, gosto de trabalhar em
            equipe porque assim podemos solucionar o problema de forma mais
            rápida e eficiente, e claro, aprender com os colegas de equipe.
            Atualmente estou em busca da minha primeira oportunidade como
            desenvolvedor front end.
            <br /> Para saber mais sobre minhas habilidades, faça download do
            meu currículo abaixo.
          </p>
          <button>
            <a
              href="https://drive.google.com/file/d/1xZX6RPlPF9_76-uuTUhkHeDUILqSDNav/view?usp=sharing"
              download
              target="_blank"
            >
              Download
            </a>
          </button>
        </AboutContent>
      </AboutContainer>
      <Footer />
    </>
  );
}

export default About;
