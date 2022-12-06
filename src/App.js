import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Container from "./components/Container/Container";
import "./reset.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Experience />
      <Stack />
      <Projects />
      <Connect />
      <Footer />
    </Container>
  );
}

export default App;
