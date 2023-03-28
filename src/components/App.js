import "../css/Index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Historical from "./Historical";
import Physical from "./Physical";
import Management from "./Management";
import { createTheme, colors, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.teal[700],
      },
      secondary: {
        main: colors.grey[50],
      },
    },
    typography: {
      fontFamily: 'Merriweather',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/historical">
            <Historical />
          </Route>
          <Route path="/physical">
            <Physical />
          </Route>
          <Route path="/management">
            <Management />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
