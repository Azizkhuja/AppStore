import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Home from "./layout/Home";
import Footer from "./components/Footer";

function App() {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <div className="App">
      <CssBaseline />
      <Container disableGutters={matches ? false : true}>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
