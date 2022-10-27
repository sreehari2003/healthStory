import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { theme } from './theme'
import DashBoard from './pages/DashBoard';
import Main from './pages/Index';
import Error from './pages/Error';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Wizard   from "./pages/Wizard"


function App() {
  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<Landing />} />

      <Route path="/wizard" element={<Wizard />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
