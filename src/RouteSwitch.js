import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./components/App";
import {ThemeProvider} from 'styled-components'
import Theme from './components/Styles/Theme';
import GlobalStyles from './components/Styles/Global';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
  );
};

export default RouteSwitch;
