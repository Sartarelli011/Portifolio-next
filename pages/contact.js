import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";
import { ContactContainer, FormContainer } from "../styles/estilo";
function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();
    axios
      .post("/api/email", data)
      .then(() => {
        return console.log("Obrigado pelo contato", data);
      })
      .catch((error) => {
        return console.log("erro no contact", error);
      });
  }

  return (
    <>
      <Header />
      <ContactContainer>
        <h1>Entre em contato</h1>
        <FormContainer onSubmit={sendEmail}>
          <input
            placeholder="Name"
            required
            type="text"
            value={data.name}
            onChange={(e) =>
              setData((prevdata) => ({ ...prevdata, name: e.target.value }))
            }
          />

          <input
            required
            placeholder="Email"
            value={data.email}
            type="email"
            onChange={(e) =>
              setData((prevdata) => ({ ...prevdata, email: e.target.value }))
            }
          />

          <textarea
            placeholder="Message"
            value={data.message}
            rows="1"
            onChange={(e) =>
              setData((prevdata) => ({ ...prevdata, message: e.target.value }))
            }
          />
          <button type="submit">Enviar</button>
        </FormContainer>
      </ContactContainer>
      <Footer />
    </>
  );
}

export default Contact;
