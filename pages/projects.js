import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { ProjectContainer, ProjectContent } from "../styles/styles";
import Image from "next/image";
import img from "../public/assets/background.jpg";
import jogo from "../public/assets/jogodamemoria.PNG";
import spotify from "../public/assets/spotify.PNG";
import pokedex from "../public/assets/pokdex.PNG";

function Projects() {
  const Cards = [
    {
      image: jogo,
      title: "Jogo da memória",
      desc: " Html, Css, Javascript.",
      link: "https://sartarelli011.github.io/jogo-da-memoria/",
    },
    {
      image: pokedex,
      title: "Pokedex",
      desc: " React, Css, axios.",
      link: "https://sartarelli011.github.io/pokedex/",
    },
    {
      image: spotify,
      title: "spotify clone",
      desc: " Html, Css.",
      link: "https://sartarelli011.github.io/spotify-clone/",
    },
  ];
  return (
    <>
      <Header />
      <ProjectContainer>
        <Image
          src={img}
          objectPosition="center"
          layout="fill"
          objectFit="cover"
          quality={90}
          alt="image"
        />

        <ProjectContent>
          {Cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                desc={card.desc}
                link={card.link}
              />
            );
          })}
        </ProjectContent>
      </ProjectContainer>
      <Footer />
    </>
  );
}

export default Projects;
