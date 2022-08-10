import styled, { keyframes } from "styled-components";

/* Entry */
const colors = keyframes`0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const EntryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, #2d2424, #5c3d2e, #b85c38, #e0c097);
  background-size: 300% 300%;
  animation: ${colors} 5s ease infinite;
`;

export const EntryBtn = styled.button`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 5rem;
  color: #fff;
  background: transparent;
  border: 3px solid #fff;
  padding: 3rem 4rem;
  cursor: pointer;

  a {
    color: #fff;
  }
  /*320px — 480px: dispositivos móveis
481px — 768px: iPads, tablets */
  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 481px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 1.6rem;
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: 390px) {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
  }
`;
/* End Entry */

/* Header */

export const HeaderContainer = styled.header`
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: #30475e 1px solid;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: ${(props) => (props.show ? "100vh" : "10vh")};

  h1 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-left: 1rem;
    color: #fff;
    display: ${(props) => (props.show ? "none" : "flex")};
  }
  svg {
    display: none;
    cursor: pointer;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
  }
  @media screen and (max-width: 900px) {
    svg {
      display: flex;
    }
  }
  @media screen and (max-width: 414px) {
    padding: 0;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 390px) {
    padding: 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const MenuHeader = styled.nav`
  display: flex;
  padding: 20px;

  ul {
    display: flex;
    list-style: none;
    font-size: 22px;
    font-weight: 400;
    gap: 30px;
    margin-right: 50px;
  }

  a {
    &:hover {
      border-bottom: 2px solid #08b9e2;
    }
    &.active {
      border-bottom: 2px solid #08b9e2;
      color: #fff;
    }
    &.inactive {
      color: grey;
    }
  }
  @media screen and (max-width: 900px) {
    ul {
      display: none;
    }
  }
`;

export const MenuResponsiveContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  ul {
    font-size: 3rem;
  }
  li {
    margin-top: 1.5rem;
  }
  a {
    &:hover {
      border-bottom: 2px solid #08b9e2;
    }

    &.inactive {
      color: grey;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dddddd;
  font-weight: 300;
  font-size: 8px;
  height: 10vh;
  background-color: black;
`;
/* End Header */

/* Home */

export const HomeContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  width: 100vw;
  position: relative;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;

  margin-left: 5rem;
  padding: 2rem;
  gap: 1.4rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-weight: 700;
    font-size: 3.5rem;
    width: 100%;
    color: #fff;
  }
  p {
    width: 100%;
    font-weight: 400;
    font-size: 2.5rem;
    color: #fff;
  }
  button {
    padding: 10px;
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    width: 8rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 10px;
    border-style: none;
    &:hover {
      background-color: black;
      transform: scale(1.1);
      transition: 0.1s;
    }
  }
  @media screen and (max-width: 730px) {
    padding: 1rem;
    margin-left: 3.5rem;
  }
  @media screen and (max-width: 670px) {
    padding: 1rem;
    margin-left: 1.6rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem;
    margin-left: 1.5rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 414px) {
    margin-left: 0;
    padding: 0.9rem;
    gap: 1.5rem;
    margin-left: 1rem;

    h1 {
      font-size: 2rem;
      width: 100%;
    }
    p {
      font-size: 1.5rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 390px) {
    padding: 0.5rem;
    gap: 1.3rem;
    margin-left: 1.5rem;

    h1 {
      font-size: 1.8rem;
      width: 100%;
    }
    p {
      font-size: 1.4rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 0.5rem;
    gap: 1rem;
    margin-left: 1rem;

    h1 {
      font-size: 1.8rem;
      width: 100%;
    }
    p {
      font-size: 1.4rem;
      width: 100%;
    }
  }
`;
/* End home */

/* About */

export const AboutContainer = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 20px;
  padding: 20px;
  margin-left: 45rem;
  text-align: left;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-weight: 700;
    text-align: left;
    margin-left: 0;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;

    text-align: justify;
  }
  button {
    font-size: 20px;
    font-weight: 700;
    width: 8rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;

    &:hover {
      background-color: black;
      transform: scale(1.1);
      transition: 0.1s;
    }
  }

  @media screen and (max-width: 1230px) {
    gap: 2rem;
    padding: 1.5rem;
    margin: 0;
    width: 60%;
  }
  @media screen and (max-width: 1121px) {
    gap: 1.5rem;
    padding: 1.5rem;
    margin: 0;
    width: 70%;
  }
  @media screen and (max-width: 960px) {
    gap: 1rem;
    padding: 1.5rem;
    margin: 0;
    width: 75%;
  }
  @media screen and (max-width: 884px) {
    gap: 0.8rem;
    padding: 1.5rem;
    margin: 0;
    width: 80%;
    h1 {
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 830px) {
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    width: 80%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 820px) {
    gap: 2rem;
    padding: 1.5rem;
    margin: 0;
    width: 80%;
  }
  @media screen and (max-width: 780px) {
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    width: 80%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem;
    margin: 0;
    width: 70%;
  }
  @media screen and (max-width: 765px) {
    gap: 1rem;
    padding: 1rem;
    width: 80%;
    margin: 0;
  }
  @media screen and (max-width: 414px) {
    width: 90%;
    margin: 0;
    padding: 0.5rem;
    gap: 0.5rem;
    p {
      font-size: 0.8rem;
    }
    button {
      width: 5.5rem;
      font-size: 0.7rem;
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 375px) {
    margin: 0;
    width: 92%;
    padding: 0.5rem;
    gap: 0.2rem;
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

/*End About*/

/*Projects*/
export const ProjectContainer = styled.section`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  position: relative;

  @media screen and (max-width: 414px) {
    height: 100vh;
  }
  @media screen and (max-width: 375px) {
    height: auto;
    padding: 1rem;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 414px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
/*End Projects*/

/*Card*/
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  height: 25rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1102px) {
    width: 19.5rem;
  }
  @media screen and (max-width: 1077px) {
    width: 18rem;
    height: 24rem;
  }
  @media screen and (max-width: 1007px) {
    width: 17rem;
    height: 23rem;
  }
  @media screen and (max-width: 959px) {
    width: 16rem;
    height: 21rem;
  }
  @media screen and (max-width: 910px) {
    width: 15rem;
    height: 20rem;
  }
  @media screen and (max-width: 414px) {
    width: 15rem;
    height: 15rem;
  }
  @media screen and (max-width: 375px) {
    width: 15rem;
    height: 15rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 18rem;
  height: 14rem;
  border-radius: 10px;
  @media screen and (max-width: 1077px) {
    width: 17rem;
    height: 19rem;
  }
  @media screen and (max-width: 959px) {
    width: 15rem;
    height: 8rem;
  }
  @media screen and (max-width: 910px) {
    width: 14rem;
    height: 7rem;
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 414px) {
    width: 14rem;
  }
  @media screen and (max-width: 375px) {
    width: 14rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 1rem;
  gap: 1rem;

  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-weight: 700;
    width: 5rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    &:hover {
      background-color: black;
      transform: scale(1.1);
      transition: 0.1s;
    }
  }
  @media screen and (max-width: 414px) {
    gap: 0.5rem;
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 0.7rem;
      width: 5rem;
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 375px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

/*End Card*/

/*Contact*/

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    152deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 111, 1) 100%,
    rgba(58, 5, 85, 1) 100%
  );
  h1 {
    color: #fff;
  }
`;
export const FormContainer = styled.form`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;

  input,
  textarea {
    margin-bottom: 1.5rem;
    width: 80%;
    outline: 0;
    padding: 1rem;
    border: 0;
    border-bottom: 2px solid rgba(200, 200, 200);
    font-size: 1rem;
    font-weight: 700;
    &:focus {
      border-bottom: 2px solid purple;
      transition: 0.5s ease-in-out;
      color: black;
    }
  }

  button {
    color: #fff;
    font-size: 1rem;
    border-style: none;
    border-radius: 0.5rem;
    padding: 1rem;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      152deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(121, 9, 111, 1) 100%,
      rgba(58, 5, 85, 1) 100%
    );
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
  @media screen and (max-width: 414px) {
    width: 75vw;
    height: 45vh;
  }
`;

/*End Contact*/
