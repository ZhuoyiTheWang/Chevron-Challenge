import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Chatbot from './components/ChatBot';

const defaultTheme = createTheme({});

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState('dark');
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} />
      <Component {...pageProps} />
      <Chatbot/>
    </ThemeProvider>
  );
}