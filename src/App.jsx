import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Home from "./layout/Home";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
