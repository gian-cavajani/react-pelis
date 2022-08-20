import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Movie from './SingleMovie';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setMode={setMode} mode={mode} />}></Route>
          <Route
            path="/movies/:id"
            element={<Movie setMode={setMode} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
