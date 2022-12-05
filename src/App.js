import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Container from "./components/Container/Container";
import "./reset.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Container>
      <NavBar />
      <Hero />
    </Container>
  );
}

export default App;
