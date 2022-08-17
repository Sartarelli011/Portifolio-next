import Header from "../components/Header";
import Footer from "../components/Footer";
import { AboutContainer, AboutContent } from "../styles/estilo";
import Image from "next/image";
import img1 from "../public/assets/work.jpg";

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
          alt="image"
        ></Image>
        <AboutContent>
          <h1>About</h1>
          <p>
            Nasci e cresci em uma cidade grande, São Paulo que sabemos o intuito
            de ser um local, bem favorável em todas as áreas econômicas, sempre
            agitada, independente do horário.
            <br /> Sou uma pessoa calma, gosto de organizar minhas tarefas
            diárias, fazendo bom uso do meu tempo. gosto de trabalhar em equipe
            porque assim podemos solucionar o problema de forma mais rápida e
            eficiente, e claro, aprender com os colegas de equipe.
            <br /> Atualmente estou em busca da minha primeira oportunidade como
            desenvolvedor front end. Para saber mais sobre minhas habilidades,
            faça download do meu currículo abaixo.
          </p>
          <button>
            <a
              href="https://drive.google.com/file/d/1fbedpWkeraCOxUo3AvyOxCsLdFls4crm/view?usp=sharing"
              download
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
