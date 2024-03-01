import { Button } from "@nextui-org/react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function VerificationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Verificación de Correo</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src="../../public/rumen-logo.png"
                width="75"
                height="45"
                alt="Rumen's Logo"
              />
            </Section>
            <Section style={upperSection} className="text-center mt-7 mb-7">
              <Heading style={h1}>
                Haz click en el siguiente boton para verificar tu correo
              </Heading>
              <Button
                href="https://example.com"
                className="text-white hover:text-black hover:font-medium bg-dark-blue hover:bg-dark-blue/50 hover:transform hover:scale-110 hover:transition hover:ease-linear hover:duration-700"
              >
                Click me
              </Button>
            </Section>
            <Hr />
          </Section>
          <Text style={footerText} className="text-center">
            Este mensaje es producido automaticamente por Rumen.cl, porfavor no
            responder este correo.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#252f3d",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};
