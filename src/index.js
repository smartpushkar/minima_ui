import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  fonts: {
    body: 'Manrope, sans-serif',
    heading: 'Manrope, sans-serif',
  },
});
root.render(
  <React.StrictMode>
    <NextUIProvider>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
