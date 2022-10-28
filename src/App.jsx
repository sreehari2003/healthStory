import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "./theme";
import Error from "./pages/Error";
import Landing from "./pages/Index";
import Wizard from "./pages/Wizard";
import DashBoard from "./pages/DashBoard";
import AuthContext from "./context/Auth";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthContext>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthContext>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
