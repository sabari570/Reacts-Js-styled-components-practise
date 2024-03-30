import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import Intro from "./components/intro/intro.component";
import BodyContent from "./components/body-content/body-content.component";
import Footer from "./components/footer/footer.component";

function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  };
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        < Intro />
        < BodyContent />
        < Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
