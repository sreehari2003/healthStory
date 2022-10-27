import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { theme } from './theme'
import DashBoard from './pages/DashBoard';
import Main from './pages/Index';
import Error from './pages/Error';
import Login from './pages/Login';
import Landing from './pages/Index';
import Wizard   from "./pages/Wizard"

import SideSection from './pages/dashboard/SideSection';

function App() {
  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />

      <Route path="/sidedash" element={<SideSection/>}></Route>
      <Route path="/wizard" element={<Wizard />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
