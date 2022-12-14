import Image from "next/image";
import { CardContainer, CardContent, ImageContainer } from "../styles/estilo";

function Card({ image, title, desc, link }) {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image
            objectPosition="center"
            layout="fill"
            objectFit="contain"
            quality={90}
            src={image}
            alt="image"
          ></Image>
        </ImageContainer>

        <CardContent>
          <h1>{title}</h1>
          <p>
            <strong>Tecnologias:</strong>
            {desc}
          </p>
          <a href={link}>View</a>
        </CardContent>
      </CardContainer>
    </>
  );
}

export default Card;
