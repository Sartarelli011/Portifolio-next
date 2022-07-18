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
  height: 10vh;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

  h1 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-left: 1rem;
    color: #fff;
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
`;

export const ProjectContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
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
  width: 40vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  background-color: #000;

  input,
  textarea {
    padding: 1rem;
    border-style: none;
    background-color: none;
    outline: 0;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    width: 60%;
  }
  button {
    padding: 1rem;
    width: 5rem;
  }
`;
